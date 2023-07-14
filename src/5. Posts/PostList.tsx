import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostProps } from "./types/types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const PostList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function read() {

      //const data: PostProps[] = await getData();
      const data = await getData();
      setData(data);
    }

    read();
  });

  //const data = [{ id: 1, title: "hello", body: "hey" }];
  return (
    <div className="postlist">
      {/* <PostCard title="Post Title" body="post desc"></PostCard> */}

      {/* post: { id: number, title: string; body: string } */}
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
