'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { BugDetailsModal } from './bug-details-modal';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const bugs = [
  {
    id: 'BUG-1',
    description: 'Login button not responding on mobile devices',
    priority: 'High',
    status: 'Open',
    assignedTo: null,
    deadline: '2024-04-01',
    requestedBy: [],
  },
  {
    id: 'BUG-2',
    description: 'Dashboard charts not updating in real-time',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'John Doe',
    deadline: '2024-04-05',
    requestedBy: ['Jane Smith'],
  },
  {
    id: 'BUG-3',
    description: 'API endpoint returning 500 error',
    priority: 'High',
    status: 'Open',
    assignedTo: null,
    deadline: '2024-04-03',
    requestedBy: ['John Doe', 'Bob Wilson'],
  },
];

const priorityColors = {
  High: 'destructive',
  Medium: 'warning',
  Low: 'default',
} as const;

const statusColors = {
  Open: 'destructive',
  'In Progress': 'warning',
  Resolved: 'success',
} as const;

export function DeveloperBugTable() {
  const [selectedBug, setSelectedBug] = useState<typeof bugs[0] | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleRequestAssignment = (bugId: string) => {
    toast({
      title: 'Assignment Requested',
      description: 'Your request has been sent to the support team.',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search bugs..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Tasks</TabsTrigger>
          <TabsTrigger value="assigned">Assigned Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bug ID</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Interested Devs</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bugs
                .filter((bug) => !bug.assignedTo)
                .map((bug) => (
                  <TableRow key={bug.id}>
                    <TableCell className="font-medium">{bug.id}</TableCell>
                    <TableCell>{bug.description}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          priorityColors[bug.priority as keyof typeof priorityColors]
                        }
                      >
                        {bug.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          statusColors[bug.status as keyof typeof statusColors]
                        }
                      >
                        {bug.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {bug.requestedBy.length} developer(s)
                      </Badge>
                    </TableCell>
                    <TableCell>{bug.deadline}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedBug(bug);
                          setDetailsModalOpen(true);
                        }}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gradient-border"
                        onClick={() => handleRequestAssignment(bug.id)}
                      >
                        Request Assignment
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="assigned">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bug ID</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bugs
                .filter((bug) => bug.assignedTo)
                .map((bug) => (
                  <TableRow key={bug.id}>
                    <TableCell className="font-medium">{bug.id}</TableCell>
                    <TableCell>{bug.description}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          priorityColors[bug.priority as keyof typeof priorityColors]
                        }
                      >
                        {bug.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          statusColors[bug.status as keyof typeof statusColors]
                        }
                      >
                        {bug.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{bug.assignedTo}</TableCell>
                    <TableCell>{bug.deadline}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedBug(bug);
                          setDetailsModalOpen(true);
                        }}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      {selectedBug && (
        <BugDetailsModal
          bug={selectedBug}
          open={detailsModalOpen}
          onOpenChange={setDetailsModalOpen}
        />
      )}
    </div>
  );
}