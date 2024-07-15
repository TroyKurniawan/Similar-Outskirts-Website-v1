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
      {/* 1 */}
      <div className="flex my-16 space-x-8 place-items-start transition-all">
        <iframe
          width="560"
          height="315"
          src={event.video}
          title={event.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-[50%]"
        />
        {/* Text Box */}
        <div className="grid place-content-start w-[50%]">
          {/* Title */}
          <h2 className="text-6xl font-black mb-2">{event.title}</h2>
          {/* Date / Location */}
          <div className="text-xl font-bold text-gray-500 mb-8">
            <p>{event.date}</p>
            <p>
              {event.venue} • {event.city}
            </p>
          </div>
          {/* Description */}
          <div className="">
            <p className="">{event.description}</p>
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
