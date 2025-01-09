import { Link as LinkScroll } from "react-scroll";

export const Navbar = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <LinkScroll
      to={title}
      offset={100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-primary uppercase transition-colors duration-300 cursor-pointer hover:text-gray-600 max-lg:my-4 max-lg:h5"
      onClick={onClick}
    >
      {title}
    </LinkScroll>
  );
};
