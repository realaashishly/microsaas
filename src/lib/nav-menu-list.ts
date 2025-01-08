import {
    Award,
    Bot,
    FileText,
    Gem,
    Home,
    Lightbulb,
    Settings,
    User,
} from 'lucide-react';

export const SIDEBAR_ITEMS = [
    {
        category: 'Dashboard',
        items: [
            {
                href: '/dashboard',
                icon: Home,
                text: 'Dashboard',
            },
            {
                href: '/dashboard/templates',
                icon: FileText,
                text: 'Templates',
            },
        ],
    },
    {
        category: 'Account',
        items: [
            {
                href: '/dashboard/upgrade',
                icon: Gem,
                text: 'Upgrade',
            },
        ],
    },
    {
        category: 'Settings',
        items: [
            {
                href: '/dashboard/profile',
                icon: User,
                text: 'Profile',
            },
            {
                href: '/dashboard/account-settings',
                icon: Settings,
                text: 'Account Settings',
            },
        ],
    },
];
