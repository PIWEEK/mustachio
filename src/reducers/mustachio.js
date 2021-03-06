
const initialState = {
  id: 'mustachio',
  color:'',
  nTypes: 11,
  type:'',
  position: {x:-15,y:160},
  scale: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MUSTACHIO':
      return {...state, ...action.payload};
    case 'SET_COLOR_MUSTACHIO':
      return {...state, color: action.payload}; 
    case 'SET_TYPE_MUSTACHIO':
      return {...state, type: action.payload};
    case 'SET_POSITION_MUSTACHIO':
      return {...state, position: action.payload.y};
    case 'SET_SCALE_MUSTACHIO':
      return {...state, scale: action.payload};
    default:
      return state;
  }
}