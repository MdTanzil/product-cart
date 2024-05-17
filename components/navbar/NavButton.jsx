import Link from "next/link";

const NavButton = ({ to, children }) => {
  return (
    <li>
      <Link href={to}>{children}</Link>
    </li>
  );
};

export default NavButton;
