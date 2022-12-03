import React from 'react'

function Home() {
  return (
    <section class="relative bg-[url(https://cdn.dribbble.com/users/1658867/screenshots/4721860/wallpaper.png)] bg-cover bg-center bg-no-repeat text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-blue-700 via-blue-500 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Selamat Datang 
  
          <span class="sm:block"> Informasi Data Diri </span>
        </h1>
  
        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
          tenetur fuga ducimus numquam ea!
        </p>
  
        <a
  class="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 no-underline"
  href="/aboutme"
>
  <span class="text-sm font-medium "> INFORMASI ALL </span>

  <svg
    class="ml-3 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
      </div>
    </div>
  </section>
  
  )
}

export default Home