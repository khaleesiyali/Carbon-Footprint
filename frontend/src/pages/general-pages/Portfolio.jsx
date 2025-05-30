import {portfolioData} from '../../components/portfolio/portfolioData'

function Portfolio() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Portfolio
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="row portfolio-grid">
                    {portfolioData.map((data, id) => (
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" key={id}>
                      <figure className="effect-text-in">
                        <img src={data.img} alt="portfolio"/>
                        <figcaption>
                          <h4>{data.title}</h4>
                          <p>{data.desc}</p>
                        </figcaption>
                      </figure>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio