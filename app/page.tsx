import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bug, GitPullRequest, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-background" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
              Streamline Your Bug Reporting Process
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Efficiently track, manage, and resolve bugs with our AI-powered platform. 
              Built for modern development teams.
            </p>
            <div className="mt-10">
              <Link href="/login">
                <Button size="lg" className="rounded-full gradient-primary">
                  Log In to Start <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Powerful Features for Modern Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bug className="h-8 w-8" />}
              title="AI-Powered Detection"
              description="Automatically detect and categorize bugs using advanced machine learning algorithms."
            />
            <FeatureCard
              icon={<GitPullRequest className="h-8 w-8" />}
              title="GitHub Integration"
              description="Seamlessly sync with GitHub issues and pull requests for streamlined workflow."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Real-time Updates"
              description="Get instant notifications and track bug status changes in real-time."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 BugFlow. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
}) {
  return (
    <Card className="gradient-border bg-card">
      <CardHeader>
        <div className="mb-2 inline-block rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-3 text-primary">
          {icon}
        </div>
        <CardTitle className="gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}