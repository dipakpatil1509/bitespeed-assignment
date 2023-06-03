import defaultObejectsForNode, {
	defaultObejectsForNodeType,
} from "@/constants/defaultObejectsForNode";
import { Node, ReactFlowInstance } from "reactflow";

export const addNodeToFlow = (reactFlowInstance: ReactFlowInstance, nodeOption_type: string) => {
	const nodes = reactFlowInstance.getNodes();
	const local_state_nodes = [...nodes];
	const defaultObject =
		defaultObejectsForNode[nodeOption_type as keyof defaultObejectsForNodeType]
			?.defaultObjectForTextMessageNode;
	const node = structuredClone(defaultObject);
	node.id = local_state_nodes.length + "";
	const last_node = local_state_nodes[local_state_nodes.length - 1];
	let position_x = 0;
	let position_y = 0;
	if (last_node) {
		const last_node_position = last_node.position;
		position_x += last_node_position.x + 100;
		position_y += last_node_position.y + 100;
	}
	node.position.x = position_x;
	node.position.y = position_y;
	node.type = defaultObject.type;
	node.data = {
		label: "",
	};
	reactFlowInstance.addNodes(node);
};

export const updateSelectedNodeToFlow = (
	reactFlowInstance: ReactFlowInstance,
	node: Node,
	{
		key,
		value,
	}: {
		key: keyof Node;
		value: any;
	}
) => {
	const nodes = reactFlowInstance.getNodes();
	nodes.map((a) => {
		if (a.id === node.id) {
			a[key as keyof Node] = value;
		}
	});
	reactFlowInstance.setNodes(nodes);
};
