import DataTable, {createTheme} from 'react-data-table-component';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

const data = [
{
		id: 1,
		title: 'Beetlejuice',
		director: 'Tim Burton',
		year: '1988',
	},
	{
		id: 2,
		title: 'The Cotton Club',
		director: 'Francis Ford Coppola',
		year: '1984',
	},
	{
		id: 3,
		title: 'The Shawshank Redemption',
		director: 'Frank Darabont',
		year: '1994',
	},
	{
		id: 4,
		title: 'Crocodile Dundee',
		director: 'Peter Faiman',
		year: '1986',
	},
	{
		id: 5,
		title: 'Valkyrie',
		director: 'Bryan Singer',
		year: '2008',
	},
	{
		id: 6,
		title: 'Ratatouille',
		director: 'Brad Bird, Jan Pinkava',
		year: '2007',
	},
	{
		id: 7,
		title: 'City of God',
		director: 'Fernando Meirelles, Kátia Lund',
		year: '2002',
	},
		{
		id: 8,
		title: 'Memento',
		director: 'Christopher Nolan',
		year: '2000',
	},
	{
		id: 9,
		title: 'The Intouchables',
		director: 'Olivier Nakache, Eric Toledano',
		year: '2011',
	},
	{
		id: 10,
		title: 'Stardust',
		director: 'Matthew Vaughn',
		year: '2007',
	},
	{
		id: 11,
		title: 'Apocalypto',
		director: 'Mel Gibson',
		year: '2006',
	},
	{
		id: 12,
		title: 'Taxi Driver',
		director: 'Martin Scorsese',
		year: '1976',
	},
	{
		id: 13,
		title: 'No Country for Old Men',
		director: 'Ethan Coen, Joel Coen',
		year: '2007',
	},
	{
		id: 14,
		title: 'Planet 51',
		director: 'Jorge Blanco, Javier Abad, Marcos Martínez',
		year: '2009',
	},
	{
		id: 15,
		title: 'Looper',
		director: 'Rian Johnson',
		year: '2012',
	},

]

createTheme('dark', {
	background: {
		default: 'transparent',
	},
})

function Datatable() {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">
          Data table
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data Tables</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Data Table</h4>
              <div className="row">
                <div className="col-12">
                  <DataTable
                    columns={columns}
                    data={data}
                    pagination
					theme='dark'
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datatable