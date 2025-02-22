import { useState } from "react";
import { Header } from "./components/Header";
import { IconGitHub } from "./components/icons/IconGithub";
import { Pill } from "./components/Pill";
import { Repositories } from "./components/Repositories";
import { SearchBar } from "./components/SearchBar";
import type { FullUser, ReposAPIResponse, User } from "./interfaces/interfaces";
import { getUserByName } from "./actions/get-user-by-name";

const repos: ReposAPIResponse[] = [
  {
    id: 0,
    html_url: "",
    name: ".github",
    description: "Community health files for the @GitHub organizarion",
    license: null,
    forks_count: 2369,
    stargazers_count: 730,
    updated_at: new Date().toDateString(),
  },
  {
    id: 1,
    html_url: "",
    name: "accessibility-alt-text-bot",
    description:
      "An action to remind users to add alt text on Issues, Pull Requests, and Discussions",
    license: {
      key: "Mit",
      name: "Mit",
      spdx_id: "MIT",
    },
    forks_count: 7,
    stargazers_count: 50,
    updated_at: new Date().toDateString(),
  },
  {
    id: 1,
    html_url: "",
    name: "accessibilityjs",
    description: "Client side accessibility error scanner.",
    license: {
      key: "Mit",
      name: "Mit",
      spdx_id: "MIT",
    },
    forks_count: 72,
    stargazers_count: 2181,
    updated_at: new Date().toDateString(),
  },
  {
    id: 3,
    html_url: "",
    name: "actions-cheat-sheet",
    description: "A cheat sheet for GitHub Actions",
    license: {
      key: "Mit",
      name: "Mit",
      spdx_id: "MIT",
    },
    forks_count: 23,
    stargazers_count: 194,
    updated_at: new Date().toDateString(),
  },
];

const INITIAL_STATE: FullUser = {
  user: {
    id: 0,
    name: "GitHub",
    image: "",
    html_url: "https://github.com/",
  },
  bio: "How people build software.",
  followers: "27839",
  following: "0",
  location: "San Francisco, CA",
  repositories: repos,
};

export const GithubProfile = () => {
  const [profile, setProfile] = useState<FullUser>(INITIAL_STATE);

  const { user, bio, followers, following, location, repositories } = profile;

  const handleCurrentUser = async (user: User) => {
    setProfile(await getUserByName(user));
  };

  return (
    <div className="main-container center">
      <Header />

      <SearchBar handleCurrentUser={handleCurrentUser} />

      <div className="second-container">
        <div className="container">
          <IconGitHub
            style={{
              border: "#20293A solid 8px",
              width: "25%",
              cursor: "pointer",
            }}
            image={user.image}
            html_url={user.html_url}
          />

          <Pill title="Followers" value={followers} />
          <Pill title="Following" value={following} />
          <Pill title="Location" value={location} />
        </div>

        <h1>{user.name}</h1>
        <p>{bio} </p>

        {repositories.length < 1 ? (
          <h4>No repositories...</h4>
        ) : (
          <>
            <Repositories repositories={repositories} />
          </>
        )}
      </div>
    </div>
  );
};
