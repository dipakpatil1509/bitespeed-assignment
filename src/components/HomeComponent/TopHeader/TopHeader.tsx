import React, { useCallback, useState } from "react";
import { useReactFlow } from "reactflow";

type Props = {};

export default function TopHeader({}: Props) {
	const [errorMessage, setErrorMessage] = useState("");
	const reactFlowInstance = useReactFlow();
	const onClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement> | undefined) => {
			if (e) {
				e.preventDefault();
				const nodes = reactFlowInstance.getNodes();
				const edges = reactFlowInstance.getEdges();
				console.log(nodes, edges);
				let connected_node_ids: string[] = [];
				edges.map((edge) => {
					connected_node_ids.push(edge.source);
					connected_node_ids.push(edge.target);
				});
				connected_node_ids = Array.from(new Set(connected_node_ids));

				if (nodes.length > 1 && nodes.length !== connected_node_ids.length) {
					setErrorMessage("Cannot save flow");
				} else {
					setErrorMessage("Saved successfully");
				}
				setTimeout(() => {
					setErrorMessage("");
				}, 5000);
			}
		},
		[reactFlowInstance]
	);
	return (
		<div className="bg-gray-200 w-full flex items-center h-[60px]">
			{errorMessage && (
				<div className="bg-red-200 px-4 py-2 rounded-md text-black font-semibold text-md max-w-fit block fixed top-2 left-0 right-0 mx-auto">
					{errorMessage}
				</div>
			)}
			<div className="block max-w-fit mr-0 ml-auto px-4">
				<button
					onClick={onClick}
					className="max-w-fit border-2 rounded-md border-sky-800 text-sky-800 p-2 px-4 text-sm font-semibold bg-white"
				>
					Save Changes
				</button>
			</div>
		</div>
	);
}
