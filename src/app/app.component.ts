import { Component, OnInit } from '@angular/core';
import { EmployeeLevel } from './common/models/employee-level';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Lexicon Office System';
  sideBarOpen = true;
  employeeLevel: EmployeeLevel = EmployeeLevel.HR;

  //constructor(private store: LocalStorageService)

  ngOnInit(): void {
    this.employeeLevel = EmployeeLevel[localStorage.getItem('employeeLevel')];
    console.log("Employee Level: ", this.employeeLevel);
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
