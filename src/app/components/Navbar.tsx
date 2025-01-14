export const Navbar = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <a href={title} className="base-bold text-primary uppercase transition-colors duration-300 cursor-pointer hover:text-gray-600 max-lg:my-4 max-lg:h5"
    onClick={onClick}>{title}</a>
  );
};
