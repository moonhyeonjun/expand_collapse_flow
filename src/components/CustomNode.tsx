import { MouseEventHandler } from "react";
import { Handle, NodeProps, Position, useReactFlow } from "reactflow";

import styles from "../styles/styles.module.css";

type GetLabelParams = {
  label: string;
  expanded: boolean;
  expandable: boolean;
};

// this function returns the label for the node based on the current state
function getLabel({ label, expanded, expandable }: GetLabelParams): string {
  if (!expandable) {
    return `${label} nothing to expand`;
  }

  return expanded
    ? `${label} Click to collapse ▲`
    : `${label} Click to expand ▼`;
}

export default function CustomNode({ data, id, xPos, yPos }: NodeProps) {
  const { addNodes, addEdges } = useReactFlow();

  const addChildNode: MouseEventHandler = (evt) => {
    // prevent the expand/collapse behaviour when a new node is added while the
    // node is expanded
    if (data.expanded) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    const newNodeId = `${id}__${new Date().getTime()}`;

    // the edge between the clicked node and the child node is created
    addNodes({
      id: newNodeId,
      position: { x: xPos, y: yPos + 100 },
      data: { label: "X" },
    });
    addEdges({ id: `${id}->${newNodeId}`, source: id, target: newNodeId });
  };

  // based on the state of the node, we show the label accordingly
  const label = getLabel(data);

  return (
    <div className={styles.node}>
      <div className={styles.label}>{label}</div>
      <Handle position={Position.Top} type="target" />
      <Handle position={Position.Bottom} type="source" />
      <div className={styles.button} onClick={addChildNode}>
        + add child node
      </div>
    </div>
  );
}
