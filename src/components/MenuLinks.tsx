type MenuLinkProps = {
  title: string;
  link: string;
};

const MenuLinks = ({ title, link }: MenuLinkProps) => {
  return (
    <a href={link}>
      <p
        className="hover:text-blue-500 hover:cursor-pointer hover:pl-4 hover:border-l-8 border-blue-500 transition-all
                      pb-4 pt-3 my-4"
      >
        {title}
      </p>
    </a>
  );
};

export default MenuLinks;
