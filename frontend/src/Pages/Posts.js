import React from "react";

const Posts = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
  ];
  return (
    <div>
      <div class="bg-gray-100">
        <div class="w-full text-white bg-main-color bg-gray-100 p-4">
          <div class="bg-white p-3 w-full">
            <h2 className="font-semibold text-gray-900 text-xl leading-8">
              Media
            </h2>
            <div className="mt-4 w-full flex flex-wrap gap-4">
              {data.map((item, i) => (
                <div class="shadow border rounded w-[24%]">
                  <img
                    class="w-full"
                    src={item.img}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-3">
                    <p class="text-gray-700 text-base">{item.caption}</p>
                  </div>
                  <div class="px-6 pb-3 flex justify-between">
                    <p class="text-gray-700 text-base">{item.like} Likes</p>{" "}
                    <p class="text-gray-700 text-base">
                      {item.comments} Comments
                    </p>
                  </div>
                  <div class="px-6 text-gray-700 flex pb-3">
                    <p>Posted date:</p>
                    <p class="text-gray-700 text-base ms-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="mt-4 bg-white p-3 w-full">
            <h2 className="font-semibold text-gray-900 text-xl leading-8">
              Thoughts
            </h2>
            <div className="mt-4 w-full flex flex-wrap gap-4">
              {data.map((item, i) => (
                <div class="shadow border rounded w-[24%]">
                  <div class="px-6 py-3">
                    <p class="text-gray-700 text-base">{item.caption}</p>
                  </div>
                  <div class="px-6 pb-3 flex justify-between">
                    <p class="text-gray-700 text-base">{item.like} Likes</p>{" "}
                    <p class="text-gray-700 text-base">
                      {item.comments} Comments
                    </p>
                  </div>
                  <div class="px-6 text-gray-700 flex pb-3">
                    <p>Posted date:</p>
                    <p class="text-gray-700 text-base ms-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
