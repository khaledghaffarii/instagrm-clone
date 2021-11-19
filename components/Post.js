import {
  serverTimestamp,
  updateDoc,
  collection,
  orderBy,
  query,
  onSnapshot,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { doc, addDoc } from "firebase/firestore";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Moment from "react-moment";

function Post({ id, username, caption, userImg, img }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),
    [db]
  );
  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="bg-white my-9 border">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="h-12 w-12 object-contain border p-1 mr-3 rounded-full cursor-pointer hover:scale-125"
        />
        <p className="flex-1 font-bold"> {username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* img */}
      <img src={img} alt="" className="object-cover w-full " />
      {/* Button */}
      {session && (
        <div className="flex justify-between m-3">
          <div className="flex  space-x-4 ">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-3"> {username}</span>
          {caption}
        </p>
      </div>
      {/* coments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0 outline-none"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add acomment ..."
          ></input>
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
