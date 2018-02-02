import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDetailPage } from './edit-detail';

@NgModule({
  declarations: [
    EditDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDetailPage),
  ],
})
export class EditDetailPageModule {}
