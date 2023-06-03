import MessageNodeSettings from "@/components/HomeComponent/Panels/SettingsPanel/MessageNodeSettings";
import { Node } from "reactflow";

const defaultObjectForTextMessageNode: Node = {
	id: "1",
	type: "textMessageNode",
	position: { x: 0, y: 0 },
	data: {},
};

export type defaultObejectsForNodeType = {
	textMessageNode: Node;
};

export default {
	textMessageNode: {
		title: "Message",
		defaultObjectForTextMessageNode,
		settingsPanel: MessageNodeSettings,
	},
};
