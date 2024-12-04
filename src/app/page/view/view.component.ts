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

 public studentList:any= [];

  
constructor(private http:HttpClient){

  this.loadtable();

}

loadtable(){

this.http.get("http://localhost:8030/student/find-all").subscribe(data=>{

this.studentList = data;



})


}

deleteStudent(id:any){

console.log(id);
this.http.delete(`http://localhost:8030/student/delete-student/${id}`).subscribe(data=>{

alert("Student Deleted Successfully");
this.loadtable();

})

}

public selectedStudent:any={};

selectUpdateStudent(student:any){

console.log(student);
this.selectedStudent =student;

}

public saveStudent(){

this.http.put("http://localhost:8030/student/update-student",this.selectedStudent).subscribe(data=>{

alert("Student Updated");


})


}



}
