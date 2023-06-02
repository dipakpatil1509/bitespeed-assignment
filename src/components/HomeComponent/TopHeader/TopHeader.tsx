import React from "react";

type Props = {};

export default function TopHeader({}: Props) {
	return (
		<div className="bg-gray-400 w-full py-4 h-[60px]">
			<div className="block max-w-fit mr-0 ml-auto px-4">
				<button className="max-w-fit">Save Changes</button>
			</div>
		</div>
	);
}
