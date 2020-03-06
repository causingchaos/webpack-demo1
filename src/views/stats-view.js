import { html } from "lit-element";
import { connect } from 'pwa-helpers';

import { BaseView } from "./base-view.js";
import { store } from '../redux/store.js'

// state selector from reducers
import { statsSelector } from '../redux/reducer.js'


//actually extending from LitHTMl (i.e. baseview)
class StatsView extends connect(store)(BaseView) {

    //getters
    static get properties() {
        return {
            chartConfig: {type: Object}
        }
    }

    // stateChanged callback accessed because of connect from pwa-helpers
    stateChanged(state){
        const stats = statsSelector();
    }

    render() {
        return html`
            <h1>Stats View</h1>
        `
    }
}

customElements.define('not-found-view', StatsView);