'use client';

import { Card } from '@/components/ui/card';
import { BugReportTable } from '@/components/dashboard/bug-report-table';
import { StatsCards } from '@/components/dashboard/stats-cards';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Manage and track bug reports across your projects.
        </p>
      </div>
      
      <StatsCards />
      
      <Card>
        <BugReportTable />
      </Card>
    </div>
  );
}