"use client";

import React from "react";
import Flow from "./Flow";
import TopHeader from "./TopHeader/TopHeader";
import Panels from "./Panels";
import { ReactFlowProvider } from "reactflow";

type Props = {};

function HomeComponent({}: Props) {
	return (
		<ReactFlowProvider>
			<div className="h-screen w-full">
				<TopHeader />
				<div className="flex flex-wrap h-[calc(100vh-60px)]">
					<div className="w-3/4 flex">
						<Flow />
					</div>
					<div className="w-1/4 border-l shadow-md bg-white">
						<Panels />
					</div>
				</div>
			</div>
		</ReactFlowProvider>
	);
}

export default HomeComponent;
