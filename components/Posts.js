import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";
import { onSnapshot } from "@firebase/firestore";
import { collection, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );
  console.log(posts)
  return (
    <div>
      {Object.values(posts).map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            userImg={post.data().profileImg}
            caption={post.data().caption}
            img={post.data().image}
            username={post.data().username}
          />
        );
      })}
    </div>
  );
}

export default Posts;
