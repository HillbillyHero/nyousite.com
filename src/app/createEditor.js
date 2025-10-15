import { createRoot } from "react-dom/client";
import { ClassicPreset, NodeEditor } from "rete";
import { AreaPlugin, AreaExtensions } from "rete-area-plugin";
import { ReactPlugin, Presets } from "rete-react-plugin";
import { ScopesPlugin, Presets as ScopesPresets } from "rete-scopes-plugin";
import { AutoArrangePlugin, Presets as ArrangePresets } from "rete-auto-arrange-plugin";

import { GroupNode, Group } from "@/components/Nodes/Group";
import { Hero, HeroNode } from "@/components/Nodes/Hero";

export async function createEditor(container) {
  const editor = new NodeEditor();
  const area = new AreaPlugin(container);
  const render = new ReactPlugin({ createRoot });
  const scopes = new ScopesPlugin();
  const arrange = new AutoArrangePlugin();

  AreaExtensions.selectableNodes(area, AreaExtensions.selector(), {
    accumulating: AreaExtensions.accumulateOnCtrl(),
  });

  render.addPreset(Presets.classic.setup({
    customize: {
      node (ctx) {
        if (ctx.payload instanceof GroupNode) {
          return Group;
        }
        
        if (ctx.payload instanceof HeroNode) {
          return Hero;
        }

        return ClassicPreset.classic.Node;
      }
    }
  }));
  render.addPreset(Presets.contextMenu.setup());
  scopes.addPreset(ScopesPresets.classic.setup());
  arrange.addPreset(ArrangePresets.classic.setup());

  editor.use(area);
  area.use(render);
  area.use(scopes);
  area.use(arrange);

  return {
    editor,
    area,
    scopes,
    arrange,
    destroy: () => area.destroy(),
  };
}
