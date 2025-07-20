export default function TextScroll(){
    return(
        <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="animate-scroll text-white font-bold text-2xl">
                {Array(20).fill("ABSTER THE MOST CODED PENGUN").map((word, i) => (
            <span key={i} className="mx-5">
                {word}
            </span>
            ))}
                {/* <p>ABSTER THE MOST CODED PENGUN</p> */}
            </div>
      </div>
    )
}