import { useState } from "react"
import type { boxProps } from "./constants";

const App = () => {
  const [boxValues, setBoxValues] = useState(Array(9).fill(undefined));
  const onBoxClick = (index:number) => {
    setBoxValues
      const updated = [...boxValues]
      updated[index] = "X"
  }

  // ? BOX COMPONENT
  const Box = ({ identity, handleClick }: boxProps) => {

    return (
      <div className="bg-gray-400 h-[10rem] w-[10rem] border-1 rounded-lg flex items-center justify-center text-9xl font-bold" onClick={handleClick}>
        {boxValues[identity]}
      </div>
    )
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-500">
      <div className="h-[30rem] w-[30rem] bg-gray-500 rounded-lg shadow-2xl grid grid-cols-3 grid-rows-3 gap-2">
        <Box identity={0} handleClick={()=>onBoxClick(0)} />
        <Box identity={1} handleClick={()=>onBoxClick(1)} />
        <Box identity={2} handleClick={()=>onBoxClick(2)} />
        <Box identity={3} handleClick={()=>onBoxClick(3)} />
        <Box identity={4} handleClick={()=>onBoxClick(4)} />
        <Box identity={5} handleClick={()=>onBoxClick(5)} />
        <Box identity={6} handleClick={()=>onBoxClick(6)} />
        <Box identity={7} handleClick={()=>onBoxClick(7)} />
        <Box identity={8} handleClick={()=>onBoxClick(8)} />
      </div>
    </div>
  )
}

export default App