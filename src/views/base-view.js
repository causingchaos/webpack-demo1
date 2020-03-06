import { LitElement } from "lit-element";

export class BaseView extends LitElement {  // Mix in class for other views

    // disable shadow dom -- to use top level styles. Remove this if you want shielded styles, ect
    createRenderRoot() {
        return this;
    }
}