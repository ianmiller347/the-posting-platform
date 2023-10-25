import { PostData } from '../../types/post';
import { useGetPostsQuery } from '../../state/post';
import SkeletonLoaderBars from '../SkeletonLoaderBars';

const PostsList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery('');

  return (
    <div className="posts-list">
      {isLoading && <SkeletonLoaderBars />}
      <ul>
        {posts?.map((post: PostData) => (
          <li
            key={post.id}
            className="border rounded-lg mb-4 p-4 dark-mode dark:bg-slate-800"
          >
            <article className="">
              <h3 className="text-xl font-medium dark:text-white">
                {post.content.titleText}
              </h3>
              <p className="dark:text-white">{post.content.bodyText}</p>
            </article>
          </li>
        ))}
      </ul>
      {error && (
        <div className="error">Sorry, there was an error loading posts.</div>
      )}
    </div>
  );
};

export default PostsList;
