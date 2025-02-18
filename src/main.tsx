import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/components.css";
import { GithubProfile } from "./GithubProfile.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GithubProfile />
  </StrictMode>
);
