import { Map, Marker } from "pigeon-maps"

function VectorMap() {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Vector maps </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Maps</a></li>
            <li className="breadcrumb-item active" aria-current="page">Vector maps</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pigeon Maps</h4>
              <div className="map-dimension">
                <Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                  <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VectorMap