import { createSlice } from "@reduxjs/toolkit";
import flowSliceType from "./flow.type";
import { Edge, MarkerType, addEdge, applyEdgeChanges } from "reactflow";

const initialState: flowSliceType = {
	nodes: [],
	edges: [],
	selectedNode: null,
};

const flowSlice = createSlice({
	name: "flow",
	initialState,
	reducers: {
		setNodes(state, action) {
			state.nodes = action.payload;
		},
		setEdges(state, action) {
			const edges = action.payload(state.edges);
			state.edges = edges.map((edge: Edge) => {
				edge.markerEnd = {
					type: MarkerType.ArrowClosed,
				};
				return edge;
			});
		},
		setSelectedNode(state, action) {
			state.selectedNode = action.payload;
		},
	},
});

export const { setNodes, setEdges, setSelectedNode } = flowSlice.actions;

export default { flowReducer: flowSlice.reducer };
