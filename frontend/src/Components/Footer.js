import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div class="flex justify-center items-center">
        <div class="bg-white items-center w-full md:max-w-7xl">
          <div class="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <p class="text-md font-semibold text-gray-800 md:text-lg md:text-gray-500/90">
              {" "}
              Join Our Newsletter{" "}
            </p>
            <div class="md:text-lg">
              {" "}
              <input
                class="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-md placeholder-slate-400 px-2 py-1 focus:outline-none focus:border-cyan-600"
                type="email"
                placeholder="E-mail Address"
              />{" "}
              <button class="p-1 m-1 rounded-md text-white bg-blue-500 hover:text-blue-500 hover:bg-white hover:font-semibold hover:trandform ease-in-out duration-300">
                Subscribe{" "}
              </button>{" "}
            </div>
            
          </div>
          <hr class="mt-2 md:overflow-hidden" />
          <div class="grid grid-cols-2 my-3 text-center md:grid-cols-4">
            <div class="flex flex-col leading-7 items-start ml-20">
              <h1 class="text-blue-500 text-lg font-semibold">Product</h1>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Features
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Integrations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Shopify Integrations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Pricing
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Chrome Extensions
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col leading-7">
              <h1 class="text-blue-500 text-lg font-semibold">Company</h1>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Terms
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Customers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Blog
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Terms of Servics
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Privacy Policy
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-blue-500 text-lg font-semibold">Support</h1>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Community
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Support Customers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Documentations
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Service Providers
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Email Contact
                </a>{" "}
              </p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-blue-500 text-lg font-semibold">Contact Us</h1>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  Support@admin.com
                </a>{" "}
              </p>
              <p>
                {" "}
                <a class="text-gray-500/80 hover:text-cyan-600" href="#">
                  (+91)700-788-67-00
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold pt-4 pb-2 text-gray-500/80">
        Social Media App. 2023 @All Right Reseved.
      </div>
    </>
  );
};

export default Footer;
