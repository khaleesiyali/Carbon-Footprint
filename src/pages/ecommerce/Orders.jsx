import { Alert, Button } from 'react-bootstrap';
import DataTable, {createTheme} from 'react-data-table-component';

// const Button = () => <button type="button">Download</button>;


const customStyles = {
  headCells: {
    style: {
      backgroundColor: '#b66dff', // Change this to your desired color
      color: 'white',             // Text color
      fontWeight: 'bold',
      textTransform: 'uppercase', // Optional: makes text uppercase
      padding: '15px',
    },
  },
  rows: {
    style: {
			paddingTop: '5px',
      paddingBottom: '5px',
      borderBottom: 'none'
		},
  },
  cells: {
    style: {
      borderRight: '1px solid #ddd',  // Add right border to all cells
    },
  },
  table: {
    style: {
      borderCollapse: 'collapse', // Ensure borders collapse properly
      borderRight: '1px solid #ddd',
      borderLeft: '1px solid #ddd',   // Add border around the entire table
    },
  },
  
};

const columns = [
	{
		name: 'Order #',
		selector: row => row.id,
		sortable: true,

	},
  {
		name: 'Customer',
		selector: row => row.customer,
		sortable: true,
	},
  {
		name: 'Ship To',
		selector: row => row.shipTo,
		sortable: true,
	},
  {
		name: 'Base Price',
		selector: row => row.basePrice,
		sortable: true,
	},
  {
		name: 'Purchased Price',
		selector: row => row.purchasedPrice,
		sortable: true,
	},
  {
		name: 'Status',
		selector: row => row.status,
		sortable: true,
    cell: row => {
      const cellContent = row.status; // Assuming the column is for 'status'
      if (cellContent === 'On hold') {
        return (
          <label className="badge bg-info">On hold</label>
        );
      } else if (cellContent === 'Pending') {
        return (
          <label className="badge bg-danger">Pending</label>
        );
      } else if (cellContent === 'Closed') {
        return (
          <label className="badge bg-success">Closed</label>
        );
      } else if (cellContent === 'Open') {
        return (
          <label className="badge bg-warning">Open</label>
        );
      } else {
        return cellContent; // Default case
      }
    },
	},
  {
		name: 'Action',
		selector: row => row.action,
		grow: 2,
    cell: () => (
      <>
        <Button variant='outline-info p-2'>
          <i className="mdi mdi-eye-outline text-primary me-2"></i>View
        </Button>
        <Button variant='outline-info p-2'>
          <i className="mdi mdi-close text-danger me-2"></i>Remove
        </Button>
      </>
    ),
	},
  
];


const products = [
  {
    id: 'WD-61',
    customer: 'Edinburgh',
    shipTo: 'New York',
    basePrice: '$1500',
    purchasedPrice: '$3200',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-62',
    customer: 'Doe',
    shipTo: 'Brazil',
    basePrice: '$4500',
    purchasedPrice: '$7500',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-63',
    customer: 'Sam',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-64',
    customer: 'Joe',
    shipTo: 'Netherland',
    basePrice: '$1100',
    purchasedPrice: '$7300',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-65',
    customer: 'Edward',
    shipTo: 'Indonesia',
    basePrice: '$3600',
    purchasedPrice: '$4800',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-66',
    customer: 'Stella',
    shipTo: 'Japan',
    basePrice: '$5600',
    purchasedPrice: '$3600',
    status: 'On hold',
    action: ''
  },
  {
    id: 'WD-67',
    customer: 'Jaqueline',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-68',
    customer: 'Tim',
    shipTo: 'Italy',
    basePrice: '$6300',
    purchasedPrice: '$2100',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-69',
    customer: 'John',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '$6300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-70',
    customer: 'Tom',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$2300',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-71',
    customer: 'Aleena',
    shipTo: 'New York',
    basePrice: '$1600',
    purchasedPrice: '$3500',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-72',
    customer: 'Alphy',
    shipTo: 'Brazil',
    basePrice: '$5500',
    purchasedPrice: '$7200',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-73',
    customer: 'Twinkle',
    shipTo: 'Italy',
    basePrice: '$1560',
    purchasedPrice: '$2530',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-74',
    customer: 'Catherine',
    shipTo: 'Brazil',
    basePrice: '$1600',
    purchasedPrice: '$5600',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-75',
    customer: 'Daniel',
    shipTo: 'Singapore',
    basePrice: '$6800',
    purchasedPrice: '$9800',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-76',
    customer: 'Tom',
    shipTo: 'Tokyo',
    basePrice: '$1600',
    purchasedPrice: '$6500',
    status: 'On hold',
    action: ''
  },
  {
    id: 'WD-77',
    customer: 'Cris',
    shipTo: 'Tokyo',
    basePrice: '$2100',
    purchasedPrice: '$6300',
    status: 'Open',
    action: ''
  },
  {
    id: 'WD-78',
    customer: 'Tim',
    shipTo: 'Italy',
    basePrice: '$6300',
    purchasedPrice: '$2100',
    status: 'Closed',
    action: ''
  },
  {
    id: 'WD-79',
    customer: 'Jack',
    shipTo: 'Tokyo',
    basePrice: '$3100',
    purchasedPrice: '$7300',
    status: 'Pending',
    action: ''
  },
  {
    id: 'WD-80',
    customer: 'Tony',
    shipTo: 'Germany',
    basePrice: '$1100',
    purchasedPrice: '$2300',
    status: 'On hold',
    action: ''
  },
];

createTheme('dark', {
  background: {
    default: 'transparent'
  }
})

function Orders() {
  return (
    <div>
      <div className='page-header'>
        <h3 className='page-title'>Orders</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Ecommerce</a></li>
            <li className="breadcrumb-item active" aria-current="page">Orders</li>
          </ol>
        </nav>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Orders</h4>
              <div className='row mb-4'>
                <div className='col-12'>
                  <Alert variant='warning'>
                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                  </Alert>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <DataTable columns={columns} data={products} pagination customStyles={customStyles} theme='dark' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders