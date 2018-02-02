import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-detail',
  templateUrl: 'edit-detail.html',
})
export class EditDetailPage {

  title :string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDetailPage');
  }
  

  close(){
    this.view.dismiss()
  }
}
