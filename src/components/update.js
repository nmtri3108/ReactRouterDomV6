import React from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  let { id } = useParams();

  return <div>Update + id: {id}</div>;
};

export default Update;
