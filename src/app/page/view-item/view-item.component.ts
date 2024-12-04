
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent {

  public itemList:any= [];

  
  constructor(private http:HttpClient){
  
    this.loadtable();
  
  }
  
  loadtable(){
  
  this.http.get("http://localhost:8020/item/find-all").subscribe(data=>{
  
  this.itemList = data;
  
  
  
  })
  
  
  }
  
  deleteItem(id:any){
  
  console.log(id);
  this.http.delete(`http://localhost:8020/item/delete-item/${id}`).subscribe(data=>{
  
  alert("Item Deleted Successfully");
  this.loadtable();
  
  })
  
  }
  
  public selectedItem:any={};
  
  selectUpdateItem(item:any){
  
  console.log(item);
  this.selectedItem =item;
  
  }
  
  public saveItem(){
  
  this.http.put("http://localhost:8020/item/update-item",this.selectedItem).subscribe(data=>{
  
  alert("Item Updated");
  this.loadtable();
  


})
  }
}