export interface TimeSheet {
TimeSheetId: number;
Date: Date,
Duration: string,
Project: string,
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

 