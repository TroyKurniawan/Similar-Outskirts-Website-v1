type LiveShowsEntryProps = {
  event: {
    video: string;
    title: string;
    date: string;
    venue: string;
    city: string;
    description: string;
    host: string;
    host_link: string;
  };
};

function LiveShowsEntry({ event }: LiveShowsEntryProps) {
  return (
    <>
      <div
        className="grid lg:flex w-[24rem] sm:w-[36rem] md:w-[42rem] lg:w-[60rem]
                    justify-center
                    my-8 lg:space-x-8 place-items-start transition-all"
      >
        <iframe
          width="560"
          height="315"
          src={event.video}
          title={event.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="h-48 lg:h-80 md:h-72 w-80 lg:w-[50%] md:w-full "
        />
        {/* Text Box */}
        <div className="grid w-80 md:w-[28rem] lg:w-[50%] my-4 lg:my-0">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">
            {event.title}
          </h2>
          {/* Date / Location */}
          <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-500 mb-4 lg:mb-8">
            <p>{event.date}</p>
            <p>
              {event.venue} • {event.city}
            </p>
          </div>
          {/* Description */}
          <div className="text-sm sm:text-base">
            <p>{event.description}</p>
            <a
              href={event.host_link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Hosted by: {event.host}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveShowsEntry;
