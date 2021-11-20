import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource:MatTableDataSource<User>;
  user: User[];
  show = false;
  delete:boolean;
  info: any;
  index: any;
  flag = false;
  label = '';
  spin = false;
  btnLabel = '';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  userForm: FormGroup;
  
  constructor( private fb: FormBuilder, private toastr: ToastrService, private _service: HttpClientService) { }
  columnsToDisplay: String[] = ['name', 'email', 'age', 'phone', 'action'];


  ngOnInit(): void {
    this.createForm();
  } 

  getUserData() {{
        this._service.getAllUsers().subscribe(
          (response) => {
            this.user = response;
            this.dataSource = new MatTableDataSource<User>(this.user);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error => {
            this.toastr.error('Something went wrong!!')
            console.log(error.error);
          })
      }
  }

  onSubmit(form: FormGroupDirective) {
    this._service.postUser(this.userForm.value).subscribe(response => {
      this.toastr.success('User Added Successfully!!');
      form.resetForm();
      this.userForm.reset();
      this.getUserData();
      this.show = false;
    },
      error => {
        this.toastr.error("Something Went Wrong!!");
        console.log(error);
      })
    }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    });
  }

  onAdd() {
    this.show = !this.show;
    this.label = 'Add New User';
    this.btnLabel = 'Add';
  }

  onEdit(info) {
    this.show = !this.show;
    this.flag = true;
    this.label = 'Edit User';
    this.btnLabel = 'Update';
    this.userForm.patchValue({
      ...info,
      requestType: 'Edit'
    });
  }

  onUpdate() {
    this._service.updateUser(this.userForm.value).subscribe(response => {
      this.toastr.success("User Updated Successfully!!");
      this.userForm.reset();
      this.getUserData();
      this.show = false;
    },
      error => {
        this.toastr.error(error.error);
        console.log(error);
      });
    }

  onConfirmDelete(info, index){
    this.index = index;
    this.info = info;
    this.delete = true
  }

  onDelete() {
    this._service.deleteUser(this.info).subscribe((response) => {
      this.toastr.info("User Deleted Successfully!!");
      this.getUserData();
      this.delete = false;
    },
      error => {
        this.toastr.error(error.error);
        console.log(error);
      })
    }

}
