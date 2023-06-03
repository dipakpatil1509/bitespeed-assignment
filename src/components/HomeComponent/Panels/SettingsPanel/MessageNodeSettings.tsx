import { updateSelectedNodeToFlow } from "@/helper/flow.helper";
import { useAppSelector } from "@/store/hooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useReactFlow } from "reactflow";

type Props = {};

//not updating selectedNode which will rerender most of components
//When we need updated value of message, we can update Selected node
function MessageNodeSettings({}: Props) {
	const [message, setMessage] = useState("");
	const reactFlowInstance = useReactFlow();
	const selectedNode = useAppSelector((state) => state.flow.selectedNode);
	const prevId = useRef<string>("");

	const updateText = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement> | undefined) => {
			if (e && selectedNode) {
				updateSelectedNodeToFlow(reactFlowInstance, selectedNode, {
					key: "data",
					value: {
						...(selectedNode?.data || {}),
						label: e.target.value,
					},
				});
				setMessage(e.target.value);
			}
		},
		[selectedNode, reactFlowInstance]
	);

	useEffect(() => {
		if (selectedNode && selectedNode.id !== prevId.current) {
			prevId.current = selectedNode.id;
			setMessage(selectedNode?.data?.label || "");
		}
	});

	return (
		<div className="py-4 border-b border-gray-400 px-4">
			<p className="text-gray-400 text-sm my-2">Text</p>
			<textarea
				className="w-full min-h-[100px] border border-gray-400 rounded-md p-1"
				value={message}
				onChange={updateText}
			/>
		</div>
	);
}

export default MessageNodeSettings;
