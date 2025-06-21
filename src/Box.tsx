// BOX COMPONENT
export const Box = ({ identity, value, handleClick }: { identity: number, value: any, handleClick: (index: number) => void }) => {

    return (
        <div className="bg-gray-400 h-[10rem] w-[10rem] border-1 rounded-lg flex items-center justify-center text-9xl font-bold" onClick={() => handleClick(identity)}>
            {value}
        </div>
    )
}