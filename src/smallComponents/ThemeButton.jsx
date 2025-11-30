import { useThemeContext } from '../hooks/useThemeContext';
import { GoMoon, GoSun } from 'react-icons/go';

const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
      className="text-3xl"
    >
      {theme === 'light' ? <GoSun /> : <GoMoon />}
    </button>
  );
};

export default ThemeButton;
