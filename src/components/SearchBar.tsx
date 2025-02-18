import { IconSearch } from "./icons/IconSearch";
import { User } from "./User";

export const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <div className="search-input">
          <button>
            <IconSearch />
          </button>

          <input type="text" />
        </div>

        <User />
      </div>
    </>
  );
};
