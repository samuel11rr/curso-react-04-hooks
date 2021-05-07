export const todoReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'add':
      // En este caso el payload trae el texto del nuevo toDo
      return [ ...state, action.payload ];
  
    case 'delete':
      // En este caso el payload trae el ID del toDo a eliminar
      return state.filter( todo => todo.id !== action.payload );
    
    case 'toggle':
      // En este caso el payload trae el ID del toDo a editar
      return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);

    default:
      return state;
  }

}