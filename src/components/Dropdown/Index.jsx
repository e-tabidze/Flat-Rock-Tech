import React from "react";
import Switcher from "../Switcher/Index";
import { Tree } from "@fluentui/react-northstar";
import {
  TriangleDownIcon,
  TriangleEndIcon,
} from "@fluentui/react-icons-northstar";
import classes from "./styles.module.scss";

const items = [
  {
    id: "tree-title-customization-item-1",
    title: <Switcher text={"Permission Group 1"} />,
    items: [
      {
        id: "tree-title-customization-item-2",
        title: <Switcher text={"Permission 11"} />,
      },
      {
        id: "tree-title-customization-item-3",
        title: <Switcher text={"Permission 12"} />,
      },
      {
        id: "tree-title-customization-item-4",
        title: <Switcher text={"Permission 13"} />,
      },
      {
        id: "tree-title-customization-item-5",
        title: <Switcher text={"Permission 14"} />,
      },
    ],
  },
  {
    id: "tree-title-customization-item-2",
    title: <Switcher text={"Permission Group 2"} />,
    items: [
      {
        id: "tree-title-customization-item-222",
        title: <Switcher text={"Permission 11"} />,
      },
      {
        id: "tree-title-customization-item-333",
        title: <Switcher text={"Permission 12"} />,
      },
      {
        id: "tree-title-customization-item-44",
        title: <Switcher text={"Permission 13"} />,
      },
      {
        id: "tree-title-customization-item-55",
        title: <Switcher text={"Permission 14"} />,
      },
    ],
  },
];
const titleRenderer = (
  Component,
  { content, expanded, open, hasSubtree, ...restProps }
) => (
  <Component
    expanded={expanded}
    hasSubtree={hasSubtree}
    {...restProps}
    className={classes.container_titleRendered}
  >
    {expanded ? <TriangleDownIcon /> : <TriangleEndIcon />}
    {content}
  </Component>
);

const Index = () => {
  return (
    <Tree
      exclusive
      aria-label="Custom title"
      items={items}
      renderItemTitle={titleRenderer}
    />
  );
};

export default Index;
