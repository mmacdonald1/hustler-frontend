export default (state = {show: false}, action) => {
  switch(action.type){
    case 'OPEN_MODAL':
      console.log("Open modal", state, action)
       break;
    case 'CLOSE_MODAL':
      console.log("Close modal", state, action)
       break;
    default:
    return state;
  }
}
