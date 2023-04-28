interface Props {
  onClick: () => void;
  img: string;
  text: string;
}

const NetworkBtn = ({ onClick, img, text }: Props) => {
  return (
    <div
      onClick={onClick}
      className="rounded-full bg-white rounded-2xl bg-indigo-200 hover:bg-indigo-300 border border-gray-300 cursor-pointer h-7 w-28 flex items-center justify-center gap-2 text-xs text-black px-1"
    >
      <img className="w-5" src={img} />
      <div>{text}</div>
    </div>
  );
};

export default NetworkBtn;
