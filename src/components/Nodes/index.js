import { ClassicPreset } from "rete";

import Panel from "./Panel";

export class Node extends ClassicPreset.Node {
  constructor(label) {
    super(label);
    this.width = 280;
    this.height = 140;
  }
}

export {
    Panel,
}