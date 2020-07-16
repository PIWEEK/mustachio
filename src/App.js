import React, {useReducer} from 'react';
// import logo from './logo.svg';
import Header from "./components/Header/Header.js"
import Canvas from "./components/Canvas/Canvas.js"
import './App.css';
import ParametricMenu from './components/ParametricMenu/ParametricMenu.js';
import AllSVGs from './components/AllSVGs/AllSVGs.js';

function App() {
  const initialState = {
    background: {
      id: 'background',
      colorSelected: ''
    },
    neck: {
      id: 'neck',
      nTypes: 12,
      typeSelected: '',
      colorSelected: ''
    },
    face: {
      id: 'face',
      nTypes: 31,
      typeSelected: '',
      colorSelected: ''
    },
    hairstyle: {
      id: 'hairstyle',
      nTypes: 12,
      typeSelected: '',
      colorSelected: ''
    },
    fringe: {
      id: 'fringe',
      nTypes: 29,
      typeSelected: '',
      colorSelected: ''
    },
    ears: {
      id: 'ears',
      nTypes: 8,
      typeSelected: '',
      colorSelected: ''
    },
    eyes: {
      id: 'eyes',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    },
    eyebrows: {
      id: 'eyebrows',
      nTypes: 22,
      typeSelected: '',
      colorSelected: ''
    },
    glasses: {
      id: 'glasses',
      nTypes: 10,
      typeSelected: '',
      colorSelected: ''
    },
    nose: {
      id: 'nose',
      colorSelected: '',
      childSelected: 'nostril',
      children: {
        "nostril": {id:'nostril', name: 'Nostril', nTypes: 12, typeSelected: ''},
        "septum": {id:'septum', name: 'Septum', nTypes: 9, typeSelected: ''}
      },
    },
    mouth: {
      id: 'mouth',
      colorSelected: '',
      childSelected: 'upper',
      children: {
        "upper": {id:'upperlip', name: 'Upper Lip', nTypes: 42, typeSelected: ''},
        "smile": {id:'smile', name: 'Smile', nTypes: 15, typeSelected: ''},
        "lower": {id:'lowerlip', name: 'Lower Lip', nTypes: 27, typeSelected: ''}
      },
    },
    accesories: {
      id: 'accesories',
      nTypes: 9,
      typeSelected: '',
      colorSelected: ''
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_COLOR_BACKGROUND':
        return {...state, background:{...state.background,colorSelected: action.payload}}
      case 'SET_COLOR_FACE':
        return {...state, face:{...state.face,colorSelected: action.payload}}
      case 'SET_TYPE_FACE':
        return {...state, face:{...state.face,typeSelected:action.payload}}
      case 'SET_COLOR_NECK':
        return {...state, neck:{...state.neck,colorSelected: action.payload}}
      case 'SET_TYPE_NECK':
        return {...state, neck:{...state.neck,typeSelected:action.payload}}
      case 'SET_COLOR_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,colorSelected: action.payload}}
      case 'SET_TYPE_HAIRSTYLE':
        return {...state, hairstyle:{...state.hairstyle,typeSelected:action.payload}}
      case 'SET_COLOR_FRINGE':
        return {...state, fringe:{...state.fringe,colorSelected: action.payload}}
      case 'SET_TYPE_FRINGE':
        return {...state, fringe:{...state.fringe,typeSelected:action.payload}}
      case 'SET_COLOR_EARS':
        return {...state, ears:{...state.ears,colorSelected: action.payload}}
      case 'SET_TYPE_EARS':
        return {...state, ears:{...state.ears,typeSelected:action.payload}}
      case 'SET_COLOR_EYEBROWS':
        return {...state, eyebrows:{...state.eyebrows,colorSelected: action.payload}}
      case 'SET_TYPE_EYEBROWS':
        return {...state, eyebrows:{...state.eyebrows,typeSelected:action.payload}}
      case 'SET_COLOR_GLASSES':
        return {...state, glasses:{...state.glasses,colorSelected: action.payload}}
      case 'SET_TYPE_GLASSES':
        return {...state, glasses:{...state.glasses,typeSelected:action.payload}}
      case 'SET_COLOR_MOUTH':
        return {...state, mouth:{...state.mouth,colorSelected: action.payload}}
      case 'SET_CHILD_MOUTH':
        return {...state, mouth:{...state.mouth,childSelected:action.payload}}
      
      
      case 'SET_TYPE_MOUTH_UPPER':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, upper: {...state.mouth.children.upper,typeSelected:action.payload}}}}
      case 'SET_TYPE_MOUTH_SMILE':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, smile: {...state.mouth.children.smile,typeSelected:action.payload}}}}
      case 'SET_TYPE_MOUTH_LOWER':
        return {...state, mouth:{...state.mouth, children:{...state.mouth.children, lower: {...state.mouth.children.lower,typeSelected:action.payload}}}}

      case 'SET_COLOR_NOSE':
        return {...state, nose:{...state.nose,colorSelected: action.payload}}
      case 'SET_CHILD_NOSE':
        return {...state, nose:{...state.nose,childSelected:action.payload}}
      case 'SET_TYPE_NOSE_NOSTRIL':
        return {...state, nose:{...state.nose, children:{...state.nose.children, nostril: {...state.nose.children.nostril,typeSelected:action.payload}}}}
      case 'SET_TYPE_NOSE_SEPTUM':
        return {...state, nose:{...state.nose, children:{...state.nose.children, septum: {...state.nose.children.septum,typeSelected:action.payload}}}}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <AllSVGs />
      <Header />
      <div className="App-body">
        <Canvas state={state}/>
        <ParametricMenu state={state} dispatch={dispatch}/>
      </div>
    </div>
  );
}

export default App;
