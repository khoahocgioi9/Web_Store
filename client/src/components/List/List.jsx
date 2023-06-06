import React from "react";
import "./List.scss";
import { data } from "./data";
import Card from "../card/Card";

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
