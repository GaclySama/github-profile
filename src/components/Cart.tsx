import { IconChield } from "./icons/IconChield";
import { IconNesting } from "./icons/IconNesting";
import { IconStar } from "./icons/IconStar";

export const Cart = () => {
  return (
    <div className="card-container">
      <h3>Title repository</h3>
      <p>Comment about repository</p>

      <div className="row">
        <IconChield />
        <p>MIT</p>

        <IconNesting />
        <p>72</p>

        <IconStar />
        <p>2181</p>

        <p>updated 4 days ago</p>
      </div>
    </div>
  );
};
