import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


  constructor(private http:HttpClient){}  

  public item:any={
  
  name:"",
  rental:"",
  fine:"",
  avalability:""
  
  
  
  }
  
  addItem(){
  
  console.log(this.item);
  
  this.http.post("http://localhost:8020/item/add-item",this.item).subscribe(data=>{
  
  alert("Item Added Succefully");
  location.reload();
  
  })
  
  }
  
  

















}
