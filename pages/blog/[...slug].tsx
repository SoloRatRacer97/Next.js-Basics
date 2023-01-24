// NOTE: We can use slugs here to get the inputs in the URL as an array in JS. Curious to see how this could be used. Allows us to write more dynamic paths I guess?

import { useRouter } from "next/router";

function BlogPosts() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}

export default BlogPosts;
