export interface EmployeeDetail {
    employeeId: string;
    name: string;
    idCard: string;
    birthDate: string;
    mobileNo: string;
    position: string;
    department: string;
    startDate: string;
    terminateDate: string;
}

export interface EmployeePersonalDetail {
    employeeId: string;
    name: string;
    idCard: string;
    birthDate: string;
    mobileNo: string;
}

export interface EmployeeWorkDetail {
    employeeId: string;
    position: string;
    department: string;
    startDate: string;
    terminateDate: string;
}

export interface CriteriaSearchEmployee {
    employeeId: string,
    name: string,
    idCard: string
    position: string,
    department: string
}

export interface CriteriaSeachEmployeeUpdate {
    employeeId: string
}

export interface ResultEmployeeDetail {
    key: number;
    employeeId: string;
    name: string;
    idCard: string;
    birthDate: string;
    mobileNo: string;
    position: string;
    department: string;
    startDate: string;
    terminateDate: string;
}