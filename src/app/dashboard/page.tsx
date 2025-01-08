import DashboardProvider from '@/components/dashboardProvider';
import React from 'react';

export default function Page() {
    return (
        <>
            <DashboardProvider>
                <h1>Dashboard</h1>
            </DashboardProvider>
        </>
    );
}
