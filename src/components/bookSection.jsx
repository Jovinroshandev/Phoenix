import TurnFlipbook from "./TurnFlipbook";
import TurnFlipbookMobile from "./TurnFlipbookMobile";
export default function BookSection() {
  return (
    <div className=" bg-[#ff896b] py-8 bg-[radial-gradient(circle,_#c43d28_0%,_transparent_100%)]  overflow-x-hidden">
        <div className="hidden md:block">
          <TurnFlipbook/>
        </div>
        <div className="md:hidden">
          <TurnFlipbookMobile/>
        </div>
    </div>
  );
}
