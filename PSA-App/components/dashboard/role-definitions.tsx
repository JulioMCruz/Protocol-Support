'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Shield, Tool, Headset } from 'lucide-react';

const roles = [
  {
    title: 'Admin',
    Icon: Shield,
    description:
      'Full access to all features including user management, role assignments, and system settings.',
    permissions: [
      'Manage users and roles',
      'Access all bug reports',
      'Configure system settings',
      'Generate reports',
    ],
  },
  {
    title: 'Developer',
    Icon: Tool,
    description:
      'Can view and update bug reports, assign tasks, and mark issues as resolved.',
    permissions: [
      'View assigned bugs',
      'Update bug status',
      'Add comments',
      'Access technical details',
    ],
  },
  {
    title: 'Support User',
    Icon: Headset,
    description:
      'Can create and view bug reports, add comments, and track issue status.',
    permissions: [
      'Create bug reports',
      'View bug status',
      'Add comments',
      'Basic dashboard access',
    ],
  },
];

export function RoleDefinitions() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 gradient-text">Role Definitions</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {roles.map(({ title, Icon, description, permissions }) => (
          <Card key={title} className="gradient-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="gradient-text">{title}</CardTitle>
              </div>
              <CardDescription className="mt-2">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2 text-sm">Permissions:</h4>
              <ul className="space-y-1">
                {permissions.map((permission) => (
                  <li key={permission} className="text-sm text-muted-foreground">
                    • {permission}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}