"use client";
import { CriteriaSearchEmployee, ResultEmployeeDetail } from "@/app/model/employee-management.model";
import { defaultCriteriaSearchEmployee, fetchRead } from "@/app/services/employee-management.service";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const Read = () => {
    const [criteria, setCriteria] = useState<CriteriaSearchEmployee>(
        defaultCriteriaSearchEmployee()
    );

    let rows: ResultEmployeeDetail[] = [];

    const columns = [
        {
            key: "employeeId",
            label: "Employee ID",
        },
        {
            key: "name",
            label: "Name",
        },
        {
            key: "idCard",
            label: "ID Card",
        },
        {
            key: "birthDate",
            label: "Birth Date",
        },
        {
            key: "mobileNo",
            label: "Mobile No",
        },
        {
            key: "position",
            label: "Position",
        },
        {
            key: "department",
            label: "Department",
        },
        {
            key: "startDate",
            label: "Start Date",
        }
        ,
        {
            key: "terminateDate",
            label: "Terminate Date",
        }
    ];

    async function submit() {
        console.log(criteria);
        rows = await fetchRead(criteria);
        console.log(rows);
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
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="name">Name:</label>
                            <input
                                id="name"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={criteria.name}
                                onChange={(e) =>
                                    setCriteria({ ...criteria, name: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="idCard">ID Card:</label>
                            <input
                                id="idCard"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={criteria.idCard}
                                onChange={(e) =>
                                    setCriteria({ ...criteria, idCard: e.target.value })
                                }
                            ></input>
                        </div>
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="position">Position:</label>
                            <input
                                id="name"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={criteria.position}
                                onChange={(e) =>
                                    setCriteria({ ...criteria, position: e.target.value })
                                }
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-row w-full">
                        <div className="mt-4 px-6 w-2/5">
                            <label htmlFor="department">Department:</label>
                            <input
                                id="department"
                                className="rounded w-full py-2 px-2"
                                type="text"
                                value={criteria.department}
                                onChange={(e) =>
                                    setCriteria({ ...criteria, department: e.target.value })
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

                    <div className="flex flex-row">
                        <div className="w-full mt-6 px-6">
                            <Table aria-label="Example static collection table">
                                <TableHeader columns={columns}>
                                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                                </TableHeader>
                                <TableBody items={rows}>
                                    {(item) => (
                                        <TableRow key={item.key}>
                                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default Read;
