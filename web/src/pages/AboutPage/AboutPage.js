import { Link, routes } from '@redwoodjs/router'

import Footer from '../../components/Footer'

import logo from './mtntpcdng_lg.png'
import picture from './profile.jpg'
import tokyo from './tokyoBay.jpg'

const AboutPage = () => {
  return (
    <div className="heropattern-kiwi-blue-100 h-screen md:overflow-y-hidden">
      {/* Header */}
      <div className="mx-8 md:w-1/2 md:flex md:justify-center md:mx-auto">
        <Link to={routes.home()} className="mx-6">
          <img src={logo} alt="mtntpcdng" />
        </Link>
      </div>

      <div className="md:grid grid-cols-2 gap-4 md:mx-4 mb-4">
        <div className="md:ml-20 px-2 bg-indigo-100 overflow-y-scroll mt-4 rounded-sm mx-2 static ">
          <div>
            <h3 className="font-medium text-2xl text-white tracking-wide bg-indigo-500 rounded-lg absolute -mt-4 md:-ml-4 px-1">
              Background
            </h3>
          </div>
          <div className="pt-1">
            <p
              className="mt-6 first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Greetings and salutations! Welcome to{' '}
              <span className="font-mono">
                mountainTopCoding(
                <span role="img" aria-label="mountain with snow-cap">
                  &#127956;
                </span>
                );
              </span>{' '}
              a portfolio for my web based creations. I am glad you are here.
            </p>
            <p className="mt-4">
              My journey to becoming a web developer started on March 12, 2019
              when I kicked off my first web development course on Codecademy.
              However, to fully grasp my genesis as a web designer, creator,
              hacker - I have to go back a little further than that...
            </p>
            <img
              src={picture}
              alt="Isaac Tait's profile"
              className="h-60 w-80 m-4 rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-2">
              On January 1, 2017 my son Tadashi was born in Fukushima
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
              When I first learned to ski I lamented the fact that I had not
              discovered skiing sooner in life. A similar feeling of lost time
              overcame me when I first started learning web development. In a
              way though perhaps it was a good thing because I felt that I had
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
        </div>
        {/* Column Two */}
        <div className="mt-10">
          <h1 className="font-medium text-gray-600 text-2xl px-10 mb-10 hidden md:block">
            A cool quote from a cool individual that I think is cool and that I
            hope you will think is cool too{' '}
            <span className="underline">and</span> by default will make you
            think that I too am cool&nbsp;... ~{' '}
            <span className="italic">Cool Person</span>
          </h1>
          {/* Block Number Two */}
          <div className="h-1/2 bg-indigo-200 overflow-y-scroll rounded-sm px-8">
            <h3 className="font-medium text-2xl text-white tracking-wide bg-indigo-500 rounded-lg absolute -mt-4 md:-ml-10 px-1">
              Designer && Authorpreneur
            </h3>
            <p
              className="pt-6 first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
            >
              Ever since I was a child I have loved writing. I published my
              first book when I was six. As I grew older I never lost my love of
              writing. You can check out my{' '}
              <a
                href="https://isaac-tait.github.io/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-4"
              >
                writing vitae here
              </a>
              . When I started down the path as a web developer I discovered
              that I loved to write code and for years it is what I focused the
              lion-share of my energies on. As my coding progressed so did my
              direction for my vision of myself as a web developer.
            </p>
            <p className="mt-4">
              Early on in my studies I thought I wanted to be a full stack web
              developer. However, after learning MongoDB, working with JSON
              requests, and various APIs I realized that my passion did not lie
              in the backend of web development. I then shifted to the front end
              and human centered design. I felt more comfortable in that space
              of web development. I adopted TailwindCSS early on, back when it
              was version 1.0. However, my CSS skills were pretty rough that is
              until I stumbled upon{' '}
              <a
                href="https://css-for-js.dev/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-4"
              >
                Josh Comeau&#39;s course &quot;CSS For JS&quot;
              </a>{' '}
              Suddenly I was able to understand, troubleshoot, and solve CSS
              mysteries that before I had just bumbled my way through writing
              random snippets of code until it worked the way I was hoping.
            </p>
            <p>
              Armed with my new CSS knowledge and fueled by my passion to write
              I stepped into a new chapter of my web development story. I
              published my novel using{' '}
              <a
                href="https://ghost.org/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-2"
              >
                Ghost CMS
              </a>
              .
            </p>
            <p className="mt-4">
              I think that Ghost CMS is an awesome solution to publish my novel.
              Normally their platform is used for bloggers but after I built my
              own custom theme it became the perfect solution to manage my
              growing user base and most importantly keep me in control of my
              content.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage
