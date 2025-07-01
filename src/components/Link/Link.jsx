import React from "react";
import { LineRoundedPassword } from "../../icons/LineRoundedPassword";
import "./style.css";

export const Link = ({
  icon,
  iconLeft,
  iconRight,
  color,
  weight,
  masterLinkClassName,
  override = <LineRoundedPassword className="line-rounded" color="#4A3AFF" />,
  divClassName,
  text = "Link item",
}) => {
  return (
    <div className="link">
      <div className={`master-link-2 ${masterLinkClassName}`}>
        {override}
        <div className={`link-item ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};