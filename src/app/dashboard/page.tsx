"use client";
import DashboardProvider from '@/components/dashboardProvider';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

export default function Page() {
    const { data: session } = useSession();

    if (!session?.user) redirect('/sign-in');

    return (
        <>
            <DashboardProvider>
                <h1>Dashboard</h1>
            </DashboardProvider>
        </>
    );
}
