const notes = (state = [], action) => {

    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            title: action.title,
            content: action.content,
          }
        ]
      case 'REMOVE_TODO':
        return state.filter((arrElement, index) => 
        {return index !== action.id})
      default:
        return state
    }
  }
  
  export default notes