type Props = {
  isLight: boolean;
  setTheme: (theme: "light" | "dark") => void;
};

const ThemeSwitcherSelect = ({ isLight, setTheme }: Props) => {
  return (
    <div
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex cursor-poointer"
      aria-label="Toggle theme"
    >
      {isLight ? "Change to dark" : "Change to Light"}
    </div>
  );
};

export default ThemeSwitcherSelect;
