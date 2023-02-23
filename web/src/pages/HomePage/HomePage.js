import { Link, routes } from '@redwoodjs/router'

import Footer from '../../components/Footer'

import campFire from './campFire.png'
import compass from './compass.png'
import fishing from './fishing.png'
import guitar from './guitar.png'
import hikingBoots from './hikingBoots.png'
import map from './map.png'
import Logo from './mtntpcdng_lg.png'
import tent from './tent.png'

const HomePage = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn')
      } else {
        entry.target.classList.remove('animate-fadeIn')
      }
    })
  }

  const observer = new IntersectionObserver(callback)

  const targets = document.querySelectorAll('.js-show-on-scroll')
  targets.forEach(function (target) {
    target.classList.add('opacity-0')
    observer.observe(target)
  })

  return (
    <div>
      {/*Block One*/}
      <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-col justify-center content-center bg-blue-100">
        <img
          src={Logo}
          alt="Mountain Top Coding Logo"
          className="w-1/2 flex justify-center mx-auto"
        />
        <div className="w-full flex justify-center absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/*Block Two*/}
      <div className="rounded-lg shadow-lg mb-2 h-screen flex flex-wrap content-center bg-blue-200">
        <p className="font-semibold text-xl md:text-5xl w-1/2 justify-center mx-auto">
          Hello{' '}
          <span role="img" aria-label="waving hand">
            &#128075;
          </span>
          ,&nbsp;my name is&nbsp;
          <span className="text-blue-500">Isaac Tait</span>&nbsp;- a Jamstack
          web developer who loves the outdoors.
          <div className="h-64 w-64 bg-blue-300 rounded-full -mt-48 -ml-8"></div>
        </p>
      </div>

      {/*Block Three*/}
      <div className="rounded-lg shadow-lg mb-2 w-full h-screen flex bg-blue-300 md:text-base">
        {/* A cool idea... need to figure out how to center everything one on top of the other...
        <div className="grid grid-cols-3 gap-2 justify-center mx-auto my-auto inset-0 items-center">
          <div className="h-32 w-20 bg-blue-50 rounded-3xl ml-10"></div>
          <div className="h-32 w-32 bg-blue-100 rounded-tl-full"></div>
          <div className="h-32 w-32 bg-blue-200 rounded-r-2xl"></div>
          <div className="h-32 w-32 bg-blue-400 rounded-l-full"></div>
          <div className="h-32 w-32 bg-blue-500 rounded-t-xl"></div>
          <div className="h-32 w-32 bg-blue-600 rounded-br-3xl"></div>
          <div className="h-28 w-28 bg-blue-700 rounded-full ml-4"></div>
          <div className="h-28 w-28 bg-blue-800 rounded-full ml-4"></div>
          <div className="h-28 w-28 bg-blue-900 rounded-full ml-4"></div>
        </div>
        */}
        <div className="flex flex-col justify-between grow md:grid grid-cols-4 md:gap-2 mx-auto">
          {/* About Me */}
          <div className="flex justify-center mt-20">
            <p className="z-50 md:mt-40 tracking-wide font-bold">
              {/*
              <span role="img" aria-label="ufo flying saucer">
                &#128760;{' '}
              </span>
              */}
              <Link
                to={routes.about()}
                className="text-white hover:bg-blue-500 hover:text-white p-1 rounded-sm"
              >
                About
              </Link>
              &nbsp;me
            </p>
            <div className="w-24 h-24 bg-blue-200 rounded-3xl mt-32 -ml-8 hidden md:block"></div>
          </div>
          {/* OG */}
          <div className="flex justify-center md:flex-col md:items-center md:justify-between">
            <div className="w-20 h-20 bg-blue-200 rounded-2xl mt-16 -mr-16 hidden md:block"></div>
            <p className="items-start tracking-wide font-bold z-0">
              The OG{' '}
              <a
                href="https://mountaintopcoding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-blue-500 hover:text-white p-1 rounded-sm"
              >
                mountainTopCoding(
                <span role="img" aria-label="mountain with snow-cap">
                  &#127956;
                </span>
                );
              </a>
            </p>
            <div className="h-24 w-24 bg-blue-200 rounded-full -mt-20 hidden md:block"></div>
            <div className="h-16 w-20 bg-blue-200 rounded-2xl mb-16 ml-16 hidden md:block"></div>
          </div>
          {/* Resume */}
          <div className="flex justify-center md:flex-col md:items-center md:justify-between">
            <div className="h-20 w-20 bg-blue-200 rounded-full mt-20 hidden md:block"></div>
            <p className="md:mt-40 tracking-wide font-bold">
              My{' '}
              <a
                href="https://mountaintop-coding.s3.us-west-1.amazonaws.com/Isaac_Tait_Resume_Portfolio.pdf"
                rel="noopener noreferrer"
                className="text-white hover:bg-blue-500 hover:text-white p-1 rounded-sm"
              >
                resume
              </a>
            </p>
            <div className="h-16 w-20 bg-blue-200 rounded-2xl mb-32 hidden md:block"></div>
          </div>
          {/* Starship for Sale */}
          <div className="flex justify-center md:flex-col md:justify-end ">
            <div className="h-40 w-40 bg-blue-200 rounded-full mb-32 mx-auto hidden md:block"></div>
            <p className="mb-40 tracking-wide font-bold">
              A fun side project{' '}
              <a
                href="https://starshipfor.sale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-blue-500 hover:text-white p-1 rounded-sm"
              >
                Starship For Sale
              </a>
            </p>
          </div>
        </div>
      </div>

      {/*Block Four*/}
      <div className="rounded-lg shadow-lg mb-2 h-screen grid grid-cols-1 md:grid-cols-7 heropattern-topography-blue-500 pb-2">
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        {/*I Love To Fish*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-12 md:ml-0">
          <a
            href="https://iloveto.fish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded">
              I love to fish
            </div>
            <img src={fishing} alt="fish on!" className="mx-auto" />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*VW Site*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-24 md:ml-0.5">
          <a
            href="https://vwtypetwo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded">
              VW Type Two
            </div>
            <img src={compass} alt="never get lost" className="mx-auto" />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*GitHub*/}
        <div className="relative box-content w-12 md:w-28 my-auto ml-36 md:ml-0">
          <a
            href="https://github.com/Isaac-Tait"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded">
              GitHub
            </div>
            <img
              src={campFire}
              alt="a lovely crackling campfire"
              className="mx-auto"
            />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*Royal Ridges*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-48 md:ml-0">
          <a
            href="https://royalridges.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded px-1">
              Royal Ridges Retreat
            </div>
            <img src={guitar} alt="music to my ears" className="mx-auto" />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*Gravel Cycling*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-48 md:ml-0">
          <a
            href="https://macadamgrinding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded px-1">
              Gravel Cycling
            </div>
            <img src={map} alt="a map over a map..." className="mx-auto" />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*Linkedin*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-60 md:ml-0">
          <a
            href="https://www.linkedin.com/in/isaacmtait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded">
              LinkedIn Profile
            </div>
            <img src={tent} alt="home away from home" className="mx-auto" />
          </a>
        </div>

        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>
        <div className="hidden md:block box-content h-12 w-12 md:h-32 md:w-32 p-4"></div>

        {/*Blog*/}
        <div className="relative box-content w-12 md:w-32 my-auto ml-72 md:ml-0">
          <a
            href="https://blog.mountaintopcoding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center absolute inset-0 opacity-0 hover:opacity-100 duration-300 flex justify-center items-center text-xl text-white hover:bg-blue-400 rounded">
              My Blog
            </div>
            <img
              src={hikingBoots}
              alt="lace up those boots and hit the trail"
              className="mx-auto"
            />
          </a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
