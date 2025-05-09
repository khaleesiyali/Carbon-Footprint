import {newsData} from '../../components/newsgrid/newsData'

function Newsgrid() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          News grid
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">News grid</li>
          </ol>
        </nav>
      </div>
      <div className="card-columns">
        {newsData.map((data, id) => (
          <div className="card" key={id}>
          <img className="card-img-top" src={data.img} alt={data.title.slice(0,5)} />
          <div className="card-body">
            <h4 className="card-title mt-3">{data.title}</h4>
            <p className="card-text">{data.description}</p>
          </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default Newsgrid