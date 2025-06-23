// BOX COMPONENT
export const Box = ({
    identity,
    value,
    handleClick,
}: {
    identity: number;
    value: string | undefined;
    handleClick: (index: number) => void;
}) => {
    return (
        <div
            className="bg-gray-500 h-[10rem] w-[10rem] rounded-lg flex items-center justify-center text-9xl font-bold shadow-2xl cursor-pointer"
            onClick={() => handleClick(identity)}
        >
            {value}
        </div>
    );
};

// BOARD COMPONENT
export const Board = ({
    value,
    handleClick,
    winner,
}: {
    value: (string | undefined)[];
    handleClick: (index: number) => void;
    winner: string;
}) => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-evenly bg-gray-500">
            <h1 className="text-4xl font-black text-gray-700 font-stretch-90%">
                {winner ? `The winner is ${winner}` : "GAME STARTS NOW!"}
            </h1>
            <div className="h-[30rem] w-[30rem] bg-gray-500 rounded-lg shadow-2xl grid grid-cols-3 grid-rows-3 gap-2">
                {value.map((v, i) => (
                    <Box key={i} identity={i} value={v} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
};
