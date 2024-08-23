"use client";
import { CriteriaSeachEmployeeUpdate, CriteriaSearchEmployee } from "@/app/model/employee-management.model";
import { dafaultCriteriaSeachEmployeeUpdate, fetchSearchUpdateWork, fetchUpdateWork } from "@/app/services/employee-management.service";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useState } from "react";
import { EmployeeDetail, EmployeeWorkDetail } from "@/app/model/employee-management.model";
import { defaultEmployeePersonalDetail, defaultEmployeeWorkDetail } from "@/app/services/employee-management.service";

const UpdateWorkDetail = () => {

    const [criteria, setCriteria] = useState<CriteriaSeachEmployeeUpdate>(
        dafaultCriteriaSeachEmployeeUpdate()
    );

    const [employeeWorkDetail, setEmployeeWorkDetail] = useState<EmployeeWorkDetail>(
        defaultEmployeeWorkDetail()
    );

    async function search() {
        console.log(criteria);
        const res = await fetchSearchUpdateWork(criteria);
        setEmployeeWorkDetail({
            employeeId: res.employeeId,
            position: res.position,
            department: res.department,
            startDate: res.startDate,
            terminateDate: res.terminateDate
        });
    }

    async function submit() {
        console.log(employeeWorkDetail);
        const res = await fetchUpdateWork(employeeWorkDetail);
        console.log(res);
    }

    return (
        <>
            <Card className="bg-default-200">
                <CardBody>
                    <div className="flex flex-col">
                        <span className="text-small font-bold mt-6">Search Employee Detail</span>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="employeeId">Employee ID:</label>
                            <input
                                id="employeeId"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={criteria.employeeId}
                                onChange={(e) =>
                                    setCriteria({ ...criteria, employeeId: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="w-1/5 mt-6 px-6">
                            <button
                                className="bg-default-50 py-2 px-4 rounded w-full"
                                onClick={() => search()}
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-small font-bold mt-6">Employee Work Detail</span>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="position">Position:</label>
                            <input
                                id="position"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeWorkDetail.position}
                                onChange={(e) =>
                                    setEmployeeWorkDetail({ ...employeeWorkDetail, position: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">Department:</label>
                            <input
                                id="department"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeWorkDetail.department}
                                onChange={(e) =>
                                    setEmployeeWorkDetail({ ...employeeWorkDetail, department: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                id="startDate"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                value={employeeWorkDetail.startDate}
                                onChange={(e) =>
                                    setEmployeeWorkDetail({ ...employeeWorkDetail, startDate: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="terminateDate">Terminate Date:</label>
                            <input
                                id="terminateDate"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                value={employeeWorkDetail.terminateDate}
                                onChange={(e) =>
                                    setEmployeeWorkDetail({ ...employeeWorkDetail, terminateDate: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="w-1/5 mt-6 px-6">
                            <button
                                className="bg-default-50 py-2 px-4 rounded w-full"
                                onClick={() => submit()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default UpdateWorkDetail;
