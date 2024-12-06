import { Avatar, Button } from 'shadcn-ui';

    export default function Hero() {
      return (
        <div className="flex flex-col items-center justify-center text-center p-10">
          <Avatar src="/avatar.jpg" alt="Avatar" className="rounded-full w-32 h-32 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Your Username</h1>
          <h2 className="text-2xl font-semibold mb-4">Your Title</h2>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      );
    }
