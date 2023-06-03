"use client";

import { useAppSelector } from "@/store/hooks";
import React from "react";
import NodePanel from "./NodePanel";
import SettingsPanel from "./SettingsPanel";

type Props = {};

function Panels({}: Props) {
	const selectedNode = useAppSelector((state) => state.flow.selectedNode);
	return <div>{selectedNode ? <SettingsPanel /> : <NodePanel />}</div>;
}

export default Panels;
