import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-rental-items',
  imports: [FormsModule,CommonModule],
  templateUrl: './view-rental-items.component.html',
  styleUrl: './view-rental-items.component.css'
})
export class ViewRentalItemsComponent {

  public rentalItemList:any= [];

  
  constructor(private http:HttpClient){
  
    this.loadtable();
  
  }
  
  loadtable(){
  
  this.http.get("http://localhost:8020/rental/find-all").subscribe(data=>{
  
  this.rentalItemList = data;
  
  
  
  })
  
  
  }
  
  deleteRentalItem(id:any){
  
  console.log(id);
  this.http.delete(`http://localhost:8020/rental/delete-rental-item/${id}`).subscribe(data=>{
  
  alert("Rental Item Deleted Successfully");
  this.loadtable();
  
  })
  
  }
  
  public selectedRentedItem:any={};
  
  selectUpdateRentedItem(rentalItem:any){
  
  console.log(rentalItem);
  this.selectedRentedItem =rentalItem;
  
  }
  
  public saveRentalItem(){
  
  this.http.put("http://localhost:8020/rental/update-rental-item",this.selectedRentedItem).subscribe(data=>{
  
  alert("Rented Item Updated");
  this.loadtable();
  


})
  }



}
