import PostCard from "@/components/ui/PostCard";
import { Post } from "@/types/posts";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const postsPage = async () => {
	const posts: Post[] = await getPosts();
	
	return (
		<div>
			<h1> Posts </h1>
			      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
		</div>
	)
};

export default postsPage;