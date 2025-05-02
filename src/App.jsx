import iconPerson from "./assets/images/icon-person.svg";
import dollar from "./assets/images/icon-dollar.svg";
import { useEffect, useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);
  // const [error, setError] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [customTip, setCustomTip] = useState(0);

  const handleBillChange = (e) => {
    const value = e.target.value;

    setBill(parseInt(value));
    console.log(bill);
  };

  const handleTipChange = (e) => {
    if (e.target.id === "customTip") {
      const value = e.target.value;

      if (value > 0) {
        setTip(value);
      } else {
        setTip(0);
      }
      return;
    }
    const value = e.target.textContent.slice(0, -1);

    if (value !== tip) {
      const classBtn = e.target.classList;
      classBtn.remove("btnPorcent");
      classBtn.add("btnSelect");

      setTip(parseInt(value));
    }
  };

  const reset = () => {
    setBill("");
    setTip(15);
    setPeople("null");
    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill <= 0) {
      setBill("");
    }
    const tipAmountValue = (bill * tip) / 100 / people;
    const totalValue = (bill + tipAmountValue * people) / people;
    if (tipAmountValue > 0) {
      setTipAmount(tipAmountValue.toFixed(2));
      setTotal(totalValue.toFixed(2));
    } else {
      setTipAmount(0);
    }
  }, [bill, tip, people]);

  return (
    <>
      <header className=" h-30 flex justify-center items-center xl:mb-20">
        <h1 className="text-Green-900 flex flex-col uppercase tracking-[0.5em]">
          <span>spli</span>
          <span>tter</span>
        </h1>
      </header>
      <main className=" w-[375px] bg-White rounded-2xl px-[32px] py-[6px] xl:w-[920px] xl:h-[480px] xl:grid xl:grid-cols-2 xl:items-center xl:gap-8">
        <div>
          <section className="mb-8 mt-4">
            <label className="text-sm text-Grey-500 mb-3 block" htmlFor="bill">
              Bill
            </label>
            <div className="flex items-center relative rounded-sm">
              <img className="absolute ml-4" src={dollar} alt="Icon dollar" />
              <input
                className="input h-[48px] w-full focus:inputFocus active"
                onChange={handleBillChange}
                value={bill}
                type="number"
                id="bill"
                name="bill"
                placeholder="20"
              />
            </div>
          </section>
          <section className="mb-8">
            <label className="text-sm text-Grey-500 mb-3 block">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 text-White">
              {[5, 10, 15, 25, 50].map((value) => {
                return (
                  <button
                    key={value}
                    onClick={handleTipChange}
                    className={value == tip ? "btnSelect" : "btnPorcent"}
                    id={value}
                  >
                    {value}%
                  </button>
                );
              })}

              <input
                onChange={handleTipChange}
                className="input focus:inputFocus"
                type="text"
                placeholder="Custom"
                id="customTip"
                name="customTip"
              />
            </div>
          </section>
          <section className="mb-8">
            <div className="flex justify-between">
              <label
                className="text-sm text-Grey-500 mb-3 block"
                htmlFor="numPeople"
              >
                Number of People
              </label>
              <p className="text-red-400 text-sm hidden">Can't be zero</p>
            </div>
            <div className="flex items-center relative  rounded-sm">
              <img
                className="absolute ml-4"
                src={iconPerson}
                alt="Icon person"
              />
              <input
                className="input w-full h-[48px] focus:inputFocus "
                type="text"
                id="numPeople"
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
                value={people}
              />
            </div>
          </section>
        </div>
        <section className="bg-Green-900 rounded-2xl h-[220px] xl:h-[420px] flex flex-col justify-between p-6 mb-8 xl:mb-0">
          <div className="grid grid-cols-3 gap-7 xl:gap-13 xl:pt-7 mb-6">
            <p className="text-sm text-White flex flex-col">
              Tip Amount <span className="text-xs text-gray-400">/ person</span>
            </p>
            <p className="text-Green-400 col-span-2 text-3xl xl:text-5xl text-right">
              $<span>{tipAmount}</span>
            </p>

            <p className="text-sm text-White flex flex-col">
              Total <span className="text-xs text-gray-400">/ person</span>
            </p>
            <p className="text-Green-400 col-span-2 text-3xl xl:text-5xl text-right">
              $<span>{total}</span>
            </p>
          </div>
          <button
            className="uppercase text-xl text-Green-900 rounded-md h-18 xl:h-10 w-full bg-Green-400 cursor-pointer"
            onClick={reset}
          >
            reset
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
