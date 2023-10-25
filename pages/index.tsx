import Page from '../components/Page';
import PostsList from '../components/PostsList';

export default function Home() {
  return (
    <Page>
      <>
        <p className="mb-8">Learn more about the posting Platform here</p>
        <PostsList />
      </>
    </Page>
  );
}
