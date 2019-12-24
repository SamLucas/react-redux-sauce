import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = [];

// Criando os actions types & creators
export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"]
});

// Criando os reducer handlers
const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false }
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map(todo =>
    todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
  );

const remove = (state = INITIAL_STATE, action) =>
  state.filter(todo => todo.id !== action.id);

// Criando reducer
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
});
