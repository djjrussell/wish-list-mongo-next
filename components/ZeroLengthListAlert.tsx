import { BsEmojiSurpriseFill } from "react-icons/bs";

const ZeroLengthListAlert = () => {
  return (
    <div className="pt-40 flex items-center justify-center flex-col text-indigo-500 gap-5">
      <BsEmojiSurpriseFill size="100" />
      <h1 className="text-3xl tracking-[-3px]">
        Looks like we dont have any items yet!
      </h1>
      <p className="tracking-[-1px]">Click the + icon above to get started.</p>
    </div>
  );
};

export default ZeroLengthListAlert;
