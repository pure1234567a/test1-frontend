import { CriteriaSeachEmployeeUpdate, CriteriaSearchEmployee, EmployeeDetail, EmployeePersonalDetail, EmployeeWorkDetail } from "../model/employee-management.model";

export function defaultEmployeeDetail() {
    return {
        employeeId: "",
        name: "",
        idCard: "",
        birthDate: "",
        mobileNo: "",
        position: "",
        department: "",
        startDate: "",
        terminateDate: ""
    };
}

export function defaultEmployeePersonalDetail() {
    return {
        employeeId: "",
        name: "",
        idCard: "",
        birthDate: "",
        mobileNo: ""
    };
}

export function defaultEmployeeWorkDetail() {
    return {
        employeeId: "",
        position: "",
        department: "",
        startDate: "",
        terminateDate: "",
    };
}

export function defaultCriteriaSearchEmployee() {
    return {
        employeeId: "",
        name: "",
        idCard: "",
        position: "",
        department: ""
    }
}

export function dafaultCriteriaSeachEmployeeUpdate() {
    return {
        employeeId: ""
    }
}

export async function fetchCreate(request: EmployeeDetail) {
    const res = await fetch('http://localhost:8080/main/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}

export async function fetchRead(request: CriteriaSearchEmployee) {
    const res = await fetch('http://localhost:8080/main/read', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}

export async function fetchSearchUpdatePersonal(request: CriteriaSeachEmployeeUpdate) {
    const res = await fetch('http://localhost:8080/main/searchUpdatePersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}

export async function fetchUpdatePersonal(request: EmployeePersonalDetail) {
    const res = await fetch('http://localhost:8080/main/updatePersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}

export async function fetchSearchUpdateWork(request: CriteriaSeachEmployeeUpdate) {
    const res = await fetch('http://localhost:8080/main/searchUpdateWork', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}

export async function fetchUpdateWork(request: EmployeeWorkDetail) {
    const res = await fetch('http://localhost:8080/main/updateWork', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await res.json()
}