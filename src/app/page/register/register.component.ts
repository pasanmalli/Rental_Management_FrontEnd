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

public student:any={

name:"",
email:"",
password:"",
address:""



}

addStudent(){

console.log(this.student);

this.http.post("http://localhost:8030/student/add-student",this.student).subscribe(data=>{

alert("Student Added Succefully");
location.reload();

})


}


searchByIdCustomer(){}



}
