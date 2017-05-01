import Header from '../components/Header'
import Navbar from '../components/Navbar'


const AboutPage = () => (
  <div>
    <Header/>
    <Navbar/>
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <div className="container">
              About
            </div>
          </h1>
        </div>
      </div>
    </section>
  </div>
)

AboutPage.getInitialProps = async function() {

  return {
  }
}

export default AboutPage
