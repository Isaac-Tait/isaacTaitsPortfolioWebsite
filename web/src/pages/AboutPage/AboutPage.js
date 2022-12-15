import { Link, routes } from '@redwoodjs/router'

import Footer from '../../components/Footer'

import logo from './mtntpcdng_lg.png'
import picture from './profile.jpg'
import tokyo from './tokyoBay.jpg'

const AboutPage = () => {
  return (
    <div>
      <div className="mx-8 md:w-1/2 md:flex md:justify-center md:mx-auto">
        <Link to={routes.home()} className="mx-6">
          <img src={logo} alt="mtntpcdng" />
        </Link>
      </div>
      <div className="text-lg w-1/3 flex">
        <div className="mx-4 mb-4">
          <div className="px-2 h-1/2 bg-indigo-100 overflow-y-scroll mt-4 rounded-sm ml-20">
            <p className="font-medium text-2xl text-blue-500 tracking-wide text-center bg-pink-300 -pt-4 w-1/3 rounded-lg mx-auto">
              About Me
            </p>
            <p className="mt-2">
              Hello, and welcome to{' '}
              <span className="font-mono">
                mountainTopCoding(
                <span role="img" aria-label="mountain with snow-cap">
                  &#127956;
                </span>
                );
              </span>{' '}
              my portfolio webpage that I built using Jamstack solutions. I am
              glad you are here.
            </p>
            <p className="mt-2">
              My journey to becoming a web developer started on March 12, 2019
              but to fully understand my story I have to go back a little
              further than that...
            </p>
            <img
              src={picture}
              alt="Isaac Tait's profile"
              className="h-60 w-80 m-4 rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-2">
              On January 1, 2017 my son Tadashi Ethan Tait was born in Fukushima
              Prefecture, Japan. On September 1, 2017 my wife and I legally
              became his parents. As he grew older I realized that the day was
              approaching when he would go off to school and my full time
              responsibilities as a stay-at-home dad would come to an end, and
              that I would need to find a job.
            </p>
            <img
              src={tokyo}
              alt="Isaac and Tadashi looking over Tokyo Bay"
              className="h-100 w-80 m-4 rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-2">
              In 2012 when I first learned to ski I lamented the fact that I had
              not discovered skiing sooner in life. A similar feeling of lost
              time overcame me when I first started learning web development. In
              a way though perhaps it was a good thing because I felt that I had
              to make up for lost time and so I pushed myself to discover and
              learn all that I could about web development.
            </p>
            <p className="mt-2">
              Since my journey as a web developer began I have had a lot of fun
              building some cool apps (IMHO) and created some fun projects. This
              website is a venue for those endeavors. So, stay for a while, poke
              around a bit, or follow me on&nbsp;
              <a
                href="https://twitter.com/Isaac_Tait_83"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Twitter
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/Isaac-Tait"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>
              &nbsp;to keep abreast of my future projects and upward trajectory.
              Cheers!
            </p>
          </div>
          <div className="h-1/3 bg-indigo-200 mt-4 ">
            <p>
              Ever since I was a child I have enjoyed writing. I published my
              first book when I was six titled{' '}
              <span className="italic">
                &quot;Eat Your Greenbeans and You Will Be Strong Like Mimi&quot;
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
