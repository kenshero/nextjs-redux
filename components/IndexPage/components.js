import store from '../../store'

import { InputField } from '../Common/components'
import Header from '../Header'
import Navbar from '../Navbar'

const IndexPage = (props) => {
  const { actions, count, indexStore } = props;
  return (
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
      <div className="field">
        <button className="button is-primary" onClick={actions.increment} >+</button>
        <span> {count} </span>
        <button className="button is-primary" onClick={actions.decrement} >-</button>
      </div>
        <FormInput props={props} actions={props.actions}/>
        <br/>
        <ListItem props={props}/>
      </div>
    </div>
  )
}

const FormInput = ({props, actions}) => {
  return (
    <div>
      <div className="field is-horizontal product-name">
        <div className="field-label is-medium">
          <label className="label">Product</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <InputField
                  name="productName"
                  onChange={(e, val) => actions.onChangeProductName(e, val)}
                  value={props.productName}
                  className="input is-medium"
                  placeholder='name'
              />
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
              <InputField
                  name="productPrice"
                  onChange={(e, val) => actions.onChangeProductPrice(e, val)}
                  value={props.productPrice}
                  className="input is-medium"
                  placeholder='xxxx'
              />
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
              <input className="input is-medium" type="text" placeholder="separate by ',' comma" value={props.productCategory}/>
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
          <button className="button is-primary" onClick={actions.onSubmitProduct}>Submit</button>
        </p>
      </div>
    </div>
  )
}

const ListItem = ({props}) => {
  console.log(props);
  return (
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
            props.products.map((product, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>image</td>
                <td>{ product.productName }</td>
                <td>{ product.productPrice }</td>
                <td>{ product.productCategory }</td>
                <td>
                  <a className="button is-danger" onClick={ (e) => this.onDeleteProduct(e, product._id) }>Delete</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default IndexPage
