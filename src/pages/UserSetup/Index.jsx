import React from "react";
import { useLocation } from "react-router";

export default function Index() {
  let location = useLocation();
  let itemId = location.state.itemId;
  return <div>{itemId}</div>;
}
