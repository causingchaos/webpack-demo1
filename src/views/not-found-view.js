import { BaseView } from "./base-view.js";
import { html } from "lit-element";

//actually extending from LitHTMl
class NotFoundView extends BaseView {
    render() {
        return html`
            <h1>Not Found</h1>
        `
    }
}

customElements.define('not-found-view', NotFoundView);