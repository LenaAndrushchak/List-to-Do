
import './App.css';
import image from './image1.jpg';
import imageTwo from './image2.jpg';
import { ListToDo } from './listToDo';



function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={ image } width="300px" alt="Do"/>
      </div>
      < div className='container'>
        <h1>LIST TO DO:</h1>
      </div>
      <ListToDo/>
      <div className='container'>
        <img src={ imageTwo } width="300px" alt="Done"/>
      </div>
    </div>
  );
}

export default App;
