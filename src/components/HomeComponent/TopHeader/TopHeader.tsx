import React from "react";

type Props = {};

export default function TopHeader({}: Props) {
	return (
		<div className="bg-gray-200 w-full flex items-center h-[60px]">
			<div className="block max-w-fit mr-0 ml-auto px-4">
				<button className="max-w-fit border-2 rounded-md border-sky-800 text-sky-800 p-2 px-4 text-sm font-semibold bg-white">
					Save Changes
				</button>
			</div>
		</div>
	);
}
