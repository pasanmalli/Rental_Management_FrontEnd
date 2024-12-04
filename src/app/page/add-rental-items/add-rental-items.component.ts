import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-rental-items',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-rental-items.component.html',
  styleUrl: './add-rental-items.component.css'
})
export class AddRentalItemsComponent {

  constructor(private http:HttpClient){}  

  public rentalItem:any={
  
  rentalDate:"",
  returnDate:"",
  dueDate:"",
  totalCost:"",
  fine:""
  
  
  
  }
  
  addRentalItem(){
  
  console.log(this.rentalItem);
  
  this.http.post("http://localhost:8020/rental/add-rental-item",this.rentalItem).subscribe(data=>{
  
  alert("Rental Item Added Succefully");
  location.reload();
  
  })
  
  }
  



}
