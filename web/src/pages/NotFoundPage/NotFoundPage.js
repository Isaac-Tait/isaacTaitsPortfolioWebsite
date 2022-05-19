import { Link, routes } from '@redwoodjs/router'

const notFoundPage = () => {
  return (
  <main>
    <div className="flex flex-col justify-center h-screen bg-blue-500 pl-20">
      <h1 className="text-3xl">404 - Page Not Found</h1>
      <p>Well this is embarrassing...</p>
      <p>It would appear that you have found a page that does not exist. You should go back to the home page.</p>
        <Link to={routes.home()} className="mx-6">
            <p className="text-red-500 underline">Here is a handy link</p>
        </Link>
    </div>
  </main>
  )
}

export default notFoundPage;
