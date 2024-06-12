import './App.css'
import Card from "./components/Card.jsx";


function App() {
// const myObj = {
//     name: "Aditya",
//     course:"dac"
// }

// const newArr = [1,2,3,4,5,6,7,8]
  return (
      <>
          <h1 className="bg-green-400 text-black p-4 rounded-2xl mb-4">Tailwind test </h1>
          {/* <Card username="Aditya" someObj = {myObj} /> */}
          <Card username="Aditya" btnText = "clickMe" />
          { <Card username= "Archit" />/*btnText = "visitMe" */}
      </>
  )
}

export default App
