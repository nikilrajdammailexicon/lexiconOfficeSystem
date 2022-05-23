import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
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
  hours: number[] = [];
  minutes: number[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private notificationService: NotificationService) {

    this.dtOptions = {
      info: false,
      paging: false

    }
  }

  ngOnInit(): void {
    this.initializeTimeSheetObject();
    this.initializeProjectsArray();
    this.initializeTaskArray();
    this.initializeHoursDropdown();
    this.initializeMinutesDropdown();
    this.dtTrigger.next();
  }
  initializeTimeSheetObject(): void {
    this.timeSheet = {
      TimeSheetId: 0,
      Date: null,
      Hours: 0,
      Minutes: 0,
      Project: '0',
      Task: '0',
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
  initializeHoursDropdown(): void {
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
  }
  initializeMinutesDropdown(): void {
    for (let i = 0; i < 60; i = i + 15) {
      this.minutes.push(i);
    }
  }
  addTimeSheet(): void {
    if (!!this.timeSheet.Date && this.timeSheet.TimeSheetId == 0) {
      this.timeSheetDetails.length === 0
        ? (this.timeSheet.TimeSheetId = 1)
        : (this.timeSheet.TimeSheetId =
          this.timeSheetDetails[this.timeSheetDetails.length - 1]
            .TimeSheetId + 1);
      this.timeSheetDetails.push(this.timeSheet);
      this.notificationService.showSuccess('Saved Successfully');
    } else {
      const id = this.timeSheetDetails.findIndex(
        (x) => x.TimeSheetId === this.timeSheet.TimeSheetId
      );
      this.timeSheetDetails[id] = this.timeSheet;
      this.notificationService.showSuccess('Updated Successfully');
    }
    this.initializeTimeSheetObject();
    this.dtTrigger.next();
  }
  deleteTimeSheet(index: number): void {
    this.timeSheetDetails.splice(index, 1);
  }
  editTimeSheet(item: TimeSheet): void {
    this.timeSheet = item;
  }
}
