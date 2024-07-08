import { ReactComponent as OutArrow } from "../icons/google-outbound.svg";

type ButtonProps = {
  title: string;
  link: string;
};

function ButtonMain({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="py-5 px-8 m-8 bg-blue-500 rounded-full
                hover:scale-95 hover:bg-white hover:text-blue-500 transition
                flex
                text-2xl font-bold
                group"
    >
      {title}
      <OutArrow className="group-hover:fill-blue-500 size-8 ml-2" />
    </a>
  );
}

export default ButtonMain;
