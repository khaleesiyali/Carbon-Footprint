import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const FormRepeater = () => {
  const [users, setUsers] = useState([{ id: 1, name: '' }]);

  const inputChangeHandler = (event, index) => {
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  };

  const addUserInput = () => {
    const newUsers = [...users];
    const newId = newUsers[newUsers.length - 1].id + 1;
    newUsers.push({ id: newId, name: '' });
    setUsers(newUsers);
  };

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <form className="form-inline" onSubmit={(event) => event.preventDefault()}>
      <div className="d-flex flex-column">
        {users.map((user, index) => (
          <div key={user.id} className="d-flex mb-2">
            <div className="input-group mb-2 me-sm-2 mb-sm-0">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Add user"
                value={user.name}
                onChange={(event) => inputChangeHandler(event, index)}
              />
            </div>
            <div className='input-group-append'>
                {index > 0 && (
                    <Button variant='btn btn-gradient-danger icon-btn' size='sm' className="ms-2" onClick={() => deleteUser(index)} >
                    <i className="fa fa-trash"></i>
                </Button>
                )}
            </div>
          </div>
        ))}
      </div>
      <Button variant='btn btn-gradient-info icon-btn' size='sm' className="ms-2 mb-2" onClick={addUserInput} >
        <i className="fa fa-plus"></i>
      </Button>
    </form>
  );
};

export default FormRepeater;
