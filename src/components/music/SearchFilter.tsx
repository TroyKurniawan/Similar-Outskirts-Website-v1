import { useState } from "react";
import ToggleSwitch from "../utilities/ToggleSwitch";
import Person from "../../icons/google-person.svg";
import Construction from "../../icons/google-construction.svg";
import Groups from "../../icons/google-groups.svg";
import { currentYear } from "../../App";

type SearchFilterProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setTempo: React.Dispatch<React.SetStateAction<number[]>>;
  setReleaseYear: React.Dispatch<React.SetStateAction<number[]>>;
  setKeysig: React.Dispatch<React.SetStateAction<string>>;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
};

function SearchFilter({
  setKeyword,
  setTempo,
  setReleaseYear,
  setKeysig,
  setLabel,
}: SearchFilterProps) {
  const [test, setTest] = useState(true);

  // Format tempo to send as state change
  function formatTempo() {
    setTempo([
      parseInt(
        (document.getElementById("lower-tempo") as HTMLInputElement)?.value
      ),
      parseInt(
        (document.getElementById("upper-tempo") as HTMLInputElement)?.value
      ),
    ]);
  }

  // Format release year to send as state change
  function formatReleaseYear() {
    setReleaseYear([
      parseInt(
        (document.getElementById("lower-year") as HTMLInputElement)?.value
      ),
      parseInt(
        (document.getElementById("upper-year") as HTMLInputElement)?.value
      ),
    ]);
  }

  // = = = = = = = = = = = = = = = = = =

  return (
    <div
      className="w-100vw md:w-96
                  h-20 xl:h-[calc(100vh-200px)]
                  mx-4 py-4
                  border-4 border-slate-800 bg-slate-900
                  grid justify-center place-items-center
                  animate-fadeInSlide overflow-y-auto"
    >
      <div
        className="flex place-items-center w-[21rem] px-2
                    hover:bg-white hover:bg-opacity-5 hover:cursor-pointer"
      >
        <h1 className="text-2xl font-black my-2">Filter by</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="white"
        >
          <path d="M480-360 280-560h400L480-360Z" />
        </svg>
      </div>

      <div className="w-80">
        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Title</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </div>
          <input
            id="keyword-input"
            className="bg-slate-800 w-full pl-10 pr-2 h-8"
            placeholder="Search..."
            type="search"
            autoComplete="off"
            onChange={() =>
              setKeyword(
                (document.getElementById("keyword-input") as HTMLInputElement)!
                  .value
              )
            }
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Tempo</h2>

        <div className="flex place-content-between place-items-center relative">
          {/* Lower */}
          <div className="flex">
            <div className="absolute m-1 pl-1 scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#6b7280"
              >
                <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
              </svg>
            </div>
            <input
              id="lower-tempo"
              className="bg-slate-800 w-36 h-8 pl-4 text-center"
              placeholder="Lower BPM"
              type="number"
              defaultValue={70}
              onChange={formatTempo}
            />
          </div>
          <p>to</p>
          {/* Upper */}
          <input
            id="upper-tempo"
            className="bg-slate-800 w-36 h-8 text-center"
            placeholder="Upper BPM"
            type="number"
            defaultValue={200}
            onChange={formatTempo}
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Release Year</h2>

        <div className="flex place-content-between place-items-center relative">
          <div className="flex">
            <div className="absolute m-1 pl-1 scale-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22px"
                viewBox="0 -960 960 960"
                width="22px"
                fill="#6b7280"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
            </div>
            <input
              id="lower-year"
              className="bg-slate-800 w-36 h-8 pl-4 text-center"
              placeholder="Lower Year"
              type="number"
              defaultValue={2014}
              onChange={formatReleaseYear}
            />
          </div>
          <p>to</p>
          <input
            id="upper-year"
            className="bg-slate-800 w-36 h-8 text-center"
            placeholder="Upper Year"
            type="number"
            defaultValue={currentYear}
            onChange={formatReleaseYear}
          />
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Key</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
            </svg>
          </div>

          <select
            id="keysig-menu"
            className="bg-slate-800 w-full pl-10 h-8"
            onChange={() =>
              setKeysig(
                (document.getElementById("keysig-menu") as HTMLSelectElement)!
                  .value
              )
            }
            defaultValue={"-"}
          >
            <option value="-">-</option>
            <option value="C / Am">C / Am</option>
            <option value="C# / A#m">C# / A#m</option>
            <option value="D / Bm">D / Bm</option>
            <option value="D# / Cm">D# / Cm</option>
            <option value="E / C#m">E / C#m</option>
            <option value="F / Dm">F / Dm</option>
            <option value="F# / D#m">F# / D#m</option>
            <option value="G / Em">G / Em</option>
            <option value="G# / Fm">G# / Fm</option>
            <option value="A / F#m">A / F#m</option>
            <option value="A# / Gm">A# / Gm</option>
            <option value="B / G#m">B / G#m</option>
          </select>
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}

        <h2 className="font-bold my-2">Label</h2>

        <div className="my-2 flex relative">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#6b7280"
            >
              <path d="M480-300q75 0 127.5-52.5T660-480q0-75-52.5-127.5T480-660q-75 0-127.5 52.5T300-480q0 75 52.5 127.5T480-300Zm0-140q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>

          <select
            id="label-menu"
            className="bg-slate-800 w-full pl-10 h-8"
            onChange={() =>
              setLabel(
                (document.getElementById("label-menu") as HTMLSelectElement)!
                  .value
              )
            }
            defaultValue={"-"}
          >
            <option value="-">-</option>
            <option value="Independent">Independent</option>
            <option value="Rushdown">Rushdown</option>
            <option value="FiXT">FiXT</option>
            <option value="Proximity">Proximity</option>
            <option value="Disciple">Disciple</option>
            <option value="FORM">FORM</option>
            <option value="Heaven Sent">Heaven Sent</option>
            <option value="Hypernight">Hypernight</option>
            <option value="Umbra Collective">Umbra Collective</option>
            <option value="Hot Panda Media">Hot Panda Media</option>
          </select>
        </div>

        <div className="w-full h-[2px] my-4 bg-slate-800" />

        {/* = = = = = = = = = = = = = = = = = = */}
        <h2 className="font-bold my-2">Type</h2>

        <div className="">
          <ToggleSwitch
            callback={setTest}
            title="Originals"
            subtitle=""
            init={true}
            icon={Person}
            enable={true}
          />
          <ToggleSwitch
            callback={setTest}
            title="Remixes"
            subtitle=""
            init={true}
            icon={Construction}
            enable={true}
          />
          <ToggleSwitch
            callback={setTest}
            title="Collaborations"
            subtitle=""
            init={true}
            icon={Groups}
            enable={true}
          />
        </div>

        {/* = = = = = = = = = = = = = = = = = = */}
      </div>
    </div>
  );
}

export default SearchFilter;
