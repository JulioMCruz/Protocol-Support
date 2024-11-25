'use client';

import { Card } from '@/components/ui/card';
import { UserManagementTable } from '@/components/dashboard/user-management-table';
import { RoleDefinitions } from '@/components/dashboard/role-definitions';

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text">User Management</h1>
        <p className="text-muted-foreground">
          Manage team members and their access levels
        </p>
      </div>

      <Card className="border gradient-border">
        <UserManagementTable />
      </Card>

      <RoleDefinitions />
    </div>
  );
}