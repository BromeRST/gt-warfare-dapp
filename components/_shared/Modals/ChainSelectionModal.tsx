import NetworkBtn from "../NetworkBtn";

const ChainSelectionModal = ({ show, title, onClose }) => {
  return (
    <div
      className={`${
        show ? "" : "hidden"
      } flex items-center justify-center uppercase bg-brand-modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full`}
    >
      <div className="h-auto w-5/6 flex justify-center">
        <div className="w-[600px] rounded-2xl p-1 min-h-[300px] bg-gray-500 shadow-2xl">
          <div className="relative h-full w-full flex flex-col gap-6 items-center bg-brand-darkestBlue rounded-2xl px-10 py-4 text-white">
            <div className="font-audiowide text-xl text-purple-50">{title}</div>
            <input
              onChange={(e) => console.log(e.target.value)}
              placeholder="Search NFT project"
              className="outline-none w-full text-black text-lg bg-gray-100 rounded-lg py-2 px-5 capitalize"
            />
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                <NetworkBtn
                  key={v}
                  img="/brand/polygon.png"
                  text="polygon"
                  onClick={() => console.log("click")}
                />
              ))}
            </div>
            <div className="w-full max-h-[200px] overflow-y-auto bg-gray-50 rounded-lg">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                <div className="flex items-center gap-3 px-6 py-2.5 text-black hover:bg-purple-800 hover:text-white cursopr-pointer">
                  <img src="/brand/polygon.png" className="w-5" />
                  <div className="text-sm">[placeholder]</div>
                </div>
              ))}
            </div>
            <div
              onClick={onClose}
              className="absolute top-2 right-4 font-bold cursor-pointer"
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainSelectionModal;
