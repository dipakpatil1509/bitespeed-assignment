"use client";

import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import TextMessageNode from "../Nodes/TextMessageNode";
import { useAppSelector } from "@/store/hooks";

type Props = {};

const nodeTypes = { textMessageNode: TextMessageNode };

function Flow({}: Props) {
	const nodes = useAppSelector((state) => state.flow.nodes);
	const edges = useAppSelector((state) => state.flow.edges);
	
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
