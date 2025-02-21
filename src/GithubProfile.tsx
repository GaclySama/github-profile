import { useState } from "react";
import { Header } from "./components/Header";
import { IconGitHub } from "./components/icons/IconGithub";
import { Pill } from "./components/Pill";
import { Repositories } from "./components/Repositories";
import { SearchBar } from "./components/SearchBar";
import { ReposAPIResponse, User } from "./interfaces/interfaces";
import { getUserByName } from "./actions/get-user-by-name";

interface UserGitHub {
  name: string;
  image: string;
}

interface GitHubData {
  user: UserGitHub;
  bio: string;
  followers: string;
  following: string;
  location: string;
  repostories: ReposAPIResponse[];
}

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

const INITIAL_STATE: GitHubData = {
  user: {
    name: "GitHub",
    image: "",
  },
  bio: "How people build software.",
  followers: "27839",
  following: "0",
  location: "San Francisco, CA",
  repostories: repos,
};

export const GithubProfile = () => {
  const [profile, setProfile] = useState<GitHubData>(INITIAL_STATE);

  const { user, bio, followers, following, location, repostories } = profile;

  const handleCurrentUser = async (user: User) => {
    const selectedUser = await getUserByName(user);
    setProfile({
      user: {
        image: selectedUser.avatar_url,
        name: selectedUser.login,
      },
      bio: selectedUser.bio,
      followers: selectedUser.followers.toString(),
      following: selectedUser.following.toString(),
      location: selectedUser.location,
      repostories: selectedUser.repos,
    });
  };

  return (
    <div className="main-container center">
      <Header />

      <SearchBar handleCurrentUser={handleCurrentUser} />

      <div className="second-container">
        <div className="container">
          <IconGitHub
            style={{ border: "#20293A solid 8px", width: "25%" }}
            image={user.image}
          />

          <Pill title="Followers" value={followers} />
          <Pill title="Following" value={following} />
          <Pill title="Location" value={location} />
        </div>

        <h1>{user.name}</h1>
        <p>{bio} </p>

        {repostories.length < 1 ? (
          <h4>Search an user...</h4>
        ) : (
          <>
            <Repositories repostories={repostories} />
          </>
        )}
      </div>
    </div>
  );
};
