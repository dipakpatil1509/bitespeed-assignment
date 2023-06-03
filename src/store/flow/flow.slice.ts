import { createSlice } from "@reduxjs/toolkit";
import flowSliceType from "./flow.type";

const initialState: flowSliceType = {
	nodes: [],
	edges: [],
	selectedNode: null,
};

const flowSlice = createSlice({
	name: "general",
	initialState,
	reducers: {
		setNodes(state, action) {
			state.nodes = action.payload;
		},
		setEdges(state, action) {
			state.edges = action.payload;
		},
		setSelectedNode(state, action) {
			state.selectedNode = action.payload;
		},
	},
});

export const { setNodes, setEdges, setSelectedNode } = flowSlice.actions;

export default { flowReducer: flowSlice.reducer };
