type ButtonProps = {
  title: string;
  link: string;
};

function ButtonHeader({ title, link }: ButtonProps) {
  return (
    <a
      href={link}
      className="py-4 px-2 mx-2
                hover:text-blue-500 hover:border-blue-500 hover:border-b-4 transition-all
                flex
                text-lg font-bold
                group"
    >
      {title}
    </a>
  );
}

export default ButtonHeader;
