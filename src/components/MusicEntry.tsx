import { useState } from "react";
import MusicEntryDetails from "./MusicEntryDetails";

type MusicEntryProps = {
  id: number;
  title: string;
  subtitle: string;
  release_date: string;
  type: string;
  length: number;
  keysig: string[];
  tempo: number[];
  label: string;
  remix: boolean;
  collaboration: boolean;
  link: string;
  art: string;
};

function MusicEntry({
  id,
  title,
  subtitle,
  release_date,
  type,
  length,
  keysig,
  tempo,
  label,
  remix,
  collaboration,
  link,
  art,
}: MusicEntryProps) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Format date
  let date_split: string[] = release_date.split("-");
  let year: string = date_split[0];
  let month: string = months[Number(date_split[1]) - 1];
  let date: string = date_split[2];
  let date_string = month + " " + date + ", " + year;

  // Format length
  let length_string = "";
  let min: number = Math.floor(length / 60);
  let sec: number = length % 60;
  if (sec < 10) length_string = min + ":0" + sec;
  else length_string = min + ":" + sec;

  // Format keysig
  let keysig_string: string = keysig[0];
  if (keysig.length > 1) {
    for (let i = 1; i < keysig.length; i++) {
      keysig_string += ", " + keysig[i];
    }
  }

  // Format tempo
  let tempo_string: string = tempo[0].toString();
  if (tempo.length > 1) {
    for (let i = 1; i < tempo.length; i++) {
      tempo_string += ", " + tempo[i];
    }
  }

  const [openEntry, setOpenEntry] = useState(false);

  // ============================================

  return (
    <>
      <a
        className="w-[64rem] h-36 pl-6 pr-8 py-4 z-10
                hover:bg-slate-800
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-[16px] border-blue-500 transition-all"
        onClick={() => {
          setOpenEntry(!openEntry);
        }}
      >
        <p className="pr-4 text-gray-500 font-black">{id}</p>

        {/* Main Box */}
        <div className="w-4/5 h-36 pr-4 space-x-4 flex place-items-center">
          <img src={art} className="h-full py-4" />

          <div>
            <h1 className="text-4xl font-black">{title}</h1>
            {subtitle && <h2 className="">({subtitle})</h2>}

            {/* Deatils */}
            <div className="flex w-[26rem] justify-between text-gray-500 text-sm mt-2">
              {/* Length */}
              <div className="flex w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17px"
                  viewBox="0 -960 960 960"
                  width="17px"
                  fill="#6b7280"
                >
                  <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
                </svg>
                <p className="ml-1">{length_string}</p>
              </div>

              {/* Tempo */}
              <div className="flex w-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17px"
                  viewBox="0 -960 960 960"
                  width="17px"
                  fill="#6b7280"
                >
                  <path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" />
                </svg>
                <p className="ml-1">{tempo_string + " bpm"}</p>
              </div>

              {/* Key */}
              <div className="flex w-32 object-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="17px"
                  viewBox="0 -960 960 960"
                  width="17px"
                  fill="#6b7280"
                >
                  <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
                </svg>
                <p className="ml-1">{keysig_string}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Box */}
        <div
          className="flex justify-start place-content-between w-1/4
                      text-gray-500 text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#6b7280"
          >
            <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
          </svg>
          <p className="ml-2 text-lg font-bold">{date_string}</p>
        </div>
      </a>

      {/* Open Entry */}
      {/* {openEntry && <MusicEntryDetails />} */}
    </>
  );
}

export default MusicEntry;
