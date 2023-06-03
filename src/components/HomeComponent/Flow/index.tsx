"use client";

import React from "react";
import ReactFlow, { Background, Controls, Edge, MarkerType, Node } from "reactflow";
import "reactflow/dist/style.css";
import TextMessageNode from "../Nodes/TextMessageNode";

type Props = {};

const edges: Edge[] = [
	{
		id: "1-2",
		source: "1",
		target: "2",
		data: {},
		markerEnd: {
			type: MarkerType.ArrowClosed,
		},
	},
];

const nodes: Node[] = [
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
];

const nodeTypes = { textMessageNode: TextMessageNode };

function Flow({}: Props) {
	return (
		<div className={"p-1 w-full"}>
			<ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}

export default Flow;
