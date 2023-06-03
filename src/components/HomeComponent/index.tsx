import React from "react";
import Flow from "./Flow";
import TopHeader from "./TopHeader/TopHeader";
import Panels from "./Panels";

type Props = {};

function HomeComponent({}: Props) {
	return (
		<div className="h-screen w-full">
			<TopHeader />
			<div className="flex flex-wrap h-[calc(100vh-60px)]">
				<div className="w-4/5 flex">
					<Flow />
				</div>
				<div className="w-1/5 border-l shadow-md bg-white">
					<Panels />
				</div>
			</div>
		</div>
	);
}

export default HomeComponent;
