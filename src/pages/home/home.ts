import { Component } from '@angular/core';
import { ModalController, NavController, NavParams,ToastController, AlertController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { Item } from 'ionic-angular/components/item/item';
import { EditDetailPage } from '../edit-detail/edit-detail';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [{title: 'Tips', description: 'Pour effacer cette tache, slidez-la sur la droite'}];
 
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl: ModalController, public alertCtrl:AlertController, public dataService: Data) {
 
    this.dataService.getData().then((todos) => {
 
      if(todos){
        this.items = todos;
      }
 
    });
 
  }
 
  ionViewDidLoad(){
 
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
          
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    {this.items.push(item);
    this.dataService.save(this.items);}
  }
 
  viewItem(item){
      this.navCtrl.push(ItemDetailPage, {
      item: item });
    }
    
  

  deleteItem(item) {
    var index = this.items.indexOf(item, 0);
    if (index > -1) {
        this.items.splice(index, 1);
    }
}

  editItem(item){
 
  let addModal = this.modalCtrl.create(EditDetailPage);
  /* this.title = this.navParams.get('item').title;
  this.description = this.navParams.get('item').description; */
  
  addModal.present();
} 

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Add at least a title',
    duration: 3000,
    position: 'top'
  });
}

}

//patrice.serugendo@ifage.ch