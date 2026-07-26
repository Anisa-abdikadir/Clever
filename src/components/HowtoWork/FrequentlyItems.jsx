import { FiPlus, FiMinus } from "react-icons/fi";

export default function FrequentlyItems({faq,isOpen,onClick,

}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-100 transition-all duration-300">

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left">
        <h3 className="font-semibold text-lg">
          {faq.question}
        </h3>

        <div
          className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
          {isOpen ? (
            <FiMinus size={18} />
          ) : (
            <FiPlus size={18} />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300
        ${
          isOpen
            ? "max-h-60 px-6 pb-6"
            : "max-h-0"
        }
        `}
      >
        <p className="text-gray-500 leading-7">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}