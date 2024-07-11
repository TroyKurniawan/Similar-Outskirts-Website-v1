import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Person from "../icons/google-person.svg";
import Construction from "../icons/google-construction.svg";
import Groups from "../icons/google-groups.svg";
import { currentYear } from "../App";

function SearchFilter() {
  const [test, setTest] = useState(false);

  return (
    <div
      className="w-96 h-[44rem] mx-4 p-4
                  border-4 border-slate-800 bg-slate-900 bg-opacity-50 backdrop-blur
                  animate-fadeInSlide overflow-y-scroll"
    >
      <div className="flex place-items-center place-content-between">
        <h1 className="text-2xl font-black my-2">Filter by</h1>
        <p className="text-sm text-gray-500">( Results: ### )</p>
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Name</h2>

      <div className="my-2 flex">
        <div className="absolute m-1 pl-1 scale-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
        <input
          className="bg-slate-800 w-full pl-10 pr-2 h-8"
          placeholder="Song title, artist name, etc..."
          type="search"
        />
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Tempo</h2>

      <div className="flex place-content-between place-items-center">
        <div className="flex">
          <div className="absolute m-1 pl-1 scale-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
            </svg>
          </div>
          <input
            className="bg-slate-800 w-36 h-8 pl-4 text-center"
            placeholder="Lower BPM"
            type="number"
            defaultValue={90}
          />
        </div>
        <p>to</p>
        <input
          className="bg-slate-800 w-36 h-8 text-center"
          placeholder="Upper BPM"
          type="number"
          defaultValue={200}
        />
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Release Year</h2>

      <div className="flex place-content-between place-items-center">
        <input
          className="bg-slate-800 w-36 h-8 text-center"
          placeholder="Lower Year"
          type="number"
          defaultValue={2014}
        />
        <p>to</p>
        <input
          className="bg-slate-800 w-36 h-8 text-center"
          placeholder="Upper Year"
          type="number"
          defaultValue={currentYear}
        />
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Key</h2>

      <div className="my-2 flex">
        <div className="absolute m-1 pl-1 scale-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="gray"
          >
            <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
          </svg>
        </div>

        <select className="bg-slate-800 w-full pl-10 h-8">
          <option value="">-</option>
          <option value="C / Am">C / Am</option>
          <option value="C# / A#m">C# / A#m</option>
          <option value="D / Bm">D / Bm</option>
          <option value="D# / Cm">D# / B#m</option>
          <option value="E / C#m">E / C#m</option>
          <option value="F / Dm">F / Dm</option>
          <option value="F# / D#m">F# / D#m</option>
          <option value="G / Em">G / Em</option>
          <option value="G# / Fm">G# / Fm</option>
          <option value="A / F#m">A / F#m</option>
          <option value="A# / Gm">A# / Gm</option>
          <option value="B / G#m">B / G#m</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

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

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Label</h2>

      <div className="">
        <ToggleSwitch
          callback={setTest}
          title="Independent Release"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Rushdown"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="FiXT"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Proximity"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Disciple"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="FORM"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Heaven Sent"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Umbra Collective"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
        <ToggleSwitch
          callback={setTest}
          title="Hot Panda Media"
          subtitle=""
          init={true}
          icon=""
          enable={true}
        />
      </div>

      <div className="h-6" />

      {/* ======================================= */}
    </div>
  );
}

export default SearchFilter;
