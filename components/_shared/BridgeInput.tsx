import NetworkBtn from "./NetworkBtn";

const BridgeInput = ({ text, img, onChange, onClickBtn, isSource }) => {
  return (
    <div className="h-full relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={isSource ? "Source Contract" : "End Contract"}
        className="outline-none w-full h-full text-black text-2xl bg-gray-100 rounded-xl pt-1 px-5 capitalize"
      />
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-50">
        <NetworkBtn onClick={onClickBtn} img={img} text={text} />
      </div>
    </div>
  );
};

export default BridgeInput;
