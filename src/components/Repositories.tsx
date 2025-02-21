import { useState } from "react";
import { ReposAPIResponse } from "../interfaces/interfaces";
import { Cart } from "./Cart";

interface Props {
  repositories: ReposAPIResponse[];
}

export const Repositories = ({ repositories }: Props) => {
  const [viewAll, setViewAll] = useState(false);

  const displayedRepositories = viewAll
    ? repositories
    : repositories.slice(0, 4);

  return (
    <>
      <div className="grid-card">
        {displayedRepositories.map((repository) => (
          <Cart
            key={`${repository.name}-${repository.id}`}
            repostory={repository}
          />
        ))}
      </div>

      {repositories.length > 4 && (
        <button onClick={() => setViewAll((prev) => !prev)}>
          {viewAll ? (
            <h4>Hidden repositories</h4>
          ) : (
            <h4>View all repositories</h4>
          )}
        </button>
      )}
    </>
  );
};
