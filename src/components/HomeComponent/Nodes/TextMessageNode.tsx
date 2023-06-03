import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./node.module.css";

function TextMessageNode({ data }: { data: any }) {
	const onChange = useCallback((evt: any) => {
		console.log(evt.target.value);
	}, []);

	return (
		<div
			className={`bg-white overflow-hidden rounded-md focus:border shadow-xl focus:border-blue ${styles.react_flow_node}`}
		>
			<Handle type="target" position={Position.Left} />
			<div className="bg-green-200 w-full flex flex-row items-center px-1">
				<div className="w-[90%] flex items-center gap-1">
					<BiMessageSquareDetail className="text-xs" />
					<h6 className="text-sm font-bold">Send Message</h6>
				</div>
				<div className="w-[10%] text-right">
					<FaWhatsapp className="text-xs mr-0" />
				</div>
			</div>
			<div className="p-2">
				<input id="text" name="text" onChange={onChange} className="nodrag outline-0" />
			</div>
			<Handle type="source" position={Position.Right} />
		</div>
	);
}

export default TextMessageNode;
