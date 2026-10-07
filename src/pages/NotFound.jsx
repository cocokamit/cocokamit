import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { SplitText } from '../components/Motion';

export default function NotFound() {
  return (
    <Page title="Not found">
      <section className="container page-head center notfound">
        <p className="eyebrow">Error 404</p>
        <SplitText as="h1" className="display" text="Lost in the orbit." />
        <p className="lede">This page drifted away. Let’s get you back on course.</p>
        <Link to="/" className="btn btn-primary" data-cursor="Home">Back home</Link>
      </section>
    </Page>
  );
}
