export interface IExampleCreate {
  company_id: string;
  email: string;
  roles: [
    {
      id: number;
    }
  ];
}
export interface IExampleQuery {
  company_id: string;
  email: string;
}
export interface IExampleEntity {
  name: string;
  hr_code: string;
  avatar?: string;
  email?: string;
  phone?: string;
  attendance_code?: string;
  status?: StaffStatus;
  positions?: { department: { id: number }; position: { id: number } }[];
  employment_type?: any;
  shift_time?: any;
}

export enum StaffStatus {
  WORKING = "working",
  TEMPORARY_OFF_WORK = "temporary_off_work",
  QUIT = "quit", //
}
