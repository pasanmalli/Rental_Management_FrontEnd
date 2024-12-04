import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  imports: [FormsModule,CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

 public customerList:any= [];

  
constructor(private http:HttpClient){

  this.loadtable();

}

loadtable(){

this.http.get("http://localhost:8020/customer/find-all").subscribe(data=>{

this.customerList = data;



})


}

deleteCustomer(id:any){

console.log(id);
this.http.delete(`http://localhost:8020/customer/delete-customer/${id}`).subscribe(data=>{

alert("Customer Deleted Successfully");
this.loadtable();

})

}

public selectedCustomer:any={};

selectUpdateCustomer(customer:any){

console.log(customer);
this.selectedCustomer =customer;

}

public saveCustomer(){

this.http.put("http://localhost:8020/customer/update-customer",this.selectedCustomer).subscribe(data=>{

alert("Customer Updated");
this.loadtable();


})


}



}
