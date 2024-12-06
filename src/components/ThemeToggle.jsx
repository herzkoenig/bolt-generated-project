import { Switch } from 'shadcn-ui';
    import { useTheme } from 'next-themes';

    export default function ThemeToggle() {
      const { theme, setTheme } = useTheme();

      return (
        <div className="p-10">
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </div>
      );
    }
