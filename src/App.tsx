import { useCallback, useState } from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  MiniMap,
  Background,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  Node,
  Edge,
} from "reactflow";

import CustomNode from "./components/CustomNode";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./data/initialElements";
// import useForceLayout from "./hooks/useForceLayout";
import useExpandCollapse from "./hooks/useExpandCollapse";
// import useAnimatedNodes from "./hooks/useAnimatedNodes";

import "reactflow/dist/style.css";
import styles from "./styles/styles.module.css";

const proOptions = { account: "paid-pro", hideAttribution: true };

const nodeTypes = {
  custom: CustomNode,
};

type ExpandCollapseExampleProps = {
  treeWidth?: number;
  treeHeight?: number;
  animationDuration?: number;
};

function ReactFlowPro({
  treeWidth = 220,
  treeHeight = 100,
  animationDuration = 300,
}: ExpandCollapseExampleProps = {}) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { nodes: visibleNodes, edges: visibleEdges } = useExpandCollapse(
    nodes,
    edges,
    { treeWidth, treeHeight, layoutNodes: true }
  );
  // useForceLayout({ strength: -1000, distance: 150 });

  // const { nodes: animatedNodes } = useAnimatedNodes(visibleNodes, {
  //   animationDuration,
  // });

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      setNodes((nds) =>
        nds.map((n) => {
          if (n.id === node.id) {
            return {
              ...n,
              data: { ...n.data, expanded: !n.data.expanded },
            };
          }
          return n;
        })
      );
    },
    [setNodes]
  );

  return (
    <ReactFlow
      fitView
      nodes={visibleNodes}
      // nodes={animatedNodes}
      edges={visibleEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      proOptions={proOptions}
      nodeTypes={nodeTypes}
      nodesDraggable={true}
      nodesConnectable={false}
      className={styles.viewport}
      zoomOnDoubleClick={false}
      elementsSelectable={false}
    >
      <Background />
      <MiniMap />
    </ReactFlow>
  );
}

function ReactFlowWrapper(props: ExpandCollapseExampleProps) {
  return (
    <ReactFlowProvider>
      <ReactFlowPro {...props} />
    </ReactFlowProvider>
  );
}

export default ReactFlowWrapper;
