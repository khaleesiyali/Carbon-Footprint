import {useState} from 'react'
import {Button, ProgressBar, Dropdown} from 'react-bootstrap'
import {DragDropContext, Draggable, Droppable} from '@hello-pangea/dnd'
import PropTypes from 'prop-types'

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1', 
      name: 'Rebecca young', 
      taskName: 'Server gateway', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face8.jpg",
      img2URL:"/images/faces/face9.jpg",
      img3URL:"/images/faces/face10.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'success'
    },
    'task-2': {
      id: 'task-2', 
      name: 'Jacob march', 
      taskName: 'Server gateway', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face23.jpg",
      img2URL:"/images/faces/face24.jpg",
      img3URL:"/images/faces/face25.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'info'
    },
    'task-3': {
      id: 'task-3', 
      name: 'Catherine', 
      taskName: 'Software update', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face15.jpg",
      img2URL:"/images/faces/face16.jpg",
      img3URL:"/images/faces/face17.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'dark'
    },
    'task-4': {
      id: 'task-4', 
      name: 'Network maintenance', 
      taskName: 'Director', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face14.jpg",
      img2URL:"/images/faces/face15.jpg",
      img3URL:"/images/faces/face16.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'danger'
    },
    'task-5': {
      id: 'task-5', 
      name: 'Keto Philip', 
      taskName: 'Attached Preview Icon', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face5.jpg",
      img2URL:"/images/faces/face6.jpg",
      img3URL:"/images/faces/face7.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'danger'
    },
    'task-6': {
      id: 'task-6', 
      name: 'Jacob Stephen', 
      taskName: 'UI Design Started', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face5.jpg",
      img2URL:"/images/faces/face6.jpg",
      img3URL:"/images/faces/face7.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'info'
    },
    'task-7': {
      id: 'task-7', 
      name: 'March Creg', 
      taskName: 'New IOS Design', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face5.jpg",
      img2URL:"/images/faces/face6.jpg",
      img3URL:"/images/faces/face7.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'success'
    },
    'task-8': {
      id: 'task-8', 
      name: 'Peter Beckham', 
      taskName: 'Retail Order', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face5.jpg",
      img2URL:"/images/faces/face6.jpg",
      img3URL:"/images/faces/face7.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'secondar'
    },
    'task-9': {
      id: 'task-9', 
      name: 'John Doe', 
      taskName: 'HTML/CSS templates', 
      date: '20 Feb 2019',
      img1URL:"/images/faces/face5.jpg",
      img2URL:"/images/faces/face6.jpg",
      img3URL:"/images/faces/face7.jpg",
      priority:'important',
      dueDate:'Due 10 days',
      progressVariant:'primary'
    },
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      tittle: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2' : {
      id: 'column-2',
      tittle: 'In Progress',
      taskIds: ['task-5', 'task-6', 'task-7'],
    },
    'column-3' : {
      id: 'column-3',
      tittle: 'Done',
      taskIds: ['task-8', 'task-9'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],

};

const Task = ({task, index}) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div className="mt-2 board-portlet"
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      >
        <ul id="portlet-card-list-1" className="portlet-card-list">
          <li className="portlet-card">
            <ProgressBar variant={`${task.progressVariant}`} now={25}/>
            <div className="d-flex justify-content-between w-100">
              <p className="task-date">{task.date}</p>
              <Dropdown variant="p-0" alignright="true">
                <Dropdown.Toggle variant="dropdown-toggle p-0">
                <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div><h4>{task.taskName}</h4></div>
            <div className="image-grouped">
              <img src={task.img1URL} alt="profile" />
              <img src={task.img2URL} alt="profile" />
              <img src={task.img3URL} alt="profile" />
            </div>
            <div className="d-flex justify-content-between">
              <div className="badge badge-inverse-success">{task.priority}</div>
            <p className="due-date">{task.dueDate}</p>
            </div>
          </li>
        </ul>
      </div>
    )}
  </Draggable>
)

const Column = ({column, tasks}) => (
  <div className="col-md-4">
      <div className="border board-wrapper p-3">        
        <div><h6 className="card-title">{column.tittle}</h6></div>
        <Droppable droppableId= {column.id}>
          {provided => (
            <div className="kanbanHeight"
            ref={provided.innerRef}
              {...provided.droppableProps}
              >
            {tasks.map ((task, index) => 
              <Task key= {task.id} task={task} index= {index} /> )} 
            {provided.placeholder}
            </div>
          )}
        </Droppable >       
      </div>
    </div>
)



function Kanban() {
  const [state, setState] = useState(initialData);

  const onDragStart = (start) => {
    console.log('Dragging started:', start);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex flex-column flex-md-row align-items-center flex-wrap">
                <h4 className="mb-md-0 mb-4">Design Board</h4>
                <div className="wrapper d-none d-lg-flex  align-items-center my-2">
                  <div className="image-grouped me-md-4">
                    <img src="/images/faces/face20.jpg" alt="profile" />
                    <img src="/images/faces/face17.jpg" alt="profile "/>
                    <img src="/images/faces/face14.jpg" alt="profile "/>
                  </div>
                  <Button type="button" variant="btn private-btn btn-fw ms-4"><i className="mdi mdi-lock"></i>Private</Button>
                </div>
                <div className="wrapper ms-md-auto  d-none d-lg-flex flex-column flex-md-row kanban-toolbar ms-md-0 my-2">
                  <div className="d-flex">
                    <Button type="button" variant="btn btn-icons btn-dark d-none d-lg-block">
                      <i className="mdi mdi-magnify"></i>
                    </Button>
                    <Button type="button" variant="btn btn-icons btn-dark d-none d-lg-block">
                      <i className="mdi mdi-filter-outline"></i>
                    </Button>
                    <Button type="button" variant="btn btn-icons btn-dark">
                      <i className="mdi mdi-bell-outline"></i>
                    </Button>
                    <Button type="button" variant="btn btn-gradient-primary">Boards</Button>
                  </div>
                  <div className="d-flex mt-4 mt-md-0">
                    <Button type="button" variant="btn btn-gradient-success">Create New</Button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                        <div className="row">
                          {state.columnOrder.map((columnId) => {
                            const column = state.columns[columnId];
                            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
                            return <Column key={column.id} column={column} tasks={tasks} />;
                          })}
                        </div>
                      </DragDropContext>
                    </div>
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

export default Kanban

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    taskIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img1URL: PropTypes.string.isRequired,
    img2URL: PropTypes.string.isRequired,
    img3URL: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    progressVariant: PropTypes.string.isRequired,
  })).isRequired,
};