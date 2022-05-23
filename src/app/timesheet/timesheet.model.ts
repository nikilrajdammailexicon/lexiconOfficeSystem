export interface TimeSheet {
TimeSheetId: number;
Date: Date,
Project: string,
Hours: number;
Minutes: number;
Task: string,
CustomTask? : string,
Description?: string
}
export interface Projects {
ProjectId: number,
ProjectName: string
}
export interface Tasks{
    TaskId: number,
    TaskName: string
}

 