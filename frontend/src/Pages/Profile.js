import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [data, setdata] = useState();

  const getUserData = async () => {
    const token = localStorage.getItem("Token");
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}auth/user-profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUserData(response.data);
  };

  const getpostsData = async () => {
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
    getpostsData();
    getUserData();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("User");
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div class="">
        <div class="w-full text-white bg-main-color bg-gray-100 gap-2 rounded">
          <div class="flex">
            <div class="bg-white p-3 w-[35%]">
              <div class="image overflow-hidden">
                <img
                  class="h-auto w-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {userData?.fullName}
              </h1>
              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      {" "}
                      {userData?.dateCreated.split("T")[0]}
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>

            <div className="bg-white w-[65%]">
              <div class="flex items-center space-x-2 ms-3 pt-4 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-sm text-gray-700 grid md:grid-cols-2 ">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">{userData?.firstName}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">{userData?.lastName}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">{userData?.gender}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">{userData?.phoneNumber}</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="textailto:jane@example.com">
                      {userData?.email}
                    </a>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">{userData?.dob}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-3 bg-white p-3 shadow-sm rounded-sm ">
            <div class="w-full text-white bg-main-color bg-gray-100 rounded">
              <div class="bg-white p-3 w-full">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-gray-900 text-xl leading-8">
                    Media
                  </h2>
                  <button className="text-gray-900 text-xl font-medium">
                    <i className="fa-regular fa-plus me-2"></i>
                    Create Post
                  </button>
                </div>
                <hr />
                <div className="mt-4 w-full flex flex-wrap gap-4">
                  {data?.map((item, i) => (
                    <div class="shadow border rounded w-[25%] relative">
                      <img
                        className="w-full h-[210px] img33"
                        src={item.imageLink}
                        alt="Sunset in the mountains"
                      />
                      <div class="profileDiv55 flex justify-center gap-4 absolute top-[50%] ">
                        <p class="text-gray-700 text-base icon-color">
                          {item.likes.length}{" "}
                          <i class="fa-regular fa-heart"></i>
                        </p>{" "}
                        <p class="text-gray-700 text-base icon-color">
                          {item.comments.length}{" "}
                          <i class="fa-regular fa-comment"></i>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="bg-white p-3 hover:shadow">
              <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span class="text-green-500">
                  <svg
                    class="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Friends</span>
              </div>
              <div class="grid grid-cols-4">
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <a href="text" class="text-gray-800">
                    James
                  </a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt=""
                  />
                  <a href="text" class="text-gray-800">
                    Amit
                  </a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <a href="text" class="text-gray-800">
                    James
                  </a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                    alt=""
                  />
                  <a href="text" class="text-gray-800">
                    Amit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
