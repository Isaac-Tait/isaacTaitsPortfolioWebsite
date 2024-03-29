import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/blog" page={BlogPage} name="blog" />
      <Route path="/trails" page={TrailsPage} name="trails" />
      <Route path="/resume" page={ResumePage} name="resume" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
