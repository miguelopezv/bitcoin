import { Layout, Price } from '../components';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <div className="flex">
      <div className="w-full">
        <Price price={props.bitcoinPrice} />
      </div>
    </div>
    <div className="flex">
      <div className="w-2/3">
        <h2>News</h2>
      </div>
      <div className="w-1/3">
        <h2>Upcoming events</h2>
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const key = '7523c7be-97bc-49d3-807b-2c6c3c7c09fc';
  const objHeader = {
    headers: {
      'X-CMC_PRO_API_KEY': key,
      'Accept-Encoding': 'deflate'
    },
    json: true,
    gzip: true
  };

  const response = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC',
    objHeader
  );
  const bitcoinPrice = await response.json();

  return { bitcoinPrice: bitcoinPrice.data.BTC.quote.USD };
};

export default Index;
