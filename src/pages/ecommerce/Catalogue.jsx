import {productData} from '../../components/ecommerce/catalogueData'

function Catalogue() {
  return (
    <>
     <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="product-nav-wrapper row">
                <div className="col-lg-4 col-md-5">
                  <ul className="nav product-filter-nav">
                    <li className="active"><a href="!#" onClick={event => event.preventDefault()}>BEST SELLERS</a></li>
                    <li><a href="!#" onClick={event => event.preventDefault()}>FEATURED</a></li>
                    <li><a href="!#" onClick={event => event.preventDefault()}>SALES</a></li>
                  </ul>
                </div>
                <div className="col-lg-8 col-md-7 product-filter-options">
                  <ul className="account-user-info ms-auto">
                    <li><a href="!#" onClick={event => event.preventDefault()}>My Account</a></li>
                    <li><a href="!#" onClick={event => event.preventDefault()}>Wishlist</a></li>
                  </ul>
                  <ul className="account-user-link d-none d-lg-block">
                    <li><a href="!#" onClick={event => event.preventDefault()}>Login</a></li>
                    <li><a href="!#" onClick={event => event.preventDefault()}>Register</a></li>
                  </ul>
                  <ul className="account-user-actions">
                    <li><a href="!#" onClick={event => event.preventDefault()}><i className="mdi mdi-magnify"></i></a></li>
                    <li>
                      <a href="!#" onClick={event => event.preventDefault()}><i className="mdi mdi-cart"></i>
                        <div className="badge badge-pill badge-primary">0</div>
                      </a>
                    </li>
                    <li><a href="!#" onClick={event => event.preventDefault()}>$0.00</a></li>
                  </ul>
                </div>
              </div>
              <div className="row product-item-wrapper">
                  {productData.map((data,id) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 product-item" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="action-holder">
                        {data.new && <div className="sale-badge bg-gradient-success">New</div>}
                        <span className="favorite-button"><i className="mdi mdi-heart-outline"></i></span>
                      </div>
                      <div className="product-img-outer">
                          <img className="product_image" src={data.image} alt={data.title} />
                      </div>
                      <p className="product-title">{data.title}</p>
                      <p className="product-price">${data.salepice}</p>
                      <p className="product-actual-price">${data.ogprice}</p>
                      <ul className="product-variation">
                        {data.variants.map(variant => (
                          <li key={variant}><a href="!#" onClick={event => event.preventDefault()}>{variant}</a></li>
                        ))}
                      </ul>
                      <p className="product-description">{data.description}</p>
                    </div>
                  </div>
                </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Catalogue