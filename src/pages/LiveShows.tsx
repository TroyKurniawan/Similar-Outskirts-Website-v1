import { LiveShowsData } from "../liveshowsdata/liveshowsdata";
import LiveShowsEntry from "../components/liveshows/LiveShowsEntry";
import PageTitle from "../components/PageTitle";

function LiveShows() {
  return (
    <>
      {/* Background */}
      <div
        className="h-screen w-screen bg-show2 fixed -z-50
                   bg-cover bg-no-repeat bg-[70%] md:bg-bottom"
      />
      <div className="w-screen grid place-items-center text-white animate-fadeInSlide">
        <PageTitle title={"Live Shows"} />
        {/* Container */}
        <div
          className="w-96 sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                        sm:mt-8 mb-24 grid"
        >
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
