import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Hi, I'm Jeff Weisman
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Welcome to my personal website. Explore my projects, read my blog, 
          and learn more about my journey in technology and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/blog">
            <Button size="lg" className="w-full sm:w-auto">
              Read My Blog
            </Button>
          </Link>
          <Link href="https://youtube.com/@jeffweisman" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Check Out My YouTube
            </Button>
          </Link>
        </div>
        
        {/* Color palette demo section */}
        <div className="mt-16 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Color Palette Demo</h2>
          <p className="text-muted-foreground mb-6">
            Use the theme toggle in the header to test different color palettes. 
            The elements below will change color based on your selection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground">Primary Button</Button>
            <Button variant="outline" className="border-primary text-primary">Outline Button</Button>
            <div className="px-4 py-2 bg-primary/10 text-primary rounded-md border border-primary/20">
              Primary Background
            </div>
            <div className="w-8 h-8 bg-primary rounded-full border-2 border-primary/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
