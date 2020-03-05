import {
  CLEAR_COMPLETED,
  UPDATE_TODO_STATUS,
  UPDATE_FILTER,
  ADD_TODO
} from './actions.js'

export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed'
};

const INITIAL_STATE = {
  todos: [],
  filter: VisibilityFilters.SHOW_ALL
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_TODO: 
      return{
        ...state,
        todos: [ ...state.todos, action.todo]
      }
    case UPDATE_TODO_STATUS:
      return {
        ...state,
        //find the one matching todo, and overwrite complete
        todos: state.todos.map(todo => 
          action.todo === todo ? {...todo, complete: action.complete} : todo    
        )
      };
    case UPDATE_FILTER:
      return {
        ... state,
        filter: action.filter
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.complete)
      }       
    default: 
      return state;
  }
}