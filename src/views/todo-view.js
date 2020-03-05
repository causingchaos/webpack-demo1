import {LitElement,html} from 'lit-element'
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-checkbox';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-text-field';

const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

class TodoView extends LitElement{

  static get properties() {
    return {
      todos: { type: Array },
      filter: { type: String },
      task: { type: String }
    }
  }

  constructor() {
    super(); // call super so Lit Element has time to set itself up
    this.todos = [];
    this.filter = VisibilityFilters.SHOW_ALL;
    this.task = "";
  }

  // to bind, use value="${this.task}"
  render(){
    return html`
      <div class="input-layout" @keyup="${this.shortcutListener}">
        <vaadin-text-field
          placeholder="Task"
          value="${this.task}"
          @change="${this.updateTask}" 
        ></vaadin-text-field>
        <vaadin-button
          theme="primary"
          @click="${this.addTodo}"
        >Add Task</vaadin-button>
      </div>

      <div class="todos-list">
        ${this.todos.map(todo => html`
          <div class=todo-item>
            <vaadin-checkbox
              ?checked="${todo.complete}"
              @change="${event => this.updateTodoStatus(todo, event.target.checked)}"
            >${todo.task}</vaadin-checkbox>
          </div>
        `)}
      </div>

      <vaadin-radio-group>
        ${Object.values(VisibilityFilters).map(filter => html`
          <vaadin-radio-button value="${filter}">${filter}</vaadin-radio-button>
        `)}
      </vaadin-radio-group>
    `
  }
  // return new todo list, with the complete box checked.
  // {... updateTodo, complete } overwrite the complete field only
  updateTodoStatus(updatedTodo,complete){
    this.todos = this.todos.map(todo => 
      updatedTodo === todo ? {...updatedTodo, complete} : todo
      );
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
      this.todos = [...this.todos, {
        task: this.task,
        complete: false
      }];
      this.task = ''; //set task text field to empty
    }
  }
    
}

//use dashes as per spec, to avoid collisions
customElements.define('todo-view', TodoView);