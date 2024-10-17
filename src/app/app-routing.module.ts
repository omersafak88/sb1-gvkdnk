import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { DiaryViewComponent } from './diary-view/diary-view.component';
import { DiaryExportComponent } from './diary-export/diary-export.component';

const routes: Routes = [
  { path: '', redirectTo: '/entry', pathMatch: 'full' },
  { path: 'entry', component: DiaryEntryComponent },
  { path: 'view', component: DiaryViewComponent },
  { path: 'export', component: DiaryExportComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}