import { ReactComponent as OutArrow } from "../../icons/google-outbound.svg";

type ButtonProps = {
  title: string;
  link: string;
};

function ButtonPrimary({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="my-8 py-5 pl-10 pr-8 bg-blue-500
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

export default ButtonPrimary;
