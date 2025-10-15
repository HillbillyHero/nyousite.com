
import { Node } from '../'

export class GroupNode extends Node {
    constructor() {
        super("Group");
    }
}

export function Group(props) {
    console.log("groups: ", props)
    return (
        <div style={{ backgroundColor: "grey" }}>
            Page
        </div>
    )
}