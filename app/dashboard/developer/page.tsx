'use client';

import { Card } from '@/components/ui/card';
import { DeveloperBugTable } from '@/components/dashboard/developer-bug-table';
import { StatsCards } from '@/components/dashboard/stats-cards';

export default function DeveloperDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Developer Dashboard</h1>
        <p className="text-muted-foreground">
          View and manage your assigned bugs and available tasks
        </p>
      </div>
      
      <StatsCards />
      
      <Card>
        <DeveloperBugTable />
      </Card>
    </div>
  );
}