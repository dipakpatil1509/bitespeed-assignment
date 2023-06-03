import defaultObejectsForNode, {
	defaultObejectsForNodeType,
} from "@/constants/defaultObejectsForNode";
import { updateSelectedNodeToFlow } from "@/helper/flow.helper";
import { setSelectedNode } from "@/store/flow/flow.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useCallback, useMemo } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useReactFlow } from "reactflow";

type Props = {};

function SettingsPanel({}: Props) {
	const reactFlowInstance = useReactFlow();
	const selectedNode = useAppSelector((state) => state.flow.selectedNode);
	const dispatch = useAppDispatch();

	const defaultObejects = useMemo(() => {
		if (selectedNode?.type) {
			return defaultObejectsForNode[selectedNode.type as keyof defaultObejectsForNodeType];
		}
		return null;
	}, [selectedNode]);

	const unselectNode = useCallback(
		(e: React.MouseEvent<HTMLAnchorElement> | undefined) => {
			if (e && selectedNode) {
				e.preventDefault();
				updateSelectedNodeToFlow(reactFlowInstance, selectedNode, {
					key: "selected",
					value: false,
				});
				dispatch(setSelectedNode(null));
			}
		},
		[selectedNode]
	);

	return (
		defaultObejects && (
			<div>
				<div className="flex flex-wrap items-center border-b border-gray-100 px-1 py-2 text-gray-600">
					<a href="#!" onClick={unselectNode} className="w-[20px]">
						<BiArrowBack size={20} />
					</a>
					<div className="w-[calc(100%-20px)] text-center">
						<h6 className="text-md">{defaultObejects.title}</h6>
					</div>
				</div>
				<defaultObejects.settingsPanel />
			</div>
		)
	);
}

export default SettingsPanel;
