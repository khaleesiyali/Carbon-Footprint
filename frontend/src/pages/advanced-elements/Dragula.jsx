import { useState } from 'react';
import { Draggable, Droppable, DragDropContext } from '@hello-pangea/dnd';
import PropTypes from 'prop-types'

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1', 
      name: 'Rebecca young', 
      designation: 'Software engineer', 
      imgURL: "/images/faces/face1.jpg"
    },
    'task-2': {
      id: 'task-2', 
      name: 'Jacob march', 
      designation: 'UI developer', 
      imgURL: "/images/faces/face2.jpg"
    },
    'task-3': {
      id: 'task-3', 
      name: 'Catherine', 
      designation: 'Digital Marketer', 
      imgURL: "/images/faces/face3.jpg"
    },
    'task-4': {
      id: 'task-4', 
      name: 'Thomas Cook', 
      designation: 'Director', 
      imgURL: "/images/faces/face4.jpg"
    },
    'task-5': {
      id: 'task-5', 
      name: 'Keto Philip', 
      designation: 'Software Tester', 
      imgURL: "/images/faces/face5.jpg"
    },
    'task-6': {
      id: 'task-6', 
      name: 'Jacob Stephen', 
      designation: 'UI Developer', 
      imgURL: "/images/faces/face6.jpg"
    },
    'task-7': {
      id: 'task-7', 
      name: 'March Creg', 
      designation: 'Technical Support Engineer', 
      imgURL: "/images/faces/face7.jpg"
    },
    'task-8': {
      id: 'task-8', 
      name: 'Peter Beckham', 
      designation: 'UI Developer', 
      imgURL: "/images/faces/face8.jpg"
    },
    'task-9': {
      id: 'task-9', 
      name: 'John Doe', 
      designation: 'UI Designer', 
      imgURL: "/images/faces/face9.jpg"
    },
    'task-10': {
      id: 'task-10', 
      name: 'Williamson', 
      designation: 'Technical Support Engineer', 
      imgURL: "/images/faces/face10.jpg"
    },
  },
  columns: {
    'column-1' : {
      id: 'column-1',
      tittle: 'TEAM A',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4','task-5'],
    },
    'column-2' : {
      id: 'column-2',
      tittle: 'TEAM B',
      taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
    },
  },
  columnOrder: ['column-1', 'column-2'],

};

const Column = ({ column, tasks }) => (
  <div className={`border ${column.id === 'column-1' ? 'bg-primary' : column.id === 'column-2' ? 'bg-info' : ''} p-4 col-sm-6`}>
    <div>
      <h6 className="card-title">{column.tittle}</h6>
    </div>
    <Droppable droppableId={column.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="kanbanHeight"
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);


const Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="mt-1 board-portlet"
      >
        <div className="card-body p-3 bg-dark rounded">
          <div className="media">
            <div className="media-body">
              <div className="d-flex">
                <img src={task.imgURL} alt="profile" className="img-sm me-3 rounded-circle" />
                <div>
                  <h6 className="mb-1">{task.name}</h6>
                  <p className="mb-0 text-muted">{task.designation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

const Dragula = () => {
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
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex flex-column flex-md-row align-items-center">
                <h4 className="mb-md-0 mb-4">Design Board</h4>
                <div className="wrapper d-flex align-items-center">
                  <div className="image-grouped ms-md-4">
                    <img src='/images/faces/face20.jpg' alt="profile" />
                    <img src='/images/faces/face17.jpg' alt="profile" />
                    <img src='/images/faces/face14.jpg' alt="profile" />
                  </div>
                  <button type="button" className="btn private-btn btn-fw ms-4">
                    <i className="mdi mdi-lock"></i>Private
                  </button>
                </div>
                <div className="wrapper ms-md-auto d-flex flex-column flex-md-row kanban-toolbar ms-n2 ms-md-0 mt-4 mt-md-0">
                  <div className="d-flex">
                    <button type="button" className="btn btn-icons btn-light d-none d-lg-block">
                      <i className="mdi mdi-magnify"></i>
                    </button>
                    <button type="button" className="btn btn-icons btn-light d-none d-lg-block">
                      <i className="mdi mdi-filter-outline"></i>
                    </button>
                    <button type="button" className="btn btn-icons btn-light">
                      <i className="mdi mdi-bell-outline"></i>
                    </button>
                    <button type="button" className="btn btn-gradient-primary">Boards</button>
                  </div>
                  <div className="d-flex mt-4 mt-md-0">
                    <button type="button" className="btn btn-gradient-success">Create New</button>
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
    </div>
  );
};



export default Dragula;

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