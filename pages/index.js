import { Layout } from '../components';

const Index = () => (
  <Layout>
    <div className="flex">
      <div className="w-full">
        <h2>Bitcoin price</h2>
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

export default Index;
