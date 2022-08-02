import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* don't use <a></a> tag to stop reloading of page but use link */}
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
