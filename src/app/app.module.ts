import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { DiaryViewComponent } from './diary-view/diary-view.component';
import { DiaryExportComponent } from './diary-export/diary-export.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUIDataFormModule,
    NativeScriptUIListViewModule
  ],
  declarations: [
    AppComponent,
    DiaryEntryComponent,
    DiaryViewComponent,
    DiaryExportComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}