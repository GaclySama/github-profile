import { IconSearch } from "./icons/IconSearch";
import { SearchedUsers } from "./SearchedUsers";
import { useSearch } from "../hooks/useSearch";
import { User } from "../interfaces/interfaces";

interface Props {
  handleCurrentUser: (user: User) => void;
}

export const SearchBar = ({ handleCurrentUser }: Props) => {
  const {
    // Properties
    inputValue,
    searchContainerRef,
    showUsers,
    users,
    // Methods
    handleChange,
    handleSubmit,
    setShowUsers,
  } = useSearch();

  return (
    <>
      <div className="search-container" ref={searchContainerRef}>
        <form className="search-input" onSubmit={handleSubmit}>
          <button type="submit">
            <IconSearch />
          </button>

          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Search user..."
            onFocus={() => setShowUsers(true)}
          />
        </form>

        {showUsers && users.length > 0 && (
          <SearchedUsers
            users={users}
            onSelectUser={() => setShowUsers(false)}
            handleCurrentUser={handleCurrentUser}
          />
        )}
      </div>
    </>
  );
};
