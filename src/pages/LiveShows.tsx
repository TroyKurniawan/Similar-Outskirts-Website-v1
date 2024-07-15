import { LiveShowsData } from "../liveshowsdata/liveshowsdata";
import LiveShowsEntry from "../components/liveshows/LiveShowsEntry";

function LiveShows() {
  return (
    <>
      <div
        className="w-screen
                  grid place-items-center
                  text-white animate-fadeInSlide"
      >
        {/* Container */}
        <div className="w-[64rem] my-16">
          <h1
            className="text-4xl font-black w-fit pb-2 text-blue-500
                        border-b-4 border-blue-500
                        md:text-6xl lg:text-7xl lg:border-b-8"
          >
            Live Shows
          </h1>

          {/* Map out all show data */}
          {LiveShowsData.map((event) => (
            <LiveShowsEntry event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LiveShows;
