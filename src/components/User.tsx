import { IconGitHub } from "./icons/IconGithub";

export const User = () => {
  return (
    <button className="searched-container">
      <div className="git-logo-container" style={{ maxHeight: "80px" }}>
        <IconGitHub />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "10px",
        }}
      >
        <h1>GitHub</h1>
        <p>How people build software.</p>
      </div>
    </button>
  );
};
