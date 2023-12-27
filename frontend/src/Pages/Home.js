import React from "react";

const Home = () => {
  const data = [
    {
      user: "Aman Deep",
      img: "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      caption:
        "Quisque id nibh at risus finibus tincidunt. In malesuada mattis magna faucibus sodales. In pretium hendrerit lorem, non volutpat mauris rutrum sit amet. Quisque efficitur ligula non nulla hendrerit finibus. ",
      time: "5min ago",
      like: 44,
      comments: 18,
    },
    {
      user: "Harman",
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 26,
      comments: 16,
    },
    {
      user: "Komal KK",
      img: "https://images.unsplash.com/photo-1695664223145-58fb4b3f5e95?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Quisque id nibh at risus finibus tincidunt. In malesuada mattis magna faucibus sodales. In pretium hendrerit lorem, non volutpat mauris rutrum sit amet. Quisque efficitur ligula non nulla hendrerit finibus. ",
      time: "2hour ago",
      like: 29,
      comments: 18,
    },
    {
      user: "Harsh",
      img: "https://images.unsplash.com/photo-1703538715315-8e06d35b8f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption:
        "Suspendisse odio nisl, vehicula sed metus lacinia, tincidunt pulvinar urna. Nam suscipit fermentum dolor in mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra neque tortor.",
      time: "26 September",
      like: 31,
      comments: 14,
    },
  ];
  return (
    <div class="bg-gray-100">
      <div class="py-5 mx-auto w-[60%]">
        <div class="bg-white w-full shadow rounded-lg p-5">
          <textarea
            class="bg-gray-200 w-full rounded-lg shadow border p-2"
            rows="5"
            placeholder="Speak your mind"
          ></textarea>

          <div class="w-full flex flex-row flex-wrap mt-3">
            <div class="w-1/3">
              <select class="w-full p-2 rounded-lg bg-gray-200 shadow border float-left">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div class="w-2/3">
              <button
                type="button"
                class="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div class="mt-3 flex flex-col">
          {data?.map((item, i) => (
            <div class="bg-white mt-3">
              <div className="mx-5 my-4">
                <div className="flex">
                  <i class="fa-solid fa-user text-2xl text-gray-600"></i>
                  <p className="ms-2 text-xl text-gray-700 font-semibold">
                    {item.user}
                  </p>
                </div>
                <p class="text-base text-gray-700 font-semibold">
                  {item.caption}
                </p>
              </div>
              <img
                class="border shadow-lg h-[500px] w-full"
                src={item.img}
                alt="img"
              />
              <div class="bg-white p-1 border  flex flex-row flex-wrap">
                <div class="w-1/3 hover:bg-gray-200 text-center text-base text-gray-700 font-semibold">
                  {item.like} Like
                </div>
                <div class="w-1/3 hover:bg-gray-200 border-l-4 text-center text-base text-gray-700 font-semibold">
                  {item.comments} Comment
                </div>
                <div class="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-base text-gray-700 font-semibold">
                  Share
                </div>
              </div>
              <div className="shadow p-4  text-base text-gray-700 font-medium">
                Posted: {item.time}
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
    </div>
  );
};

export default Home;
