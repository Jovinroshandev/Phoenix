import React from 'react';
import GIPHY from "../assets/social/6725c22f62afb-Giphy.png"
import TwitterX from '../assets/social/twiiter-x.png';


export default function Social(){

  return (
    <div className='flex py-10  flex-col justify-center items-center mt-10 bg-[#ff7b5e]'>
        <h1 className='font-bold text-4xl md:text-5xl text-white' style={{fontFamily:'"Orbitron", sans-serif'}}>SOCIAL</h1>
      <div className='flex items-center gap-14'>
            <button><a href="https://giphy.com/channel/PhoenixClips"><img className='w-20 md:w-36' src={GIPHY} alt={GIPHY} /></a></button>
            <button><a href="https://x.com/itsphoenixcoin?s=21"><i class="fa-brands fa-x-twitter md:text-3xl"/></a></button>
      </div>
    </div>
  );
}