import { useState } from "react";
import { ReactComponent as Search } from "../icons/google-search.svg";
import { ReactComponent as Note } from "../icons/google-music.svg";
import ToggleSwitch from "./ToggleSwitch";
import Person from "../icons/google-person.svg";
import Construction from "../icons/google-construction.svg";
import Groups from "../icons/google-groups.svg";

function SearchFilter() {
  const [test, setTest] = useState(false);
  const year: number = new Date().getFullYear();

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
        <div className="absolute m-1 pl-1 scale-90 opacity-50">
          <Search />
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
        <input
          className="bg-slate-800 w-36 h-8 text-center"
          placeholder="Lower BPM"
          type="number"
          defaultValue={90}
        />
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
          defaultValue={year}
        />
      </div>

      <div className="w-full h-[2px] my-4 bg-slate-800" />

      {/* ======================================= */}

      <h2 className="font-bold my-2">Key</h2>

      <div className="my-2 flex">
        <div className="absolute m-1 pl-1 scale-90 opacity-50">
          <Note />
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
