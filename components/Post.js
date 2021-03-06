import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
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
    <div className="bg-white my-7 border rounded-sm">
      {/* header  */}
      <div className="flex items-center p-2 ">
        <img
          src={userImg}
          alt="user Image"
          className="rounded-full h-12 w-12 object-center object-cover  p-1 mr-3"
        />
        <p className="flex-1 font-semibold ">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img  */}
      <img src={img} className="object-cover w-full max-h-screen " alt="" />

      {/* buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="Btn" />
            <ChatIcon className="Btn" />
            <PaperAirplaneIcon className="Btn rotate-45" />
          </div>
          <BookmarkIcon className="Btn" />
        </div>
      )}

      {/* caption  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a Comment ..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
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
