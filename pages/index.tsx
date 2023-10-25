import Page from '../components/Page';
import { PostData } from '../types/post';
import { useGetPostsQuery } from '../state/post';
import SkeletonLoaderBars from '../components/SkeletonLoaderBars';

export default function Home() {
  const { data: posts, error, isLoading } = useGetPostsQuery('');

  return (
    <Page title="The Posting Platform" description="">
      <>
        <p>Learn more about the posting Platform here</p>
        {isLoading && <SkeletonLoaderBars />}
        <ul>
          {posts?.map((post: PostData) => (
            <ol key={post.id} className="border mb-2">
              <h3 className="text-lg">{post.content.titleText}</h3>
              <p>{post.content.bodyText}</p>
            </ol>
          ))}
        </ul>
        {error && (
          <div className="error">Sorry, there was an error loading posts.</div>
        )}
      </>
    </Page>
  );
}
