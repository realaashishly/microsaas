import { SIDEBAR_ITEMS } from '@/lib/nav-menu-list';
import Link from 'next/link';
import React from 'react';

export default function Sidebar() {
    return (
        <div className='flex flex-col h-full py-6'>
            <div className='px-4'>
                <p className='hidden sm:block text-xl font-semibold'>
                    MicroSaaS
                </p>
            </div>

            <nav className='mt-8 flex-1 flex flex-col'>
                <ul className='space-y-6 px-3'>
                    {SIDEBAR_ITEMS.map((category) => (
                        <li key={category.category}>
                            <p className='text-sm font-medium  px-3'>
                                {category.category}
                            </p>

                            <ul className='space-y-1'>
                                {category.items.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className='flex items-center gap-x-3 rounded-lg px-3 py-2 transition-colors group'
                                            >
                                                <Icon className='size-4' />
                                                <span className='text-sm font-medium'>
                                                    {item.text}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
