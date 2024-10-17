import { Component } from '@angular/core';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'ns-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.css']
})
export class DiaryEntryComponent {
  date: Date = new Date();
  content: string = '';

  constructor(private diaryService: DiaryService) {}

  onSave() {
    this.diaryService.addEntry(this.date, this.content);
    this.content = '';
    alert('Günlük kaydedildi.');
  }

  onImageTap() {
    // Implement image selection logic here
  }
}