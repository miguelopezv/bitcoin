import Link from 'next/link';

const Nav = () => (
  <div>
    <ul className="list-none flex bg-gray-600">
      <li className="py-2 mr-4">
        <Link href="/">
          <a className="text-white text-xl no-underline">Home</a>
        </Link>
      </li>
      <li className="py-2 mr-4">
        <Link href="/about">
          <a className="text-white text-xl no-underline">About Us</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Nav;
