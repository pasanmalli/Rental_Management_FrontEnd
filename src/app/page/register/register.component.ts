import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


constructor(private http:HttpClient){}  

public customer:any={

name:"",
city:"",
contact:""



}

addCustomer(){

console.log(this.customer);

this.http.post("http://localhost:8020/customer/add-customer",this.customer).subscribe(data=>{

alert("Customer Added Succefully");
location.reload();

})

}

}