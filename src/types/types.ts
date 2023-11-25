import { Node } from "reactflow";
import { HierarchyNode } from "d3-hierarchy";

export type NodeData = {
  depth: number;
  label: string;
  expanded: boolean;
  expandable: boolean;
  tmpChildren: HierarchyNode<ExpandCollapseNode>[] | undefined;
};

export type ExpandCollapseNode = Node<NodeData>;
