import Head from 'next/head';
import Nav from './Nav';
import '../styles/index.css';

const Layout = props => (
  <div>
    <Head>
      <title>Bitcoin App</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>

    <Nav />
    <div className="container mt-5">{props.children}</div>
  </div>
);

export default Layout;
