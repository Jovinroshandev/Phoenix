import BirdImage from "../assets/images/bird-image-banner2.gif";

export default function FirePhoenix() {
  return (
    <div className="relative z-20 bg-[#FC8668]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* left info */}
        <div className="text-white px-5  md:px-10 md:py-16">
          <h1 style={{fontFamily:' "Ranchers", sans-serif'}} className=" text-white text-lg  md:text-5xl">The Fire That Never Dies</h1>
          <h2 style={{fontFamily:' "Ranchers", sans-serif'}} className="text-xl md:text-6xl md:pt-3 pt-1 pb-1 text-yellow-200  md:pb-8">Why should you choose Phoenix?</h2>
          <p style={{width:"800px",fontFamily:'"Orbitron", sans-serif'}} className="hidden md:block font-bold  text-sm md:text-3xl text-justify">Because in a space where projects fade fast, $PHOENIX keeps rising.
          Born from ashes, built on Solana, and powered by 
            pure community energy — this is more than a meme. It’s a movement. Unstoppable.
          Ride the flames or get left in the smoke.</p>
          <p style={{width:"300px",fontFamily:'"Orbitron", sans-serif'}} className="md:hidden font-bold  text-sm md:text-3xl text-justify">Because in a space where projects fade fast, $PHOENIX keeps rising.
          Born from ashes, built on Solana, and powered by 
            pure community energy — this is more than a meme. It’s a movement. Unstoppable.
          Ride the flames or get left in the smoke.</p>
        </div>
        {/* right phoenix image */}
        <div>
          <img className="md:w-full w-60" src={BirdImage} alt={BirdImage} />
        </div>
      </div>
    </div>
  );
}
