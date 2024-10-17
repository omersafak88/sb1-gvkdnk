import { Injectable } from '@angular/core';
import { DiaryEntry } from '../models/diary-entry.model';
import { knownFolders, File, Folder } from '@nativescript/core';
import * as htmlToPdf from 'nativescript-html-to-pdf';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private entries: DiaryEntry[] = [];
  private storageFolder: Folder;

  constructor() {
    this.storageFolder = knownFolders.documents().getFolder('diary_entries');
    this.loadEntries();
  }

  private loadEntries() {
    const files = this.storageFolder.getEntitiesSync();
    files.forEach(file => {
      if (file instanceof File) {
        const content = file.readTextSync();
        const entry = JSON.parse(content);
        this.entries.push(entry);
      }
    });
    this.entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  addEntry(date: Date, content: string) {
    const entry: DiaryEntry = {
      id: Date.now().toString(),
      date: date,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.entries.unshift(entry);
    this.saveEntry(entry);
  }

  private saveEntry(entry: DiaryEntry) {
    const file = this.storageFolder.getFile(`${entry.id}.json`);
    file.writeTextSync(JSON.stringify(entry));
  }

  getEntries(): DiaryEntry[] {
    return this.entries;
  }

  searchEntries(searchText: string): DiaryEntry[] {
    return this.entries.filter(entry =>
      entry.content.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  deleteEntry(entry: DiaryEntry) {
    const index = this.entries.findIndex(e => e.id === entry.id);
    if (index !== -1) {
      this.entries.splice(index, 1);
      const file = this.storageFolder.getFile(`${entry.id}.json`);
      file.removeSync();
    }
  }

  exportEntries(startDate: Date, endDate: Date) {
    const filteredEntries = this.entries.filter(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= startDate && entryDate <= endDate;
    });

    let htmlContent = '<html><body>';
    filteredEntries.forEach(entry => {
      htmlContent += `<h2>${new Date(entry.date).toLocaleDateString()}</h2>`;
      htmlContent += `<p>${entry.content}</p>`;
      // Add image handling here if implemented
    });
    htmlContent += '</body></html>';

    const options = {
      html: htmlContent,
      fileName: 'diary_export',
      directory: knownFolders.documents().path,
    };

    htmlToPdf.generatePdf(options)
      .then((result) => {
        console.log('PDF generated', result);
        // Handle successful PDF generation (e.g., show a success message)
      })
      .catch((error) => {
        console.error('PDF generation failed', error);
        // Handle PDF generation error
      });
  }
}