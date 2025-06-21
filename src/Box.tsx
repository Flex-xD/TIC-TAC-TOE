// BOX COMPONENT
export const Box = ({ identity, value, handleClick }: { identity: number, value: any, handleClick: (index: number) => void }) => {

    return (
        <div className="bg-gray-500 h-[10rem] w-[10rem] rounded-lg flex items-center justify-center text-9xl font-bold shadow-2xl" onClick={() => handleClick(identity)}>
            {value}
        </div>
    )
}