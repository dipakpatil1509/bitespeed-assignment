"use client";

import React, { useCallback, useRef } from "react";
import ReactFlow, {
	Background,
	Connection,
	Controls,
	Edge,
	EdgeChange,
	OnSelectionChangeParams,
	addEdge,
	applyEdgeChanges,
	updateEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import TextMessageNode from "../Nodes/TextMessageNode";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEdges, setSelectedNode } from "@/store/flow/flow.slice";

type Props = {};

const nodeTypes = { textMessageNode: TextMessageNode };

function Flow({}: Props) {
	const edgeUpdateSuccessful = useRef(true);
	const nodes = useAppSelector((state) => state.flow.nodes);
	const edges = useAppSelector((state) => state.flow.edges);

	const dispatch = useAppDispatch();

	const onEdgesChange = (changes: EdgeChange[]) => {
		dispatch(setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)));
	};

	const onConnect = (connection: Connection) => {
		dispatch(setEdges((eds: Edge[]) => addEdge(connection, eds)));
	};

	const onEdgeUpdateStart = () => {
		edgeUpdateSuccessful.current = false;
	};

	const onEdgeUpdate = (oldEdge: Edge, newConnection: Connection) => {
		edgeUpdateSuccessful.current = true;
		dispatch(setEdges((eds: Edge[]) => updateEdge(oldEdge, newConnection, eds)));
	};

	const onEdgeUpdateEnd = (_: any, edge: Edge) => {
		if (!edgeUpdateSuccessful.current) {
			dispatch(setEdges((eds: Edge[]) => eds.filter((e) => e.id !== edge.id)));
		}
		edgeUpdateSuccessful.current = true;
	};

	const onSelectionChange = (params: OnSelectionChangeParams) => {
		if (params.nodes.length === 1) {
			console.log(params.nodes);
			dispatch(setSelectedNode(params.nodes[0]));
		}
	};

	return (
		<div className={"p-1 w-full"}>
			<ReactFlow
				defaultNodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				snapToGrid
				onEdgeUpdate={onEdgeUpdate}
				onEdgeUpdateStart={onEdgeUpdateStart}
				onEdgeUpdateEnd={onEdgeUpdateEnd}
				onSelectionChange={onSelectionChange}
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default Flow;
