"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Create from "@/app/component/employee-management/Create";
import Read from "@/app/component/employee-management/Read";
import UpdateDetail from "@/app/component/employee-management/UpdateDetail";
import UpdateWorkDetail from "@/app/component/employee-management/UpdateWorkDetail";

type Props = {};

export default function page({ }: Props) {
  return (
    <div className="w-[95vw] pl-32 pr-4 py-12">
      <div className="flex flex-col w-full">
        <Tabs>
          <Tab key="create" title="Create">
            <Create />
          </Tab>
          <Tab key="read" title="Search">
            <Read />
          </Tab>
          <Tab key="updateDetail" title="Update Detail">
            <UpdateDetail />
          </Tab>
          <Tab key="updateWorkDetail" title="Update Work Detail">
            <UpdateWorkDetail />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
