import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState();
  const [comments, setcomments] = useState([]);
  const [commentText, setcommentText] = useState("");
  const [postid, setPostid] = useState();
  const [commentSectionRefresh, setcommentSectionRefresh] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [loading, setloading] = useState(true);
  console.log(comments);
  const getData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}post/all`
    );
    setdata(response.data);
    setloading(false);
    setcommentSectionRefresh(true);
  };
  useEffect(() => {
    if (loading) {
      getData();
    }
  }, [loading]);
  useEffect(() => {
    if (showCommentBox && commentSectionRefresh) {
      const filterData = data?.filter((item) => item._id == postid);
      if (filterData.length != 0) {
        setcomments(filterData[0].comments.reverse());
        setcommentSectionRefresh(false);
      }
    }
  }, [commentSectionRefresh, showCommentBox]);

  const handleLike = async (postId) => {
    const token = localStorage.getItem("Token");
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}post/like/${postId}/`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setloading(true);
  };
  const handleShowCommentBox = (postId) => {
    setShowCommentBox(true);
    setPostid(postId);
    setcommentSectionRefresh(true);
  };

  const handlePostComment = async () => {
    const token = localStorage.getItem("Token");
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}post/comment/`,
      { text: commentText, postid },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setcommentText("");
    setloading(true);
  };

  const handleDeleteComment = async (id) => {
    const token = localStorage.getItem("Token");
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}post/comment-delete/${id}`,
      { postid },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setloading(true);
  };
  return (
    <div className="bg-gray-100 flex">
      <div className="mt-2 w-[65%]">
        <div className="w-fit">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.l6nPLCiWuJkhte2Ru60fdQAAAA&pid=Api&P=0&h=180"
            alt="img"
            className="img44"
          />
          <p className="text-xs">Your Story</p>
        </div>
        <div class="flex flex-col">
          {data?.map((item, i) => (
            <div class="bg-white mt-2 px-12 py-1 shadow" key={i}>
              <div className="mb-3">
                <div className="flex">
                  <i class="fa-solid fa-user text-2xl text-gray-600"></i>
                  <p className="ms-2 text-xl text-gray-700 font-semibold">
                    {item.userId.firstName} {item.userId.lastName}
                  </p>
                </div>
                <p class="text-base text-gray-700 font-semibold">
                  {item.caption}
                </p>
              </div>
              <img
                class="border shadow-lg h-[360px] w-full"
                src={item.imageLink}
                alt="img"
              />
              <div class="bg-white p-1 border  flex flex-row flex-wrap">
                <div
                  class="w-1/3 hover:bg-gray-200 text-center text-base text-gray-700 font-semibold"
                  onClick={() => handleLike(item._id)}
                >
                  {item.likes.length} <i class="fa-regular fa-heart"></i>
                </div>
                <div
                  onClick={() => handleShowCommentBox(item._id)}
                  class="w-1/3 hover:bg-gray-200 border-l-4 text-center text-base text-gray-700 font-semibold"
                >
                  {item.comments.length} <i class="fa-regular fa-comment"></i>
                </div>
                <div class="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-base text-gray-700 font-semibold">
                  <i class="fa-regular fa-share"></i>
                </div>
              </div>
              <div className=" mt-1 text-base text-gray-700 font-medium">
                <i class="fa-regular fa-calendar-days"></i>{" "}
                {item.datePosted.split("T")[0]}
              </div>

              {/* <div class="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
              <div class="w-full">
                <div class="w-full text-left text-xl text-gray-600">
                  @Some Person
                </div>
                A Pretty Cool photo from the mountains. Image credit to
                @danielmirlea on Unsplash. A Pretty Cool photo from the
                mountains. Image credit to @danielmirlea on Unsplash.
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[35%] h-screen overflow-auto  bg-white shadow">
        {showCommentBox && (
          <div className="mb-5 mx-2">
            <div className="mt-3 mb-2 flex justify-end me-1">
              <i
                class="fa-light fa-xmark-large"
                onClick={() => {
                  setcomments([]);
                  setShowCommentBox(false);
                }}
              ></i>
            </div>
            <textarea
              type="text"
              placeholder="Your Comment"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-1 outline-none"
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
            ></textarea>
            <button
              class="mt-3 bg-blue-500 hover:bg-blue-700  text-white py-1 px-2 rounded"
              onClick={handlePostComment}
            >
              Post
            </button>
            <hr className="my-5" />
            <div>
              {comments.length == 0 && <p>No comments yet</p>}
              {comments.length != 0 &&
                comments?.map((items, i) => (
                  <div key={i} className="mb-2 px-2">
                    <p className="font-medium">
                      {items?.user?.firstName} {items?.user?.lastName}
                    </p>
                    <p className="mb-1">{items.text}</p>
                    <div className="flex justify-between text-xs">
                      <p>{items?.dateCommented.split("T")[0]}</p>
                      <p
                        className="cursor-pointer"
                        onClick={() => handleDeleteComment(items?._id)}
                      >
                        Delete
                      </p>
                    </div>
                    <hr className="mt-2" />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
