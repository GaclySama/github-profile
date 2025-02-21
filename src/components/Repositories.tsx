import { ReposAPIResponse } from "../interfaces/interfaces";
import { Cart } from "./Cart";

interface Props {
  repostories: ReposAPIResponse[];
}

export const Repositories = ({ repostories }: Props) => {
  return (
    <>
      <div className="grid-card">
        {repostories.map((repository) => (
          <Cart
            key={`${repository.name}-${repository.id}`}
            repostory={repository}
          />
        ))}
      </div>

      <button onClick={() => console.log("Hola")}>
        <h4>View all repositories</h4>
      </button>
    </>
  );
};
