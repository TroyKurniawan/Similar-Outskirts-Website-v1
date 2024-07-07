type MenuLinkProps = {
  title: string;
  link: string;
};

const MenuLinks = ({ title, link }: MenuLinkProps) => {
  return (
    <a href={link}>
      <p className="hover:text-blue-500 hover:translate-x-4 hover:cursor-pointer transition-all">
        {title}
      </p>
    </a>
  );
};

export default MenuLinks;
