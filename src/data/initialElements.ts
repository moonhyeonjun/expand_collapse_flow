import { Node, Edge } from "reactflow";

export const nodes: Node[] = [
  {
    id: "A",
    position: { x: 0, y: 0 },
    data: { label: "A", expanded: true },
  },
  {
    id: "B",
    position: { x: 0, y: 0 },
    data: { label: "B", expanded: true },
  },
  {
    id: "C",
    position: { x: 0, y: 0 },
    data: { label: "C", expanded: true },
  },
  {
    id: "D",
    position: { x: 0, y: 0 },
    data: { label: "D", expanded: true },
  },
  {
    id: "E",
    position: { x: 0, y: 0 },
    data: { label: "E", expanded: false },
  },
  {
    id: "F",
    position: { x: 0, y: 0 },
    data: { label: "F", expanded: false },
  },
  {
    id: "G",
    position: { x: 0, y: 0 },
    data: { label: "G", expanded: false },
  },
  {
    id: "H",
    position: { x: 0, y: 0 },
    data: { label: "H", expanded: false },
  },
];

export const edges: Edge[] = [
  {
    id: "A->B",
    source: "A",
    target: "B",
  },
  {
    id: "A->C",
    source: "A",
    target: "C",
  },
  {
    id: "A->D",
    source: "A",
    target: "D",
  },
  {
    id: "B->E",
    source: "B",
    target: "E",
  },
  {
    id: "C->F",
    source: "C",
    target: "F",
  },
  {
    id: "D->G",
    source: "D",
    target: "G",
  },
  {
    id: "D->H",
    source: "D",
    target: "H",
  },
];
