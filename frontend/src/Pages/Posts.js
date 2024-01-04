import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [data, setdata] = useState();
  const getData = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}post/user-posts`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setdata(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div class="bg-gray-100">
      <div class="w-full text-white bg-main-color bg-gray-100 p-4">
        <div class="bg-white p-3 w-full">
          <h2 className="font-semibold text-gray-900 text-xl leading-8">
            Media
          </h2>
          <div className="mt-4 w-full flex flex-wrap gap-4">
            {data?.map((item, i) => (
              <div class="shadow border rounded w-[24%]">
                <img
                  class="w-full h-[210px]"
                  src={item.imageLink}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-3">
                  <p class="text-gray-700 text-base">{item.caption}</p>
                </div>
                <div class="px-6 pb-3 flex justify-between">
                  <p class="text-gray-700 text-base">
                    {item.likes.length} Likes
                  </p>{" "}
                  <p class="text-gray-700 text-base">
                    {item.comments.length} Comments
                  </p>
                </div>
                <div class="px-6 text-gray-700 flex pb-3">
                  <p>Posted date:</p>
                  <p class="text-gray-700 text-base ms-1">
                    {item.datePosted.split("T")[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
