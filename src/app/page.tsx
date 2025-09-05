import useIndex from "@/data/hooks/pages/useIndex.page";
import PostList from "../ui/components/PostList/PostList";

export default function Home() {
  const { post } = useIndex();
  
  return (
    <main>
      <PostList posts={post} />
    </main>
  );
}
