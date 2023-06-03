import React, { useCallback } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IconType } from "react-icons";
import { useReactFlow } from "reactflow";
import { addNodeToFlow } from "@/helper/flow.helper";

type Props = {};

type nodeOption = {
	type: string;
	icon: IconType;
};

const NodeOptions: nodeOption[] = [
	{
		type: "textMessageNode",
		icon: BiMessageSquareDetail,
	},
];

function NodePanel({}: Props) {
	const reactFlowInstance = useReactFlow();
	const nodeOptionSelect = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement> | undefined, nodeOption: nodeOption) => {
			if (e) {
				e.preventDefault();
				addNodeToFlow(reactFlowInstance, nodeOption.type);
			}
		},
		[]
	);

	return (
		<div className="p-2 flex flex-wrap">
			{NodeOptions.map((nodeOption, index) => (
				<a
					key={index}
					href="#!"
					onClick={(e) => nodeOptionSelect(e, nodeOption)}
					className="rounded-md border-2 border-sky-800 text-sky-800 py-4 px-10 block text-center"
				>
					<nodeOption.icon size={20} className="!m-0 block !mx-auto" />
					Message
				</a>
			))}
		</div>
	);
}

export default NodePanel;
