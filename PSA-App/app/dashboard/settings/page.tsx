'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

export default function SettingsPage() {
  const { toast } = useToast();

  const handleSettingChange = () => {
    toast({
      title: 'Settings Updated',
      description: 'Your preferences have been saved.',
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold gradient-text">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and notifications.
        </p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="new-bugs">New Bug Reports</Label>
              <Switch id="new-bugs" defaultChecked onCheckedChange={handleSettingChange} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="assignments">Bug Assignments</Label>
              <Switch id="assignments" defaultChecked onCheckedChange={handleSettingChange} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="status-updates">Status Updates</Label>
              <Switch id="status-updates" defaultChecked onCheckedChange={handleSettingChange} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="compact-view">Compact View</Label>
              <Switch id="compact-view" onCheckedChange={handleSettingChange} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-avatars">Show Avatars</Label>
              <Switch id="show-avatars" defaultChecked onCheckedChange={handleSettingChange} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}