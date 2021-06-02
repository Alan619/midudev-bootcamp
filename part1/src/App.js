import './App.css';
import Mensaje from './Mensaje.js'

const App = () => {

  const Descripcion = () => {
    return <p>Descripcion del curso</p>
  }

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='yellow' message='de react'/>
      <Descripcion></Descripcion>

    </div>
  );

}

/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}*/

export default App;