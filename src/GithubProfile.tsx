import { useState } from "react";
import { Header } from "./components/Header";
import { IconGitHub } from "./components/icons/IconGithub";
import { Pill } from "./components/Pill";
import { Repositories } from "./components/Repositories";
import { SearchBar } from "./components/SearchBar";
import { User } from "./interfaces/interfaces";

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
  repostories: [];
}

export const GithubProfile = () => {
  const [profile, setProfile] = useState<GitHubData>({
    user: {
      name: "GitHub",
      image: "",
    },
    bio: "How people build software.",
    followers: "0",
    following: "0",
    location: "Narnia",
    repostories: [],
  });

  const { user, bio, followers, following, location, repostories } = profile;

  const handleCurrentUser = (user: User) => {
    setProfile({
      user: {
        image: user.avatar_url,
        name: user.login,
      },
      bio: "Usuario seleccionado",
      followers: "777",
      following: "777",
      location: "Narnia",
      repostories: [],
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
            <Repositories />

            <button onClick={() => console.log("Hola")}>
              <h4>View all repositories</h4>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
