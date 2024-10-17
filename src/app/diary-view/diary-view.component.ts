import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import { DiaryEntry } from '../models/diary-entry.model';

@Component({
  selector: 'ns-diary-view',
  templateUrl: './diary-view.component.html',
  styleUrls: ['./diary-view.component.css']
})
export class DiaryViewComponent implements OnInit {
  entries: DiaryEntry[] = [];
  searchText: string = '';

  constructor(private diaryService: DiaryService) {}

  ngOnInit() {
    this.loadEntries();
  }

  loadEntries() {
    this.entries = this.diaryService.getEntries();
  }

  onSearch() {
    this.entries = this.diaryService.searchEntries(this.searchText);
  }

  onEdit(entry: DiaryEntry) {
    // Implement edit logic
  }

  onDelete(entry: DiaryEntry) {
    this.diaryService.deleteEntry(entry);
    this.loadEntries();
  }
}