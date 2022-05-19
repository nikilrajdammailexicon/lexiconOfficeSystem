import { Component, Input, OnInit } from '@angular/core';
import { EmployeeLevel } from '../common/models/employee-level';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() employeeLevel: EmployeeLevel;
  EmployeeLevel = EmployeeLevel;

  constructor() { }

  ngOnInit(): void {
  }

}
