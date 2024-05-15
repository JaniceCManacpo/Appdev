import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../service/backend.service';
import { Employee } from '../model/Employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'] // Corrected from styleUrl to styleUrls
})
export class EmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: BackendService) {
    this.employeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      date_of_birth: ['']
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeService.addEmployee(newEmployee).subscribe(
        (employee) => {
          console.log('Employee added successfully', employee);
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error adding employee', error);
        }
      );
    }
  }
}
