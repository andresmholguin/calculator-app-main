import iconPerson from "./assets/images/icon-person.svg";
import dollar from "./assets/images/icon-dollar.svg";

function App() {
  return (
    <>
      <header className=" h-30 flex justify-center items-center">
        <h1 className="text-Green-900 flex flex-col uppercase tracking-[0.5em]">
          <span>spli</span>
          <span>tter</span>
        </h1>
      </header>
      <main className="w-[375px] bg-White rounded-2xl px-[32px] py-[6px]">
        <section className="mb-8 mt-4">
          <label className="text-sm text-Grey-500 mb-3 block" htmlFor="bill">
            Bill
          </label>
          <div className="flex items-center relative rounded-sm">
            <img className="absolute ml-4" src={dollar} alt="Icon dollar" />
            <input
              className="input h-[48px] w-full focus:inputFocus"
              type="text"
              id="bill"
              placeholder="20"
            />
          </div>
        </section>
        <section className="mb-8">
          <label
            className="text-sm text-Grey-500 mb-3 block"
            htmlFor="selectTip"
          >
            Select Tip %
          </label>
          <div className="grid grid-cols-2 gap-4 text-White" id="selectTip">
            <button className="btnPorcent">5%</button>
            <button className="btnPorcent">10%</button>
            <button className="btnSelect">15%</button>
            <button className="btnPorcent">25%</button>
            <button className="btnPorcent">50%</button>
            <input
              className="input focus:inputFocus"
              type="text"
              placeholder="Custom"
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
            <img className="absolute ml-4" src={iconPerson} alt="Icon person" />
            <input
              className="input w-full h-[48px] focus:inputFocus "
              type="text"
              id="numPeople"
              placeholder="1"
            />
          </div>
        </section>
        <section className="bg-Green-900 rounded-2xl h-[220px] flex flex-col justify-center p-6 mb-8">
          <div className="grid grid-cols-2 gap-7 mb-6">
            <p className="text-sm text-White flex flex-col">
              Tip Amount <span className="text-xs text-gray-400">/ person</span>
            </p>
            <p className="text-Green-400 text-3xl text-right">$0.00</p>

            <p className="text-sm text-White flex flex-col">
              Total <span className="text-xs text-gray-400">/ person</span>
            </p>
            <p className="text-Green-400 text-3xl text-right">$0.00</p>
          </div>
          <button className="uppercase text-xl text-Green-900 rounded-md h-18 w-full bg-Green-400">
            reset
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
