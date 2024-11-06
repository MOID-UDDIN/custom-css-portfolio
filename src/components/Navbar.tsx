import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="flex">
        <li className="hover">
          <Link href="/">Home</Link>
        </li>
        <li className="hover">
          <Link href="/about">About</Link>
        </li>
        <li className="hover">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover">
          <Link href="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
