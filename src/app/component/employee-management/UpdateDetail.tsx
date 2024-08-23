"use client";
import { CriteriaSeachEmployeeUpdate, CriteriaSearchEmployee, EmployeePersonalDetail } from "@/app/model/employee-management.model";
import { dafaultCriteriaSeachEmployeeUpdate, fetchSearchUpdatePersonal, fetchUpdatePersonal } from "@/app/services/employee-management.service";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useState } from "react";
import { EmployeeDetail, EmployeeWorkDetail } from "@/app/model/employee-management.model";
import { defaultEmployeePersonalDetail, defaultEmployeeWorkDetail } from "@/app/services/employee-management.service";

const UpdateDetail = () => {

    const [criteria, setCriteria] = useState<CriteriaSeachEmployeeUpdate>(
        dafaultCriteriaSeachEmployeeUpdate()
    );

    const [employeePersonalDetail, setEmployeePersonalDetail] = useState<EmployeePersonalDetail>(
        defaultEmployeePersonalDetail()
    );

    async function search() {
        console.log(criteria);
        const res = await fetchSearchUpdatePersonal(criteria);
        setEmployeePersonalDetail({
            employeeId: res.employeeId,
            name: res.name,
            idCard: res.idCard,
            birthDate: res.birthDate,
            mobileNo: res.mobileNo
        });
    }

    async function submit() {
        console.log(employeePersonalDetail);
        const res = await fetchUpdatePersonal(employeePersonalDetail);
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
                        <span className="text-small font-bold mt-6">Employee Detail</span>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeePersonalDetail.name}
                                onChange={(e) =>
                                    setEmployeePersonalDetail({ ...employeePersonalDetail, name: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">ID Card:</label>
                            <input
                                id="idCard"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeePersonalDetail.idCard}
                                onChange={(e) =>
                                    setEmployeePersonalDetail({ ...employeePersonalDetail, idCard: e.target.value })
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
                                value={employeePersonalDetail.birthDate}
                                onChange={(e) =>
                                    setEmployeePersonalDetail({ ...employeePersonalDetail, birthDate: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">Mobile No:</label>
                            <input
                                id="mobileNo"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={employeePersonalDetail.mobileNo}
                                onChange={(e) =>
                                    setEmployeePersonalDetail({ ...employeePersonalDetail, mobileNo: e.target.value })
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

export default UpdateDetail;
