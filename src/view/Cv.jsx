import React, { Component } from "react";

export default class App extends Component {
  state = {
    isVisible: true,
  };

  handeleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div>
        <div className="grid grid-cols-9">
          <div></div>
        </div>
        {this.state.isVisible ? (
          <Greeting
            name=<section class="bg-gray-900 text-white">
              <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 20"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="font-serif">Profile</p>
                <button onClick={this.handeleClick}></button>

                <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">History School</h2>

                      <p class="mt-1 text-sm text-gray-300">
                        <ol>
                          <li>• SD</li>
                          <li>• SMP</li>
                          <li>• SMK</li>
                        </ol>
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="w-6 h-6 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">Device yang di gunakan</h2>

                      <p class="mt-1 text-sm text-gray-300">
                        <ol>
                          <li>• Laptop</li>
                          <li>• Handphone</li>
                          <li>• Komputer</li>
                        </ol>
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="w-6 h-6 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">Penguasaan</h2>

                      <p class="mt-1 text-sm text-gray-300">
                        <ol>
                          <li>• HTML</li>
                          <li>• CSS</li>
                          <li>• JavaScript</li>
                        </ol>
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="w-6 h-6 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p class="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="w-6 h-6 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">
                        Yang Masih Di Tingkatkan
                      </h2>

                      <p class="mt-1 text-sm text-gray-300">
                        <ol>
                          <li>• JAVA</li>
                          <li>• Tailwind</li>
                        </ol>
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <span class="flex-shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        class="w-6 h-6 dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </span>

                    <div class="ml-4">
                      <h2 class="text-lg font-bold">App Yang Di Gunakkan</h2>

                      <p class="mt-1 text-sm text-gray-300">
                        <ol>
                          <li>• VSCode</li>
                          <li>• Inteleji</li>
                          <li>• MySqlyog</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          />
        ) : null}
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1> {this.props.name}</h1>;
  }
}
