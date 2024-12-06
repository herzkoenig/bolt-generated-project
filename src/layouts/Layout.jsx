import Hero from '../components/Hero.jsx';
    import Projects from '../components/Projects.jsx';
    import BlogPosts from '../components/BlogPosts.jsx';
    import ThemeToggle from '../components/ThemeToggle.jsx';

    export default function Layout() {
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <ThemeToggle />
          <Hero />
          <Projects />
          <BlogPosts />
        </div>
      );
    }
