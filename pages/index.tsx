import { useEffect, useState } from 'react';
import Page from '../components/Page';
import { PostData } from '../types/post';

// change this to be a helper
const fetchAllPosts = async () => {
  const response = await fetch('/api/posts', {
    method: 'GET',
  });
  return response.json();
}

export default function Home() {
  // this should use redux toolkit instead of internal component state.
  const [posts, setPosts] = useState<PostData[]>();
  // change this to use api helpers and perhaps even redux toolkit helpers for enhanced caching.
  useEffect(() => {
    fetchAllPosts().then(data => setPosts(data));
  }, []);

  return (
    <Page title="The Posting Platform" description="">
      <>
        <p>Learn more about the posting Platform here</p>
        <ul>
          {posts?.map(post => (
              <ol key={post.id} className="border mb-2">
                <h3 className="text-lg">{post.content.titleText}</h3>
                <p>{post.content.bodyText}</p>
              </ol>
          ))}
        </ul>
      </>
    </Page>
  );
}
