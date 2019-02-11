import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employees.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
     Id : null,
      Name : '',
       Description : '',
      Rating : null,
      DateReleased : '',
      Genre : { Id : null, Name : ''},
      Genre_Id:null,
      

      
     
    }
  }

  str;

  
  // jsObj = .fromJSON('luo');
 
// jsonObj = JSON.parse('lol');
  onSubmit(form: NgForm) {
    //console.log(form.value.Genre_Id);
    
    if (form.value.Id == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    console.log('in');
    form.value.Id=0;
    console.log(form.value.Genre_Id);
    
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    console.log('up');
    
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}