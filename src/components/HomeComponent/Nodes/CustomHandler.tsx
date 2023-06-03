import React, { HTMLAttributes, useMemo } from "react";
import { Edge, getConnectedEdges, Handle, HandleProps, Node, useNodeId, useStore } from "reactflow";

const selector = (s: any) => ({
	nodeInternals: s.nodeInternals,
	edges: s.edges,
});

type isConnectable =
	| number
	| boolean
	| ((props: { node: Node; connectedEdges: Edge[] }) => boolean);

interface CustomHandleType extends HandleProps {
	isCustomConnectable?: isConnectable;
}

const CustomHandle = (props: CustomHandleType & HTMLAttributes<any>) => {
	const { isCustomConnectable, ...lc_props } = props;
	const { nodeInternals, edges } = useStore(selector);
	const nodeId = useNodeId();

	const isHandleConnectable = useMemo(() => {
		if (isCustomConnectable !== undefined) {
			if (typeof isCustomConnectable === "function") {
				const node = nodeInternals.get(nodeId);
				const connectedEdges = getConnectedEdges([node], edges);

				return isCustomConnectable({ node, connectedEdges });
			}

			if (typeof isCustomConnectable === "number") {
				const node = nodeInternals.get(nodeId);
				let connectedEdges = getConnectedEdges([node], edges);
				if (lc_props.type === "source") {
					connectedEdges = connectedEdges.filter((a) => a.source === node.id);
				} else {
					connectedEdges = connectedEdges.filter((a) => a.target === node.id);
				}
				return connectedEdges.length < isCustomConnectable;
			}

			return isCustomConnectable;
		}
		return true;
	}, [nodeInternals, edges, nodeId, isCustomConnectable, lc_props.type]);

	return <Handle {...lc_props} isConnectable={isHandleConnectable}></Handle>;
};

export default CustomHandle;
