import { ReactComponent as OutArrow } from "../../icons/google-outbound.svg";

type ButtonProps = {
  title: string;
  link: string;
};

function ButtonPrimary({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="my-4 lg:my-8 py-3 px-4
                flex place-content-center place-items-center
                hover:bg-white bg-blue-500 hover:text-blue-500 transition
                text-base 2xl:text-xl font-bold
                group"
    >
      {title}
      {/* <OutArrow className="group-hover:fill-blue-500 size-7 ml-2" /> */}
    </a>
  );
}

export default ButtonPrimary;
