import { Position } from "reactflow";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./node.module.css";
import CustomHandle from "./CustomHandler";

function TextMessageNode({ data }: { data: any }) {
	return (
		<div
			className={`bg-white overflow-hidden rounded-md focus:border min-w-[200px] shadow-xl focus:border-blue max-w-[250px] break-all ${styles.react_flow_node}`}
		>
			<CustomHandle type="target" position={Position.Left} className="!w-2 !h-2" />
			<div className="bg-green-200 w-full flex flex-row items-center px-1 py-1">
				<div className="w-[90%] flex items-center gap-1">
					<BiMessageSquareDetail className="text-sm" />
					<h6 className="text-sm font-bold">Send Message</h6>
				</div>
				<div className="w-[10%] text-right">
					<FaWhatsapp className="text-sm mr-0" />
				</div>
			</div>
			<div className="p-2 min-h-[30px]">
				<p className="text-sm font-normal">{data?.label}</p>
			</div>
			<CustomHandle
				type="source"
				position={Position.Right}
				isCustomConnectable={1}
				className="!w-2 !h-2"
			/>
		</div>
	);
}

export default TextMessageNode;
