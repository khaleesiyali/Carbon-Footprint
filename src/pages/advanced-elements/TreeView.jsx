import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

function TreeView() {
  return (
    <div>
      <div className='page-header'>
        <h3 className='page-title'>
          Tree View
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
          <li className="breadcrumb-item active" aria-current="page">Tree View</li>
          </ol>
        </nav>
      </div>
      <div className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>TreeView</h4>
              <p className="card-description">React Tree View Component. Data-Driven, Fast, Efficient and Customisable</p>
              <div className='template-demo'>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                  <SimpleTreeView>
                    <TreeItem itemId="grid" label="Data Grid">
                      <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                      <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                      <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                    </TreeItem>
                    <TreeItem itemId="pickers" label="Date and Time Pickers">
                      <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                      <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                    </TreeItem>
                    <TreeItem itemId="charts" label="Charts">
                      <TreeItem itemId="charts-community" label="@mui/x-charts" />
                    </TreeItem>
                    <TreeItem itemId="tree-view" label="Tree View">
                      <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                    </TreeItem>
                  </SimpleTreeView>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TreeView