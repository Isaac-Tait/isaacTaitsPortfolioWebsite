import { Link, routes } from '@redwoodjs/router'

import Footer from '../../components/Footer'

import logo from './mtntpcdng_lg.png'
import picture from './profile.jpg'
import tokyo from './tokyoBay.jpg'

const AboutPage = () => {
  return (
    <div className="heropattern-kiwi-blue-100 h-screen overflow-y-hidden">
      {/* Header */}
      <div className="mx-8 md:w-1/2 md:flex md:justify-center md:mx-auto">
        <Link to={routes.home()} className="mx-6">
          <img src={logo} alt="mtntpcdng" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mx-4 mb-4">
        <div className="px-2 h-1/2 bg-indigo-100 overflow-y-scroll mt-4 rounded-sm ml-20 static">
          <h3 className="font-medium text-2xl text-white tracking-wide text-center bg-indigo-500 rounded-lg mx-auto absolute -mt-4 -ml-4 px-1">
            About Me
          </h3>
          <p className="mt-6 pl-32">
            Greetings and salutations! Welcome to{' '}
            <span className="font-mono">
              mountainTopCoding(
              <span role="img" aria-label="mountain with snow-cap">
                &#127956;
              </span>
              );
            </span>{' '}
            a portfolio for web based creations. I am glad you are here.
          </p>
          <p className="mt-2 pl-32">
            My journey to becoming a web developer started on March 12, 2019
            when I kicked off for my first web development course on Codecademy.
            However, to fully grasp my genesis as a web designer, creator,
            hacker - I have to go back a little further than that...
          </p>
          <img
            src={picture}
            alt="Isaac Tait's profile"
            className="h-60 w-80 m-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2 pl-32">
            On January 1, 2017 my son Tadashi was born in Fukushima Prefecture,
            Japan. On September 1, 2017 my wife and I legally became his
            parents. As he grew older I realized that the day was approaching
            when he would go off to school and my full time responsibilities as
            a stay-at-home dad would come to an end, and that I would need to
            find a job.
          </p>
          <img
            src={tokyo}
            alt="Isaac and Tadashi looking over Tokyo Bay"
            className="h-100 w-80 m-4 rounded-lg shadow-lg mx-auto"
          />
          <p className="mt-2">
            When I first learned to ski I lamented the fact that I had not
            discovered skiing sooner in life. A similar feeling of lost time
            overcame me when I first started learning web development. In a way
            though perhaps it was a good thing because I felt that I had to make
            up for lost time and so I pushed myself to discover and learn all
            that I could about web development.
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
        {/* Column Two */}
        <div className="mt-10">
          <h1 className="font-medium text-gray-600 text-2xl px-10 mb-10">
            A cool quote from a cool individual that I think is cool and that I
            hope you will think is cool too{' '}
            <span className="underline">and</span> by default will make you
            think that I too am cool&nbsp;... ~{' '}
            <span className="italic">Cool Person</span>
          </h1>
          <div className="h-1/2 bg-indigo-200 rounded-sm px-8">
            <h3 className="font-medium text-2xl text-white tracking-wide text-center bg-indigo-500 rounded-lg mx-auto absolute -mt-4 -ml-10 px-1">
              Authorpreneur
            </h3>
            <p className="text-center pt-6">
              Ever since I was a child I have loved writing. I published my
              first book when I was six. Coding is a new avenue for me to
              express myself via the human method of communication known as
              writing. However, what if I could combine writing code with
              publishing the novel that I have been writing for over a decade? I
              experimented with many different options over the years but
              recently I have settle on{' '}
              <a
                href="https://ghost.org/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:decoration-wavy"
              >
                Ghost CMS
              </a>
            </p>
            <p className='mt-4 text-center'>
              Ghost CMS is pretty cool because they put a lot of effort
              empowering their users to benefit from and most importantly own
              their content.
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
