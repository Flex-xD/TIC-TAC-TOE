import { useState } from "react"
import { Box } from "./Box";

const App = () => {

  const [values, setValues] = useState(Array(9).fill(undefined));
  const [nextMoveX , setNextMoveX] = useState(true);

  const handleClick = (index: number) => {
    console.log(index, " ,  Box Clicked !")
    const updatedValues = [...values];
    if (nextMoveX) {
      updatedValues[index] = "X"
      setNextMoveX(false)
    } else {
      updatedValues[index] = "O"
      setNextMoveX(true)
    }
    setValues(updatedValues)
    console.log(updatedValues)
    return updatedValues;
  }


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-500">
      <div className="h-[30rem] w-[30rem] bg-gray-500 rounded-lg shadow-2xl grid grid-cols-3 grid-rows-3 gap-2">
        <Box identity={0} value={values[0]} handleClick={() => handleClick(0)} />
        <Box identity={1} value={values[1]} handleClick={() => handleClick(1)} />
        <Box identity={2} value={values[2]} handleClick={() => handleClick(2)} />
        <Box identity={3} value={values[3]} handleClick={() => handleClick(3)} />
        <Box identity={4} value={values[4]} handleClick={() => handleClick(4)} />
        <Box identity={5} value={values[5]} handleClick={() => handleClick(5)} />
        <Box identity={6} value={values[6]} handleClick={() => handleClick(6)} />
        <Box identity={7} value={values[7]} handleClick={() => handleClick(7)} />
        <Box identity={8} value={values[8]} handleClick={() => handleClick(8)} />

      </div>

    </div>
  )
}

export default App