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
function Post({ id, username, caption, userImg, img }) {
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
      <div className="flex justify-between m-3">
        <div className="flex  space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-3"> {username}</span>
          {caption}
        </p>
      </div>
      {/* coments */}
      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
          placeholder="Add acomment ..."
        ></input>
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
