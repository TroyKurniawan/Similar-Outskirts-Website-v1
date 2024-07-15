import { LiveShowsData } from "../liveshowsdata/liveshowsdata";
import LiveShowsEntry from "../components/liveshows/LiveShowsEntry";
import PageTitle from "../components/PageTitle";

function LiveShows() {
  return (
    <div className="w-screen grid place-items-center text-white animate-fadeInSlide">
      <PageTitle title={"Live Shows"} />
      {/* Container */}
      <div className="sm:mt-8 mb-24 grid w-96 md:w-[48rem] lg:w-[64rem]">
        {/* Map out all show data */}
        {LiveShowsData.map((event) => (
          <LiveShowsEntry event={event} />
        ))}
      </div>
    </div>
  );
}

export default LiveShows;
