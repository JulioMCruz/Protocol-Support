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
import { Search, UserCheck, UserX } from 'lucide-react';
import { NewBugReportModal } from './new-bug-report-modal';
import { BugDetailsModal } from './bug-details-modal';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';

const bugs = [
  {
    id: 'BUG-1',
    description: 'Login button not responding on mobile devices',
    priority: 'High',
    status: 'Open',
    assignedTo: null,
    deadline: '2024-04-01',
    requestedBy: ['John Doe', 'Jane Smith'],
  },
  {
    id: 'BUG-2',
    description: 'Dashboard charts not updating in real-time',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Jane Smith',
    deadline: '2024-04-05',
    requestedBy: [],
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

export function BugReportTable() {
  const [selectedBug, setSelectedBug] = useState<typeof bugs[0] | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleAssignDeveloper = (bugId: string, developer: string) => {
    toast({
      title: 'Developer Assigned',
      description: `${developer} has been assigned to the bug.`,
    });
  };

  const handleRejectRequest = (bugId: string, developer: string) => {
    toast({
      title: 'Request Rejected',
      description: `${developer}'s request has been rejected.`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search bugs..." className="pl-8" />
        </div>
        <NewBugReportModal />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bug ID</TableHead>
            <TableHead className="w-[300px]">Description</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Assignment</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bugs.map((bug) => (
            <TableRow key={bug.id}>
              <TableCell className="font-medium">{bug.id}</TableCell>
              <TableCell>{bug.description}</TableCell>
              <TableCell>
                <Badge
                  variant={priorityColors[bug.priority as keyof typeof priorityColors]}
                >
                  {bug.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={statusColors[bug.status as keyof typeof statusColors]}
                >
                  {bug.status}
                </Badge>
              </TableCell>
              <TableCell>
                {bug.assignedTo ? (
                  <span className="text-sm">{bug.assignedTo}</span>
                ) : bug.requestedBy.length > 0 ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        {bug.requestedBy.length} requests
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        <h4 className="font-medium">Assignment Requests</h4>
                        {bug.requestedBy.map((developer) => (
                          <div
                            key={developer}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm">{developer}</span>
                            <div className="space-x-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-green-500 hover:text-green-600 hover:bg-green-100"
                                onClick={() =>
                                  handleAssignDeveloper(bug.id, developer)
                                }
                              >
                                <UserCheck className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                                onClick={() =>
                                  handleRejectRequest(bug.id, developer)
                                }
                              >
                                <UserX className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <span className="text-sm text-muted-foreground">Unassigned</span>
                )}
              </TableCell>
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