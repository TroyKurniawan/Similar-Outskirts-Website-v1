import { ReactComponent as OutArrow } from "../icons/google-outbound.svg";

type ButtonProps = {
  title: string;
  link: string;
};

function ButtonSecondary({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="my-8 py-5 pl-10 pr-8 bg-white text-blue-500
                hover:scale-95 hover:bg-blue-500 hover:text-white transition
                flex
                text-2xl font-bold
                group"
    >
      {title}
      <OutArrow className="group-hover:fill-white fill-blue-500 size-8 ml-2" />
    </a>
  );
}

export default ButtonSecondary;
