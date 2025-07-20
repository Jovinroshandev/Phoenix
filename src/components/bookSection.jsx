import TextScroll from "./textScroll";
import TurnFlipbook from "./TurnFlipbook";

export default function BookSection() {
  return (
    <div className=" bg-[#ff896b] bg-[radial-gradient(circle,_#c43d28_0%,_transparent_100%)]  overflow-x-hidden">
      {/* Top Scrolling Text */}
      <div className="mb-8">
        <TextScroll />
      </div>
        <TurnFlipbook/>
      {/* Bottom Scrolling Text */}
      <div className="mt-8">
        <TextScroll />
      </div>
    </div>
  );
}
