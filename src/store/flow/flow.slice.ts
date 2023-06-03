import { createSlice } from "@reduxjs/toolkit";
import flowSliceType from "./flow.type";
import { MarkerType } from "reactflow";

const initialState: flowSliceType = {
	nodes: [
		{
			id: "1",
			type: "textMessageNode",
			position: { x: 0, y: 0 },
			data: {},
		},
		{
			id: "2",
			type: "textMessageNode",
			position: { x: 400, y: -100 },
			data: {},
		},
	],
	edges: [
		{
			id: "1-2",
			source: "1",
			target: "2",
			data: {},
			markerEnd: {
				type: MarkerType.ArrowClosed,
			},
		},
	],
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
