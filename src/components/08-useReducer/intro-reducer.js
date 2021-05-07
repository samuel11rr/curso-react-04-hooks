const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

// todoReducer es un reducer porque retorna un nuevo estado
const todoReducer = ( state = initialState, action ) => {
  
  if ( action?.type === 'agregar' ) {
    return [ ...state, action.payload ];
  }
  
  return state;
}

let todos = todoReducer();
const newTodo = {
  id: 2,
  todo: 'Comprar agua',
  done: false
}

const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);