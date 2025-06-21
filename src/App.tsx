import { useState } from "react"
import { Box } from "./Box";

const App = () => {

  const [values, setValues] = useState(Array(9).fill(undefined));
  const [nextMoveX, setNextMoveX] = useState(true);
  const [winner, setWinner] = useState("");

  const handleClick = (index: number) => {
    const updatedValues = [...values];
    if (updatedValues[index] !== undefined) {
      return
    }
    console.log(index, " ,  Box Clicked !")
    if (nextMoveX) {
      updatedValues[index] = "X"
      setNextMoveX(false)
    } else {
      updatedValues[index] = "O"
      setNextMoveX(true)
    }
    setValues(updatedValues)
    winnerDeclaration()
    console.log(updatedValues)
    return updatedValues;
  }

  const winningCombinaion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const winnerDeclaration = () => {
    for (let i = 0; i < winningCombinaion.length; i++) {
      const [a, b, c] = winningCombinaion[i];
      if (values[a] === values[b] && values[a] === values[c]) {
        console.log("The winner is " , values[a])
        setWinner(values[a])
      }
    }
  }


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-evenly bg-gray-500">
      <h1 className="text-4xl font-black text-gray-700 font-stretch-90%">{
        winner ? `The winner is ${winner}` : "GAME STARTS NOW !"
        }
      </h1>
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