import { Header } from "./components/Header";
import { IconGitHub } from "./components/icons/IconGithub";
import { Pill } from "./components/Pill";
import { Repositories } from "./components/Repositories";
import { SearchBar } from "./components/SearchBar";

export const GithubProfile = () => {
  return (
    <div className="main-container center">
      <Header />

      <SearchBar />

      <div className="second-container">
        <div className="container">
          <div
            className="git-logo-container"
            style={{ border: "#20293A solid 8px", width: "25%" }}
          >
            <IconGitHub />
          </div>

          <Pill title="Followers" value="27839" />
          <Pill title="Following" value="0" />
          <Pill title="Location" value="San Francisco, CA" />
        </div>

        <h1>GitHub</h1>
        <p>How people build software.</p>

        <Repositories />

        <button onClick={() => console.log("Hola")}>
          View all repositories
        </button>
      </div>
    </div>
  );
};
