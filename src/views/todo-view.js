import {LitElement,html} from 'lit-element'
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

// our redux store and reducer 
import { VisibilityFilters, getVisibileTodosSelector } from '../redux/reducer.js'
import { store } from '../redux/store.js'

// pwa-helpers npm allows us to onnect LitElement to Redux store
import { connect } from 'pwa-helpers';
import { 
  updateFilter, clearCompleted, addTodo, updateTodoStatus 
} from '../redux/actions.js';
import { BaseView } from './base-view.js';

//class TodoView extends LitElement{  
     // new code, connect the store using pwa helper 
class TodoView extends connect(store)(BaseView) { 

  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String }
    }
  }

  // calling connect on LitElement will give us one more call back function, which is
  // state changed
  stateChanged(state){
    //this.todos = state.todos; // instead call selector
    this.todos = getVisibileTodosSelector(state);
    this.filter = state.filter;
    // note task is omitted because it's very specific to this view, and not 
    // the global state.
  }

  // THis can be removed now that we have redux state callback
  //constructor() {
  //  super(); // call super so Lit Element has time to set itself up
  //  this.todos = [];
  //  this.filter = VisibilityFilters.SHOW_ALL;
  //  this.task = "";
  //}

  // to bind, use value="${this.task}"
  render(){
    return html`
      <style>
        #input-container{
          margin-top: 15px;
          padding: 25px;
          background-color: white;
          width: 40%;
        }
        #todos-container{
          margin-top: 15px;
          padding: 25px;
          background-color: white;
          width: 40%;
        }
        #filters-container{
          margin-top: 15px;
          padding: 25px;
          background-color: white;
          width: 30%;
        }
        #action-container{
          margin-top: 15px;
          padding: 25px;
          background-color: white;
          width: 150px;
        }
        #task-field{
          margin-top: 15px;
        }

      </style>
      
      <div id="input-container" @keyup="${this.shortcutListener}">
      <h2>Todo List</h2>
        <vaadin-text-field
          id="task-field"
          placeholder="Task"
          value="${this.task || ""}"
          @change="${this.updateTask}" 
        ></vaadin-text-field>
        <vaadin-button
          theme="primary"
          @click="${this.addTodo}"
        >Add Task</vaadin-button>
      </div>

      <div id="todos-container">
        ${ this.todos.map(todo => html`
          <div class=todo-item>
            <vaadin-checkbox
              ?checked="${todo.complete}"
              @change="${event => this.updateTodoStatus(todo, event.target.checked)}"
            >${todo.task}</vaadin-checkbox>
          </div>
        `)}
      </div>

      <vaadin-radio-group
        id="filters-container"
        class="visibility-filters"
        value="${this.filter}"
        @value-changed="${this.filterChanged}"
      >
        ${
          Object.values(VisibilityFilters).map(filter => html`
            <vaadin-radio-button 
              value="${filter}"
              >${filter}</vaadin-radio-button
            >
          `
          )
        }
      </vaadin-radio-group> 

      <div id=action-container> 
        <vaadin-button @click="${this.clearCompleted}">Clear Completed</vaadin-button>
      </div>  
      
    `;
  }

  // return only todos that are not complete, rest will be deleted
  clearCompleted() {
   //this.todos = this.todos.filter(todo => !todo.complete);
   store.dispatch(clearCompleted());
  }
  
  filterChanged(event){
    //this.filter = event.target.value;
    store.dispatch(updateFilter(event.detail.value))  //why event.detail ??
  }

  // filter out based on which radio button is ticked off
  //applyFilter(todos) { //moved into redux selector in reducer.js
  //} 

  // return new todo list, with the complete box checked.
  // {... updateTodo, complete } overwrite the complete field only
  updateTodoStatus(updatedTodo,complete){
    store.dispatch(updateTodoStatus(updatedTodo, complete));
    //this.todos = this.todos.map(todo => 
    //  updatedTodo === todo ? {...updatedTodo, complete} : todo
    //  );
  }

  shortcutListener(event) {
    if(event.key === 'Enter') {
      this.addTodo();
    }
  }

  updateTask(event){
    this.task = event.target.value;
  }

  addTodo() {
    //need to make a new array, it's the only way lit element recognizes it,
    // only recognizes immutable data structures.
    if(this.task) {
      store.dispatch(addTodo(this.task));
      /* this.todos = [...this.todos, {
        task: this.task,
        complete: false
      }]; */
      this.task = ''; //set task text field to empty
    }
  }
  
    
  // disable shadow dom -- to use top level styles. Remove this if you want shielded styles, ect
  //createRenderRoot(){
  //  return this; //removed to base-view.js
  //}
}

//use dashes as per spec, to avoid collisions
customElements.define('todo-view', TodoView);