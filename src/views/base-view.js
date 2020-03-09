import { LitElement, css } from "lit-element";

export class BaseView extends LitElement {  // Mix in class for other views
    static get styles(){
        return css`
            html{
                --base-color: #ffff;
                --dark-color: #2a3443;
                --spacing: 16px;
            }
            header, nav{
                padding: var(--spacing)
            }
            nav{
                height: 3px;
            }
            header{
                background: var(--base-color);
            }
        `
    }
    // disable shadow dom -- to use top level styles. Remove this if you want shielded styles, ect
    //createRenderRoot() {
    //    return this;
   // }
}