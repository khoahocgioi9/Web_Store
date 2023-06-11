import { createContext } from "react";

const defaultValue = { theme: "light" };
const ThemeContext = createContext(defaultValue);

export default ThemeContext;
