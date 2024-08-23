"use client";
import React, { useEffect, useState } from "react";
import { EmployeeDetail, EmployeeWorkDetail } from "@/app/model/employee-management.model";
import { defaultEmployeeDetail, defaultEmployeeWorkDetail, fetchCreate } from "@/app/services/employee-management.service";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { DatePicker, DateValue } from "@nextui-org/react";

const Create = () => {
    const [employeeDetail, setEmployeeDetail] = useState<EmployeeDetail>(
        defaultEmployeeDetail()
    );

    async function submit() {
        console.log(employeeDetail);
        const data = await fetchCreate(employeeDetail);
        console.log(data);
    }

    return (
        <>
            <Card className="bg-default-200">
                <CardBody>
                    <div className="flex flex-col">
                        <span className="text-small font-bold mt-6">Employee Detail</span>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeDetail.name}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, name: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">ID Card:</label>
                            <input
                                id="idCard"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeDetail.idCard}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, idCard: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="birthDate">Birth Date:</label>
                            <input
                                id="birthDate"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                value={employeeDetail.birthDate}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, birthDate: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">Mobile No:</label>
                            <input
                                id="mobileNo"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeDetail.mobileNo}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, mobileNo: e.target.value })
                                }
                            ></input>
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
                                value={employeeDetail.position}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, position: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">Department:</label>
                            <input
                                id="department"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeeDetail.department}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, department: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="startDate">Birth Date:</label>
                            <input
                                id="startDate"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                placeholder="DD/MM/YYYY"
                                value={employeeDetail.startDate}
                                onChange={(e) =>
                                    setEmployeeDetail({ ...employeeDetail, startDate: e.target.value })
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

export default Create;
