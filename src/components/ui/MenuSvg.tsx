interface HamburgerMenuProps {
  openNavigation: boolean;
}

export const MenuSvg = ({ openNavigation }: HamburgerMenuProps) => {
  return (
    <svg
      className="overflow-visible cursor-pointer"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className={`transition-all origin-center ${
          openNavigation ? "opacity-0" : "opacity-100"
        }`}
        y={openNavigation ? "5" : "-2"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "5"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "12"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};
