import { MetaTags } from '@redwoodjs/web'

const ResumePage = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen bg-indigo-400">
      <MetaTags title="Resume" description="Resume page" />

      <h1 className="text-6xl text-center font-bold text-gray-700">
        Welcome to my Resume Page
      </h1>
      <p className="mt-6 text-center">
        Link to my resume{' '}
        <a
          href="https://mountaintop-coding.s3.us-west-1.amazonaws.com/resume/Isaac's+Tait's+Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:underline hover:text-blue-700"
        >
          here
        </a>
        .
      </p>
    </div>
  )
}

export default ResumePage
