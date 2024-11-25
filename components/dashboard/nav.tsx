'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Bug, Users, Settings, LogOut, Code } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    title: 'Support Dashboard',
    href: '/dashboard',
    icon: Bug,
    role: 'support',
  },
  {
    title: 'Developer Dashboard',
    href: '/dashboard/developer',
    icon: Code,
    role: 'developer',
  },
  {
    title: 'User Management',
    href: '/dashboard/users',
    icon: Users,
    role: 'admin',
  },
  {
    title: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    role: 'all',
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  // In a real app, you would get the user's role from your auth system
  const userRole = 'admin'; // This could be 'admin', 'developer', or 'support'

  const filteredNavItems = navItems.filter(
    (item) => item.role === 'all' || item.role === userRole
  );

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="p-6">
        <h2 className="text-lg font-semibold gradient-text">BugFlow</h2>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {filteredNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors',
                pathname === item.href
                  ? 'gradient-primary text-primary-foreground'
                  : 'hover:bg-primary/10 text-muted-foreground hover:text-primary'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10"
          asChild
        >
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  );
}