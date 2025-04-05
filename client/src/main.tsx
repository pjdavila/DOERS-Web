import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/i18n"; // Import the i18n configuration

createRoot(document.getElementById("root")!).render(<App />);
