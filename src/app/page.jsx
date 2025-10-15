"use client"

import { useRete } from "rete-react-plugin";
import { AreaExtensions, Zoom } from "rete-area-plugin";

import { createEditor } from "./createEditor";

import { Panel } from "@/components/Nodes";
import { GroupNode } from "@/components/Nodes/Group";
import { HeroNode } from "@/components/Nodes/Hero";

export default function HomePage() {
  const [ref, rete] = useRete(createEditor);

  const onAddNode = async (varient) => {
    const { editor, area } = rete;

    const parent1 = new GroupNode();
    const a = new HeroNode();
    // const b = new HeroNode();
    console.log(a)

    a.parent = parent1.id;
    // b.parent = parent1.id;
    
    await editor.addNode(parent1);
    await editor.addNode(a);
    // await editor.addNode(b);
    
    AreaExtensions.zoomAt(area, editor.getNodes());
    
    area.area.setZoomHandler(new Zoom(0.03));
    await area.area.zoom(0.5);
  }

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(90deg, #2a2a2a 1px, transparent 1px), linear-gradient(180deg, #2a2a2a 1px, transparent 1px)",
        backgroundSize: "18px 18px",
        backgroundColor: "#1e1e1e",
      }}
    >
      <div className="fixed right-2 top-2 bottom-2">
        <Panel onAddNode={onAddNode} />
      </div>
    </div>
  );
}
