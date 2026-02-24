import useAuthStore from '@/lib/store/authStore'
import { Banknote } from 'lucide-react'
import React from 'react'


export const DashboardHeader = () => {
    const { user, clearAuth} = useAuthStore()
  return (
    <header className='bg-card border-b border-border shadow-sm'>
            <div className='w-full px-4 py-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='flex h-8 w-8 items-center justify-center bg-primary'>
                                <Banknote className='h-4 w-4 text-primary-foreground' />
                        </div>
                            <h1 className='text-xl font-semibold text-foreground'>Finance Tracker </h1>
                    </div>

                    <div className='flex items-center ga-4'>
                            <span className='text-sm text-muted-foreground'>Welcome</span>
                            <span className='font-medium text-foreground'>{user?.name || 'laoding..'}</span>
                            {
                                console.log('info', user?.name)
                            }
                    </div>
                
            </div>
    </header>
  )
}
