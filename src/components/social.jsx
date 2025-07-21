import GIPHY from "../assets/social/icons8-giphy-48.png"


export default function Social(){

  return (
    <div className='flex py-10  flex-col justify-center items-center mt-10 bg-gray-800'>
        <h1 className='font-bold text-4xl md:text-5xl text-[#ffffff]' style={{fontFamily:'"Orbitron", sans-serif'}}>SOCIAL</h1>
      <div className='flex items-center justify-center gap-14 mt-6'>
            <button className="bg-[#ff7b5e] rounded-full p-2 md:p-3"><a href="https://giphy.com/channel/PhoenixClips"><img src={GIPHY} alt={GIPHY} /></a></button>
            <button className="bg-[#ff7b5e] rounded-full px-4 py-3 md:px-5 md:py-4"><a href="https://x.com/itsphoenixcoin?s=21"><i class="fa-brands fa-x-twitter md:text-3xl text-4xl"/></a></button>
      </div>
    </div>
  );
}