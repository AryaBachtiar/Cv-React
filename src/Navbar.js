import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <header aria-label="Site Header" class="bg-black">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      {/* Logo */}
    <a class="block text-current-600" href="/">
      <span class="sr-only">Home</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    </a>
    {/* end Logo */}

      <div class="hidden md:block">
        <nav aria-label="Site Nav">
          <ul class="flex items-center gap-6 text-sm">
          <li className="nav-item">
          <Link to={'/aboutme'} className="-mb-px border-b border-current p-4 text-cyan-500 no-underline"
  href="/download">
            About Me
          </Link>
        </li>

        <li className="nav-item">
          <Link to={'/cv'} className="-mb-px border-b border-current p-4 text-cyan-500 no-underline"
  href="/download">
            Cv
          </Link>
        </li>
           

        <li className="nav-item">
          <Link to={'/rating'} className="-mb-px border-b border-current p-4 text-cyan-500 no-underline"
  href="/download">
            Rating
          </Link>
        </li>

        <li className="nav-item">
          <Link to={'/contact'} className="-mb-px border-b border-current p-4 text-cyan-500 no-underline"
  href="/download">
            Contact
          </Link>
        </li>
            
          
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        

        <div class="block md:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
