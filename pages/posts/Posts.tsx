import Page from '../../components/Page';
import PostsList from '../../components/PostsList';

export default function Posts() {
  return (
    <Page title="Posts" description="Posts on the Posting Platform">
      <>
        <p className="mb-8">Check out some of the recent posts here</p>
        <PostsList />
      </>
    </Page>
  );
}
