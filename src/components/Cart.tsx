import { Fragment, JSX } from "react";
import { getDaysAgo } from "../config/helpers/Functions";
import { ReposAPIResponse } from "../interfaces/interfaces";
import { IconChield } from "./icons/IconChield";
import { IconNesting } from "./icons/IconNesting";
import { IconStar } from "./icons/IconStar";

interface Props {
  repostory: ReposAPIResponse;
}

interface Items {
  condition: boolean;
  icon: JSX.Element;
  value: string | number | undefined;
}

export const Cart = ({ repostory }: Props) => {
  const {
    description,
    forks_count,
    license,
    name,
    stargazers_count,
    updated_at,
    html_url,
  } = repostory;

  const itemsConfig: Items[] = [
    {
      condition: !!license?.spdx_id,
      icon: <IconChield />,
      value: license?.spdx_id,
    },
    {
      condition: forks_count > 0,
      icon: <IconNesting />,
      value: forks_count,
    },
    {
      condition: stargazers_count > 0,
      icon: <IconStar />,
      value: stargazers_count,
    },
  ];

  const handleClick = () => {
    if (html_url) {
      window.open(html_url);
    }
  };

  return (
    <button className="card-container" onClick={handleClick} role="option">
      <div>
        <h3 style={{ marginBottom: "10px" }}>{name}</h3>
        <p>{description || "No description available"}</p>
      </div>

      <div className="row">
        {itemsConfig.map(
          ({ condition, icon, value }, index) =>
            condition && (
              <Fragment key={index}>
                {icon}
                <p>{value}</p>
              </Fragment>
            )
        )}

        <p>updated {getDaysAgo(updated_at)} days ago</p>
      </div>
    </button>
  );
};
