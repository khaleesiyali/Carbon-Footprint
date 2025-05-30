import {Button, Form, Pagination} from 'react-bootstrap'
import {searchData} from '../../components/search-results/searchData'

function Searchresults() {

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Search results
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>General pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">Search results</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <form action="#">
                    <Form.Group className="search-field">
                      <Form.Control type="text" placeholder="Search Here" className="h-auto" defaultValue="Bootstrapdash" />
                      <Button variant="gradient-primary" type="submit" className="ms-3"> Search </Button>
                    </Form.Group>
                  </form>
                </div>
                <div className="col-12 mb-5">
                  <h2>Search Result For<u className="ms-2">"Bootstrapdash"</u></h2>
                  <p className="text-muted">About 12,100 results (0.52 seconds)</p>
                </div>
                  {searchData.map((data, id) => (
                <div className="col-12 results" key={id}>
                    <div className="pt-4 border-bottom">
                    <a className="d-block h4 text-light" href="!#" onClick={event => event.preventDefault()}>{data.title}</a>
                    <a className="page-url text-primary" href="!#" onClick={event => event.preventDefault()}>{data.link}</a>
                    <p className="page-description mt-1 w-75 text-muted">{data.meta}</p>
                  </div>
                </div>
                  ))}
                <div className="col-12" aria-label="Page navigation">
                  <ul className="pagination mt-5">
                    <Pagination>
                      <Pagination.Prev/>
                        {items}
                      <Pagination.Next/>
                    </Pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchresults