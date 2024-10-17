import { Component } from '@angular/core';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'ns-diary-export',
  templateUrl: './diary-export.component.html',
  styleUrls: ['./diary-export.component.css']
})
export class DiaryExportComponent {
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(private diaryService: DiaryService) {}

  onExport() {
    this.diaryService.exportEntries(this.startDate, this.endDate);
  }
}