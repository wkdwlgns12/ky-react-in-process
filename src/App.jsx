
import './App.css'
import Exam2 from './components/Controller'
import Viewer from './components/Viewer'

function App() {

  const user = {
    name: 'Alice',
    age: 21
  }

  return (
    <div>
      <Exam1 {...user} />
      <Exam2 />
      <Exam3 />
    </div>
  )
}

export default App
