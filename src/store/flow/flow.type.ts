import { Edge, Node } from "reactflow";

export default interface flowSliceType {
	nodes: Node[];
	edges: Edge[];
	selectedNode: Node | null;
}
