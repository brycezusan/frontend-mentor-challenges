import { useState } from "react";
import InputBtn from "./components/InputBtn";
import Thanks from "./components/Thanks";
import IconStar from '../src/assets/images/icon-star.svg'


function App() {
  const [valor, setValor] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <main>
      {confirm ? (
        <Thanks valor={valor} />
      ) : (
        <section className="bg-slate-800/80 p-8 w-5/6 lg:w-full lg:max-w-[440px] mx-auto rounded-lg">
          <div className="rounded-full bg-slate-800 w-[36px] h-[36px] flex justify-center items-center">
            <img src={IconStar} alt="icon star" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white mt-5 mb-8">
              How did we do?
            </h1>
            <p className="mb-6 text-gray-300">
              Pleade let us know how we did with your support request. all
              feedback is appreciated to help us improve our offering!
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-between">
                <InputBtn value={1} setValor={setValor} valor={valor}>
                  1
                </InputBtn>
                <InputBtn value={2} setValor={setValor} valor={valor}>
                  2
                </InputBtn>
                <InputBtn value={3} setValor={setValor} valor={valor}>
                  3
                </InputBtn>
                <InputBtn value={4} setValor={setValor} valor={valor}>
                  4
                </InputBtn>
                <InputBtn value={5} setValor={setValor} valor={valor}>
                  5
                </InputBtn>
              </div>
              <input
                type="submit"
                value="Submit"
                className="bg-orange-600 text-white uppercase font-medium tracking-wide	 py-2 w-full rounded-3xl hover:cursor-pointer hover:bg-orange-500 transition-colors"
              />
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
