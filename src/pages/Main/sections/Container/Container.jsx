import React from "react";
import { NeviHomeWrapper } from "../NeviHomeWrapper";
import { Group26092124 } from "../../../../icons/Group26092124/Group26092124";
import "./style.css";

export const Container = () => {
  return (
    <NeviHomeWrapper
      className="container-instance"
      groupIcon={<Group26092124 className="group-2609212-4" />}
      nevi="home"
    />
  );
};