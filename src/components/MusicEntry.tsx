import ButtonPrimary from "./ButtonPrimary";

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

  return (
    <a
      className="w-[64rem] h-36 pl-6 pr-8 py-4 z-10
                hover:bg-slate-800
                  flex place-items-center
                  cursor-pointer
                  hover:border-l-[16px] border-blue-500 transition-all"
      href={link}
      target="_blank"
    >
      <p className="pr-4 text-gray-500 font-black">{id}</p>

      {/* Artwork + Title */}
      <div className="w-4/5 h-36 pr-4 space-x-4 flex place-items-center">
        <img src={art} className="h-full py-4" />
        <div>
          <h1 className="text-4xl font-black">{title}</h1>
          {subtitle && <h2 className="">({subtitle})</h2>}
        </div>
      </div>

      {/* More info */}
      <div
        className="grid justify-start place-content-between w-1/5
                      text-gray-500 text-sm"
      >
        <p className="">{date_string}</p>
        <p className="">{keysig_string}</p>
        <p className="">{length_string}</p>
        <p className="">{tempo_string + " bpm"}</p>
      </div>
    </a>
  );
}

export default MusicEntry;
