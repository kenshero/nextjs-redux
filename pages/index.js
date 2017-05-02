import Header from '../components/Header'
import Navbar from '../components/Navbar'


const IndexPage = () => (
  <div>
    <Header/>
    <Navbar/>
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <div className="container">
              HomePage
            </div>
          </h1>
        </div>
      </div>
    </section>
    <br/>
    <br/>
    <div className="container">
      <FormInput/>
      <br/>
      <br/>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            {
              // this.products.map((product, index) => (
              //   <tr key={index}>
              //     <td>{index}</td>
              //     <td>image</td>
              //     <td>{ product.name }</td>
              //     <td>{ product.price }</td>
              //     <td>{ product.category }</td>
              //     <td>
              //       <a className="button is-danger" onClick={ (e) => this.onDeleteProduct(e, product._id) }>Delete</a>
              //     </td>
              //   </tr>
              // ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

const FormInput = () => {
  return (
    <div>
      <div className="field is-horizontal product-name">
        <div className="field-label is-medium">
          <label className="label">Product</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="name" />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-price">
        <div className="field-label is-medium">
          <label className="label">Price</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="number" placeholder="xxxx" />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-category">
        <div className="field-label is-medium">
          <label className="label">Category</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="separate by ',' comma" />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal product-image">
        <div className="field-label is-medium">
          <label className="label">Images : </label>
        </div>
        <div className="field-body">
          <div className="field">
            <input className="is-medium" type="file" />
          </div>
        </div>
      </div>
      <br/>
      <div className="field">
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
      </div>
    </div>
  )
}

IndexPage.getInitialProps = async function() {

  return {
  }
}

export default IndexPage
