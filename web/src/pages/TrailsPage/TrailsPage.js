import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from '../../components/Footer'

import logo from './mtntpcdng_lg.png'

const TrailsPage = () => {
  return (
    <div className="bg-blue-200">
      <MetaTags title="Trails" description="Trails page" />
      {/* Header */}
      <div className="md:w-1/2 md:mx-auto">
        <Link to={routes.home()} className="mx-6">
          <img src={logo} alt="mtntpcdng" />
        </Link>
      </div>
      <div className="heropattern-topography-blue-300 md:max-w-5xl mx-auto h-screen overflow-auto pb-10">
        <h1 className="font-bold text-3xl text-center py-8">Trails and Maps</h1>

        <h4 className="text-xl px-2 md:px-20">Richard Goodwin Trail</h4>
        <p className="px-4 md:px-28">
          A 12.5-13 mile long trail that starts in{' '}
          <a
            href="https://goo.gl/maps/afZef5T3MuM7eQhJ7"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            East Lyme here
          </a>
          &nbsp;and finishes in{' '}
          <a
            href="https://goo.gl/maps/JK3eWnhSjUmSVVA8A"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            East Haddam here
          </a>
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">Hartman Park</h4>
        <p className="px-4 md:px-28">
          A wonderful area with a few lakes, several large boulder fields, and
          some steep hills to boot. There are several parking areas along Gungy
          Road{' '}
          <a
            href="https://goo.gl/maps/LAXPJUUD47iqatrBA"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            but this one is the best
          </a>
          . There is a nice trail map kiosk at the trail-head to help get you
          oriented.
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">
          Ridge Top North Preserves
        </h4>
        <p className="px-4 md:px-28">
          A vast network of trails spanning three different preserves -
          Johnston, Jewett, and Pleasant Valley. There are several trail-heads
          (ordered by favorite).{' '}
          <a
            href="https://goo.gl/maps/L3gTrM7Y7hDgg9Ns5"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            Trailhead One
          </a>{' '}
          --&nbsp;
          <a
            href="https://goo.gl/maps/ZLD4uanoRGJowW169"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            Trailhead Two
          </a>{' '}
          --&nbsp;
          <a
            href="https://goo.gl/maps/8QfbyocP3aYS9bqJ7"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            Trailhead Three
          </a>
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">Rocky Neck State Park</h4>
        <p className="px-4 md:px-28">
          A relative small collection of trails but many lead you to the beach
          with a nice board walk. Parking can be found along Route 156{' '}
          <a
            href="https://goo.gl/maps/ciXbqEhYEufwGz168"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            across from the KOA
          </a>
          .
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">
          Oswegatchie Hills Nature Preserve
        </h4>
        <p className="px-4 px-2 md:px-28">
          Located in Niantic there are some impressive rock formations and a few
          great overlooks that afford views of the Niantic River watershed.{' '}
          <a
            href="https://www.oswhills.org"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            More info including trail-head locations can be found here
          </a>
          .
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">
          Devil&#39;s Hopyard State Park
        </h4>
        <p className="px-4 px-2 md:px-28">
          This park is quite amazing with a large waterfall, a fairly large
          network of trails, and the picturesque 8 Mile River that flows through
          the center of the park.{' '}
          <a
            href="https://goo.gl/maps/jur4FyBhyvBPyCvk8"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            Definitely worth a visit
          </a>
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">Airline Trail</h4>
        <p className="px-4 md:px-28">
          This trail used to be a railroad. It stretches for over 35 miles with
          dozens upon dozens of road crossings.
          <a
            href="https://goo.gl/maps/99qirSa6fbFzcYjJ9"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            {' '}
            This one is the closest to home
          </a>
          . The portion of the trail that travels through the Salmon River State
          Forest is probably my favorite section.
        </p>
        <h4 className="text-xl px-2 md:px-20 pt-8">GIS Map of Montville</h4>
        <p className="px-4 md:px-28">
          Zoom in and you can see your{' '}
          <a
            href="https://www.axisgis.com/montvillect/"
            target="_blank"
            className="text-orange-600 underline decoration-wavy underline-offset-4 hover:decoration-violet-600 hover:rounded-xl hover:decoration-none hover:text-violet-600"
            rel="noreferrer"
          >
            property lines
          </a>{' '}
          and the adjacent properties. Kinda cool...
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default TrailsPage
