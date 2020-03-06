import { html } from "lit-element";
import { connect } from 'pwa-helpers';
import '@vaadin/vaadin-charts';

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
    // listen for state changes, and create chart config based on that
    stateChanged(state){
        const stats = statsSelector(state);
        console.log(stats);

        //vaadin char config
        this.chartConfig = [
            {name: 'Completed', y: stats.completed},
            {name: 'Active', y: stats.active}
        ];

        this.hasTodos = state.todos.length > 0;
    }

    render() {
      return html`
        <style>
          stats-view {
            display: block;
          }
        </style>
        ${this.getChart()}
      `;
    }
    
    getChart() {
      if(this.hasTodos) {
        return html`
          <vaadin-chart type="pie">
            <vaadin-chart-series
            .values="${this.chartConfig}"
            ></vaadin-chart-series>
          </vaadin-chart>
        `;
      }else{
        return html`
          <p>Nothing to do</p>
        `;
      }
    }
}

customElements.define('stats-view', StatsView);