import React from "react";

function AboutMe() {
  return (
    <section class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-11 lg:px-8 bg-gray-900">
          <div class="max-w-3xl">
          </div>
  
          <div class=" mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://media.suara.com/pictures/970x544/2022/08/17/33693-thomas-shelby-instagramtommyshelbyking.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>
  
            <div class="lg:py-16">
              <article class="space-y-4 text-white ">
                <h1>Bio Data Person</h1>
                <p class="font-serif">
                  <ol>
                    <li>Nama: Arya Bachtiar</li>
                    <li>Kota: Semarang</li>
                    <li>Status: Pelajar</li>
                    
                  </ol>
                </p>
  
                <p class="font-serif">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem amet
                  voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                  molestias tempora distinctio voluptates sint! Itaque quasi
                  corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>
        </div>
        </div>
  </section>
  );
}

export default AboutMe;
