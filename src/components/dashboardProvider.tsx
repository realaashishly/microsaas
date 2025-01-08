import { PropsWithChildren } from 'react';

export default function DashboardProvider({ children }: PropsWithChildren) {
    return <section>{children}</section>;
}
