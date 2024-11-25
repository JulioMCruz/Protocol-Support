'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, GitPullRequest, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface BugDetailsModalProps {
  bug: {
    id: string;
    description: string;
    priority: string;
    status: string;
    assignedTo: string;
    deadline: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const comments = [
  {
    id: 1,
    author: 'John Doe',
    content: 'I can reproduce this issue on Chrome v120.',
    timestamp: '2024-03-20 10:30 AM',
  },
  {
    id: 2,
    author: 'Jane Smith',
    content: 'Found a potential fix. Will submit a PR soon.',
    timestamp: '2024-03-20 11:45 AM',
  },
];

export function BugDetailsModal({ bug, open, onOpenChange }: BugDetailsModalProps) {
  const [status, setStatus] = useState(bug.status);
  const { toast } = useToast();

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    toast({
      title: 'Status Updated',
      description: `Bug status changed to ${newStatus}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <span className="gradient-text text-xl">Bug Report Details</span>
            <Badge variant="outline" className="ml-2">
              {bug.id}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6">
            {/* Status and Priority Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger className="w-full gradient-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Priority</Label>
                <div>
                  <Badge
                    variant={
                      bug.priority === 'High'
                        ? 'destructive'
                        : bug.priority === 'Medium'
                        ? 'warning'
                        : 'default'
                    }
                  >
                    {bug.priority}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-2">
              <Label>Description</Label>
              <p className="text-sm text-muted-foreground">{bug.description}</p>
            </div>

            {/* Assignment and Deadline Section */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Assigned To</Label>
                <p className="text-sm text-muted-foreground">{bug.assignedTo}</p>
              </div>
              <div className="space-y-2">
                <Label>Deadline</Label>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-2 h-4 w-4" />
                  {bug.deadline}
                </div>
              </div>
            </div>

            <Separator />

            {/* GitHub Integration Section */}
            <div className="space-y-2">
              <Label className="flex items-center">
                <GitPullRequest className="mr-2 h-4 w-4" />
                Related Pull Request
              </Label>
              <Button variant="outline" className="w-full gradient-border">
                Create Pull Request
              </Button>
            </div>

            <Separator />

            {/* Comments Section */}
            <div className="space-y-4">
              <Label className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Comments
              </Label>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="p-3 rounded-lg bg-muted/50 space-y-1"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{comment.author}</span>
                      <span className="text-xs text-muted-foreground">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {comment.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button className="gradient-primary">Update Bug</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}