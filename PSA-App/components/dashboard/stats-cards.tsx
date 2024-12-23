import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Open Bugs',
    value: '12',
    icon: AlertCircle,
    description: '3 high priority',
  },
  {
    title: 'Resolved Bugs',
    value: '48',
    icon: CheckCircle2,
    description: 'Last 30 days',
  },
  {
    title: 'Overdue Tasks',
    value: '4',
    icon: Clock,
    description: 'Needs attention',
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}