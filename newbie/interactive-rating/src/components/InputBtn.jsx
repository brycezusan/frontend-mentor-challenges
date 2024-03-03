// eslint-disable-next-line react/prop-types
function InputBtn({ children, value ,valor  , setValor}) {

  return (
    <div className="flex justify-center items-center">
      <input
        type="radio"
        id={`radio${value}`}
        name="number"
        value={value}
        className="hidden"
        onClick={(e) => setValor(e.target.value)}
      />
      <label
        htmlFor={`radio${value}`}
        className={`relative w-10 h-10 rounded-full text-gray-100 font-semibold hover:bg-orange-600 hover:cursor-pointer ${valor == value ? 'bg-orange-700/80':'bg-slate-800'}`}
      >
        <small className="absolute text-lg top-[5px] right-[15px]">
          {children}
        </small>
      </label>
    </div>
  );
}

export default InputBtn;
