import { Tab } from '@headlessui/react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Link, routes } from '@redwoodjs/router'

import Footer from '../../components/Footer'

import logo from './mtntpcdng_lg.png'
import picture from './profile.jpg'
import tokyo from './tokyoBay.jpg'

export default function AboutPage() {
  var Carousel = require('react-responsive-carousel').Carousel
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="md:w-1/2 md:mx-auto">
        <Link to={routes.home()} className="mx-6">
          <img src={logo} alt="mtntpcdng" />
        </Link>
      </div>

      <div className="flex-1 px-2">
        <Tab.Group>
          <Tab.List className="bg-blue-100 max-w-7xl mx-auto flex justify-between font-semibold text-sm md:text-lg px-6 text-gray-700 rounded-xl">
            <Tab className="hover:bg-blue-400 rounded-xl px-2 hover:text-white">
              Photos
            </Tab>
            <Tab className="hover:bg-blue-400 rounded-xl px-2 hover:text-white">
              Background
            </Tab>
            <Tab className="hover:bg-blue-400 rounded-xl px-2 hover:text-white">
              Authorpreneur
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* Tab One (1) */}
            <Tab.Panel>
              <div className="max-w-4xl mx-auto pb-4">
                <Carousel showArrows={true} showThumbs={true} className="mt-3">
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671572304/Portfolio/IMG_9814_vt4md3.jpg"
                      width={550}
                      height={500}
                      alt="nordic skiing with my son in Vermont"
                    />
                    <p className="legend">
                      Nordic skiing with my son at Prospect Mountain in
                      Bennington Vermont ~ 2022
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671575929/Portfolio/P6100006_yvdawo.jpg"
                      width={550}
                      height={500}
                      alt="marine corps days"
                    />
                    <p className="legend">
                      My brother from another mother and me - motivated Non
                      Commissioned Officers in the US Marine Corps ~ 2008
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671574866/Portfolio/IMG_8654_fhfawp.jpg"
                      width={550}
                      height={500}
                      alt="tankerhoosen river ct"
                    />
                    <p className="legend">
                      Tankerhoosen River in Connecticut ~ 2022
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671574865/Portfolio/IMG_9405_deywfo.jpg"
                      width={550}
                      height={500}
                      alt="my friend landon and his mother"
                    />
                    <p className="legend">
                      My homie and his mother who I have known since I was six ~
                      2022
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671574865/Portfolio/IMG_8707_k6zxiu.jpg"
                      width={550}
                      height={500}
                      alt="A nice lake to fish for Perch"
                    />
                    <p className="legend">
                      Mansfield Hollow Lake Connecticut ~ 2022
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671574863/Portfolio/C56311BD-064C-48D8-A04E-A31BC1D73C19_1_201_a_ntwfof.jpg"
                      width={550}
                      height={500}
                      alt="my buddy Chad and I on a run in DT LA"
                    />
                    <p className="legend">
                      My good friend Chad and I on a run in Downtown Los Angeles
                      ~ 2022
                    </p>
                  </div>
                </Carousel>
              </div>
            </Tab.Panel>

            {/* Tab Two (2) */}
            <Tab.Panel>
              <div className="max-w-6xl mx-auto mt-4 mb-10 text-lg tracking-wide">
                <p
                  className="mt-6 first-line:uppercase first-line:tracking-widest
                        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                        first-letter:mr-3 first-letter:float-left"
                >
                  Greetings and salutations! Welcome to my portfolio, a venue
                  for my web based creations. I am glad you are here.
                </p>
                <p className="mt-4">
                  My journey to becoming a web developer started on March 12,
                  2019 when I kicked off my first web development course on
                  Codecademy. However, to fully grasp my genesis as a web
                  designer, creator, hacker - I have to go back a little further
                  than that...
                </p>
                <img
                  src={picture}
                  alt="Isaac Tait's profile"
                  className="h-60 w-80 m-4 rounded-lg shadow-lg mx-auto"
                />
                <p className="mt-2">
                  On January 1, 2017 my son Tadashi was born in Fukushima
                  Prefecture, Japan. On September 1, 2017 my wife and I legally
                  became his parents. As he grew older I realized that the day
                  was approaching when he would go off to school and my full
                  time responsibilities as a stay-at-home dad would come to an
                  end, and that I would need to find a job.
                </p>
                <img
                  src={tokyo}
                  alt="Isaac and Tadashi looking over Tokyo Bay"
                  className="h-100 w-80 m-4 rounded-lg shadow-lg mx-auto"
                />
                <p className="mt-2">
                  When I first learned to ski I lamented the fact that I had not
                  discovered skiing sooner in life. A similar feeling of lost
                  time overcame me when I first started learning web
                  development. In a way though perhaps it was a good thing
                  because I felt that I had to make up for lost time and so I
                  pushed myself to discover and learn all that I could about web
                  development.
                </p>
                <p className="mt-2">
                  Since my journey as a web developer began I have had a lot of
                  fun building some cool apps (IMHO) and created some fun
                  projects. This website is a venue for those endeavors. So,
                  stay for a while, poke around a bit, or follow me on&nbsp;
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
                  &nbsp;to keep abreast of my future projects and upward
                  trajectory. Cheers!
                </p>
              </div>
            </Tab.Panel>

            {/* Tab Three (3) */}
            <Tab.Panel>
              <div className="max-w-6xl mx-auto mt-4 mb-10 text-lg tracking-wide">
                <p
                  className="pt-6 first-line:uppercase first-line:tracking-widest
                          first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                          first-letter:mr-3 first-letter:float-left"
                >
                  Ever since I was a child I have loved writing. I published my
                  first book when I was six. As I grew older I never lost my
                  love of writing. You can check out my{' '}
                  <a
                    href="https://isaac-tait.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-4 hover:decoration-pink-500"
                  >
                    writing vitae here
                  </a>
                  . When I started down the path as a web developer I discovered
                  that I loved to write code and for years it is what I focused
                  the lion-share of my energies on. As my coding progressed so
                  did my direction for my vision of myself as a web developer.
                </p>
                <p className="mt-4">
                  Early on in my studies I thought I wanted to be a full stack
                  web developer. However, after learning MongoDB, working with
                  JSON requests, and various APIs I realized that my passion did
                  not lie in the backend of web development. I then shifted to
                  the front end and human centered design. I felt more
                  comfortable in that space of web development. I adopted
                  TailwindCSS early on, back when it was version 1.0. However,
                  my CSS skills were pretty rough. Then I started{' '}
                  <a
                    href="https://css-for-js.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-4 hover:decoration-pink-500"
                  >
                    Josh Comeau&#39;s course &quot;CSS For JS&quot;
                  </a>
                  .&nbsp;Suddenly I was able to understand, troubleshoot, and
                  solve CSS mysteries that before I had just bumbled my way
                  through writing random snippets of code until it worked the
                  way I was hoping.
                </p>
                <p className="mt-2">
                  Armed with my new CSS knowledge and fueled by my passion to
                  write I stepped into a new chapter of my web development
                  story. I took a giant leap and decided to publish my novel
                  using{' '}
                  <a
                    href="https://ghost.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:decoration-wavy hover:underline-offset-2 hover:decoration-pink-500"
                  >
                    Ghost CMS
                  </a>
                  .
                </p>
                <p className="my-4">
                  I think that Ghost CMS is a great tool. Normally their
                  platform is used for bloggers but after I built my own custom
                  theme it became the perfect solution to manage my growing user
                  base and most importantly keep me in control of my content.
                  So, without further ado check out the link to my novel
                  below...
                </p>
                <p className="text-center italic font-light text-sm pb-2">
                  This image is the link
                  <span role="img" aria-label="finger pointing down">
                    &#128071;
                  </span>
                </p>
                <a
                  href="https://www.wormwoodsaga.com"
                  target="_blank"
                  className="w-full mx-auto"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1671576188/Portfolio/Wormwood_Saga_fsmufv.jpg"
                    width={300}
                    className="md:w-1/4 mx-auto border-dotted border-2 border-black p-1"
                    alt="my novel"
                  />
                </a>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
