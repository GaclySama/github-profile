import { User } from "../interfaces/interfaces";
import { IconGitHub } from "./icons/IconGithub";

interface Props {
  users: User[];
  onSelectUser: () => void;
  handleCurrentUser: (user: User) => void;
}

export const SearchedUsers = ({
  users,
  onSelectUser,
  handleCurrentUser,
}: Props) => {
  const handleSelect = (user: User) => {
    onSelectUser();
    handleCurrentUser(user);
  };

  return (
    <>
      {users.map((user) => (
        <button
          key={user.id}
          className="searched-container"
          onClick={() => handleSelect(user)}
        >
          <IconGitHub
            style={{ marginLeft: "15px", maxHeight: "60px" }}
            image={user.avatar_url}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: "10px",
            }}
          >
            <h3>{user.login}</h3>
            <p>{user.html_url}</p>
          </div>
        </button>
      ))}
    </>
  );
};
