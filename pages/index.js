import { Layout, Price, News } from '../components';
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
        <News news={props.bitcoinNews} />
      </div>
      <div className="w-1/3">
        <h2>Upcoming events</h2>
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const key = '7523c7be-97bc-49d3-807b-2c6c3c7c09fc';
  const newsKey = 'ff046894563742c3922c231081f8bdce';

  const objHeader = {
    headers: {
      'X-CMC_PRO_API_KEY': key,
      'Accept-Encoding': 'deflate'
    },
    json: true,
    gzip: true
  };

  const priceResponse = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC',
    objHeader
  );
  const bitcoinPrice = await priceResponse.json();

  const newsResponse = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${newsKey}&language=en`
  );

  const bitcoinNews = await newsResponse.json();

  return {
    bitcoinPrice: bitcoinPrice.data.BTC.quote.USD,
    bitcoinNews: bitcoinNews.articles
  };
};

export default Index;
