'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Wallet2 } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add your authentication logic here
    
    // Show success message
    toast({
      title: 'Login Successful',
      description: 'Redirecting to dashboard...',
    });

    // Navigate to dashboard
    router.push('/dashboard');
  };

  const handleWalletConnect = () => {
    // Add your wallet connection logic here
    toast({
      title: 'Wallet Connection',
      description: 'Wallet connection feature coming soon!',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Choose your preferred login method
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            className="w-full"
            variant="outline"
            onClick={handleWalletConnect}
          >
            <Wallet2 className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button
                  variant="link"
                  className="px-0 font-normal"
                  onClick={() => toast({
                    title: 'Password Reset',
                    description: 'Password reset feature coming soon!',
                  })}
                >
                  Forgot password?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}