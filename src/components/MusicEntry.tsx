type MusicEntryProps = {
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
  return (
    <div
      className="w-[72rem] h-48
                  border border-white bg-red-900 bg-opacity-50 backdrop-blur
                  grid justify-center content-center
                  animate-fadeInSlide"
    ></div>
  );
}

export default MusicEntry;
