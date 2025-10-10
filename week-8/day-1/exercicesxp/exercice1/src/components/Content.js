import { useTheme } from "../ThemeContext";

export default function Content() {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
      <h1>Welcome to Theme Switcher!</h1>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}
