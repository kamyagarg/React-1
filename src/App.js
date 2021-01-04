
import { Webpage } from './all/webpage';
import './App.css';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App">
      <Webpage/>
    </div>
  );
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




//import React from 'react';
// import ReactDOM from 'react-dom';


// class Recipe extends React.Component {
//     // constructor(props){
//     //     super(props);
//     //     this.state = {};
//     // }

//     render(){
//         // return (<h1>This is an experiment</h1>);
//     }

// }

// // ReactDOM.render(
// //     <Recipe />,
// //     document.getElementById('box1')
// // );
// ReactDOM.render(
//   <h1>This is an example.</h1>, 
//   document.getElementById('root')
// );




