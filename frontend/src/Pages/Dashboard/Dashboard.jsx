import { DashboardContent } from '@/components/Dashboard/DashboardContent'
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader'
import { TransactionForm } from '@/components/Dashboard/TransactionForm';
import React, { useState } from 'react'

export const Dashboard = () => {
  const [showCreateForm, setShowCreateFoarm] = useState(false);
  const [edtingTask, setEditingaTask] = useState(null)

  const handleCreateTaskClick = () => {
    setShowCreateFoarm(true)
  }

  const handleFormClose  = () => {
    setShowCreateFoarm(false)
    setEditingaTask(null)
  }
  return (
    <div className='min-h-screen bg-background'>
      {/* header section */}
        <DashboardHeader />

        {/* content section */}
        <main className='max-w-7xl mx-auto px-4 py-5 space-y-6'>
     <DashboardContent
     showCreateForm={showCreateForm}
     onCreateTask={handleCreateTaskClick}
    />
        </main>
     <TransactionForm
    //  task={edtingTask}
     open={showCreateForm || !!edtingTask}
     onOpenChange={handleFormClose}
      />
    </div>
   
  )
}
