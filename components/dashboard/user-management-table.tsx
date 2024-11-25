'use client';

import { useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Search, UserPlus, Edit2, Trash2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const users = [
  {
    id: 1,
    name: 'John Doe',
    walletAddress: '0x1234...5678',
    role: 'Admin',
    email: 'john@example.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    walletAddress: '0x8765...4321',
    role: 'Developer',
    email: 'jane@example.com',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    walletAddress: '0x9876...1234',
    role: 'Support User',
    email: 'bob@example.com',
    status: 'Inactive',
  },
];

export function UserManagementTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.walletAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddUser = () => {
    toast({
      title: 'User Added',
      description: 'New user has been successfully added to the team.',
    });
  };

  const handleEditUser = (userId: number) => {
    toast({
      title: 'User Updated',
      description: 'User details have been successfully updated.',
    });
  };

  const handleDeleteUser = (userId: number) => {
    toast({
      title: 'User Removed',
      description: 'User has been removed from the team.',
    });
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-primary w-full sm:w-auto">
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="gradient-text">Add New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter user's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="user@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet">Wallet Address</Label>
                <Input id="wallet" placeholder="0x..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger className="gradient-border">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="support">Support User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full gradient-primary" onClick={handleAddUser}>
                Add User
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Wallet Address</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="font-mono">{user.walletAddress}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'Active' ? 'default' : 'secondary'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditUser(user.id)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive/90"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}