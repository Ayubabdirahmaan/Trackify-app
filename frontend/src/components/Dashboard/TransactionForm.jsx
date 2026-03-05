import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { DialogContent } from "../ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api/apiCleints";
import { toast } from "sonner";

export const TransactionForm = ({
  task,
  open = true,
  onOpenChange,
  isLoading = false,
}) => {
  const [formValues, setFoarmValue] = useState({
    title: "",
    Category: "",
    status: "expensive",
    amount: "",
    dueDate: "",
  });
  const handleStatusChange = (value) => {
    setFoarmValue({
      ...formValues,
      status: value,
    });
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFoarmValue({
      ...formValues,
      [name]: value,
    });
  };
  const handleCencel = () => {
    onOpenChange(false);
  };

  const TASK_STATUS = [
    { value: "expensive", label: "expensive" },
    { value: "income", label: "income" },
  ];

  const createTransportionMutaion = useMutation({
    mutationFn: async (taskData) => {
      const response = await api.post('/createTask/', taskData)
      return response.data
    },
    onSuccess : (data) => {
      onOpenChange?.(false)
     setFoarmValue({
        title: "",
        description: "",
        status: "expensive",
        dueDate : ""
      })
    console.log('task create successfully', data)
    toast.success('task created successfully')
    },
    onError : (error) => {
      console.log('error created task:', error)
      toast.error('Error created task', error)
    }
  }
  
)


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"sm:mx-w-[500px]"}>
        <DialogHeader>
          <DialogTitle>Create New Transaction</DialogTitle>
          <DialogDescription>Fill in details below the form</DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label>Title *</Label>
            <input
              id="title"
              className="w-full border p-1"
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
              placeholder="Enter Your title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Amount *</Label>
            <input
              id="amount"
              className="w-full border p-1"
              name="amount"
              type="number"
              value={formValues.amount}
              onChange={handleInputChange}
              placeholder="e.g 50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Category *</Label>
            <input
              id="amount"
              className="w-full border p-1"
              name="Category"
              type="text"
              value={formValues.Category}
              onChange={handleInputChange}
              placeholder="e.g car shopping"
              required
            />
          </div>

          <div className="space-y-2">
            <Select
              value={formValues.status}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className={"w-full"}>
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                {TASK_STATUS.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
         
          <div className="space-y-2">
            <Label>Due Date</Label>
            <input
              id="dueDate"
              className="w-full border p-1"
              name="Duedate"
              type="date"
              value={formValues.dueDate}
              onChange={handleInputChange}
              placeholder="e.g 50"
              required
            />
          </div>
          <DialogFooter className={"flex justify-end space-x-2"}>
            <Button type="button" variant="outline" onChange={handleCencel}>
              Cencel
            </Button>
            <Button type="sibmit" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader size={sm} />
                  {task ? "Upditing..." : "Creating..."}
                </span>
              ) : task ? (
                "Udpate Task...."
              ) : (
                "Create task"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
