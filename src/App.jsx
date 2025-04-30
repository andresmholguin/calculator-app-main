import iconPerson from "./assets/images/icon-person.svg";

function App() {
  return (
    <>
      <header className=" h-34 flex justify-center items-center">
        <h1 className="text-Green-900 flex flex-col uppercase tracking-[0.5em]">
          <span>spli</span>
          <span>tter</span>
        </h1>
      </header>
      <main className="w-[375px] h-[600px] bg-White rounded-2xl px-[32px] pt-[24px]">
        <section>
          <label htmlFor="">Bill</label>
          <input type="number" placeholder="$" />
        </section>
        <section>
          <label htmlFor="">Select Tip %</label>
          <div className="grid grid-cols-2 gap-4 text-White">
            <button className="bg-Green-900 rounded-sm p-1">5%</button>
            <button className="bg-Green-900 rounded-sm p-1">10%</button>
            <button className="bg-Green-900 rounded-sm p-1">15%</button>
            <button className="bg-Green-900 rounded-sm p-1">25%</button>
            <button className="bg-Green-900 rounded-sm p-1">50%</button>
            <input
              className="bg-Grey-50 rounded-sm text-Grey-500 text-right"
              type="text"
              placeholder="Custom"
            />
          </div>
        </section>
        <section>
          <label htmlFor="">Number of People</label>
          <div className="flex items-center relative bg-Grey-50 rounded-sm">
            <img className="absolute ml-2" src={iconPerson} alt="Icon person" />
            <input
              className="text-right pr-8 h-[48px]"
              type="text"
              placeholder="1"
            />
          </div>
        </section>
      </main>
    </>
  );
}

//Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount / person Total / person Reset

export default App;
