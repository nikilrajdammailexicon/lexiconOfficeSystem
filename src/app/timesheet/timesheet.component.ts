import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common/services/notification.service';
import { Projects, Tasks, TimeSheet } from './timesheet.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  timeSheet: TimeSheet;
  showGrid: boolean = false;
  projects: Projects[] = [];
  task: Tasks[] = [];
  timeSheetDetails: TimeSheet[] = [];
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.initializeTimeSheetObject();
    this.initializeProjectsArray();
    this.initializeTaskArray();
  }
  initializeTimeSheetObject(): void {
    this.timeSheet = {
      TimeSheetId: 0,
      Date: null,
      Duration: '',
      Project: 'Project',
      Task: 'Task',
      CustomTask: '',
      Description: '',
    };
  }
  initializeProjectsArray(): void {
    this.projects = [
      {
        ProjectId: 1,
        ProjectName: 'BBM',
      },
      {
        ProjectId: 2,
        ProjectName: 'Dorsey',
      },
      {
        ProjectId: 3,
        ProjectName: 'Buzoops',
      },
      {
        ProjectId: 4,
        ProjectName: 'Itus',
      },
    ];
  }
  initializeTaskArray(): void {
    this.task = [
      {
        TaskId: 1,
        TaskName: 'Development',
      },
      {
        TaskId: 2,
        TaskName: 'Testing',
      },
      {
        TaskId: 3,
        TaskName: 'Documentation',
      },
      {
        TaskId: 4,
        TaskName: 'Other',
      },
    ];
  }
  addTimeSheet(): void {
    if(!!this.timeSheet.Date){
      this.timeSheetDetails.push(this.timeSheet);
      this.notificationService.showSuccess("Saved Successfully");
    }
    else{
      this.notificationService.showError("Failed")
    }
    this.initializeTimeSheetObject();
  }
  deleteTimeSheet(index: number): void{
this.timeSheetDetails.splice(index,1)
  }
  editTimeSheet(item: TimeSheet): void{
this.timeSheet = item;
  }
}
