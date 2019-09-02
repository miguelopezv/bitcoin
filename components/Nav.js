import Link from 'next/link';

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
    {/* TODO: Move this */}
    <style jsx>
      {`
        ul {
          background: #333;
          list-style: none;
          display: flex;
        }
        ul li {
          padding: .5rem 0;
          margin-right: 1rem;
        }
        ul li a {
          font-size: 1.2rem;
          color: white;
          text-decoration; none;
        }
      `}
    </style>
  </div>
);

export default Nav;
