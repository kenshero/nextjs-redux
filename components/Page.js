import Link from 'next/link'
import { connect } from 'react-redux'

export default connect(state => state.clock)(({ title, linkTo, lastUpdate, light }) => {
  return (
    <div>
      <h1>{title}</h1>
      <nav>
        <Link href={linkTo}><a>Navigate</a></Link>
      </nav>
    </div>
  )
})
