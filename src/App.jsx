import './App.css'
import {RevneuCard} from './components/RevneuCard'


function App() {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 ml-96 mt-44'>
      
      <RevneuCard className={"bg-blue-700 text-white"} title={"Ammount"} Ammount={"98,321.20"} orderCount={"13"}/>
      <RevneuCard title={"Pending"} Ammount={"128.20"} orderCount={""}/>
      <RevneuCard title={"Transaction"} Ammount={"233421.20"} orderCount={"18"}/>
      
    </div>
  )
}

export default App
