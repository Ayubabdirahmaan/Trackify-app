import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "../ui/card";

export const DashboardContent = ({ onCreateTask,showCreateForm}) => {
  return (
    <div>
      <div className="flex justify-between flex-wrap">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Your finances, simplified</h2>
          <p className="text-foreground">
            Easily track, analyze, and grow your money
          </p>
        </div>
        <div className="flex">
          <div className="mr-4">
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="All" className={"font-semibold"}>
                  All
                </TabsTrigger>
                <TabsTrigger value="This Month" className={"font-semibold"}>
                  This Month
                </TabsTrigger>
                <TabsTrigger value="Last Month">Last Month</TabsTrigger>
                <TabsTrigger value="This Year">This Year</TabsTrigger>
              </TabsList>
              <TabsContent value="account"></TabsContent>
              <TabsContent value="password"></TabsContent>
            </Tabs>
          </div>
          <Button onClick={onCreateTask} className={"bg-secondary-foreground"}>
            Create Transaction
          </Button>
        </div>
      </div>
      {/* card section */}
      <div className="flex items-start gap-6 flex-wrap mt-10">
        <Card className={"w-100 rounded-md"}>
          <h2 className="ml-4 text-primary font-semibold">Balance</h2>
          <span className="ml-4 font-bold text-2xl">${0}</span>
        </Card>
        <Card className={"w-100 rounded-md"}>
          <h2 className="ml-4 text-primary font-semibold">Incomes</h2>
          <span className="ml-4 font-bold text-2xl">${0}</span>
        </Card>
        <Card className={"w-100 rounded-md"}>
          <h2 className="ml-4 text-primary font-semibold">Expenses</h2>
          <span className="ml-4 font-bold text-2xl">${0}</span>
        </Card>
      </div>

      <Table className={"mt-10"}>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
