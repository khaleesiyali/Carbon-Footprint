import Rating from 'react-rating';
import HookForm from '../../components/forms/HookForm';
import FormMask from '../../components/forms/FormMask';
import Dropzone from 'react-dropzone'
import DefaultDatepicker from '../../components/forms/DefaultDatepicker';
import DefaultTimePicker from '../../components/forms/DefaultTimePicker';
import InlineDatePicker from '../../components/forms/InlineDatePicker';
import DateRangePicker from '../../components/forms/DateRangePicker';
import FormRepeater from '../../components/forms/FormRepeater';
import TagsInput from '../../components/forms/TagsInput';
import Select from 'react-select'
import { Typeahead } from 'react-bootstrap-typeahead'; 
import { useState } from 'react';

function WeeklyTravelForm({ onSubmit }) {
  const [carDays, setCarDays] = useState(0);
  const [busDays, setBusDays] = useState(0);
  const [trainDays, setTrainDays] = useState(0);
  const [flightTrips, setFlightTrips] = useState(0);

  const [carMinutes, setCarMinutes] = useState(30);
  const [busMinutes, setBusMinutes] = useState(30);
  const [trainMinutes, setTrainMinutes] = useState(30);
  const [planeHours, setPlaneHours] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        carDays,
        busDays,
        trainDays,
        flightTrips,
        carMinutes,
        busMinutes,
        trainMinutes,
      });
    }
  };

  return (

    <form className="card mb-4" onSubmit={handleSubmit}>

      <div className="card-body">
        
        <div className="mb-3">
          <label style={{ fontSize: "1.25rem" }}  className="form-label">🚗 Days you used a car:</label>
          <input
            type="number"
            min={0}
            max={7}
            className="form-control"
            value={carDays}
            onChange={e => setCarDays(Number(e.target.value))}
          />
        </div>
         <div className="mb-3">
          <label className="form-label">Car trip length: {carMinutes} min</label>
          <input
            type="range"
            min={0}
            max={180}
            step={15}
            className="form-range"
            value={carMinutes}
            onChange={e => setCarMinutes(Number(e.target.value))}
          />
        </div>


        <div className="mb-3">
          <label style={{ fontSize: "1.25rem" }} className="form-label">🚌 Days you rode the bus:</label>
          <input
            type="number"
            min={0}
            max={7}
            className="form-control"
            value={busDays}
            onChange={e => setBusDays(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bus trip length: {busMinutes} min</label>
          <input
            type="range"
            min={0}
            max={180}
            step={15}
            className="form-range"
            value={busMinutes}
            onChange={e => setBusMinutes(Number(e.target.value))}
          />
        </div>


        <div className="mb-3">
          <label style={{ fontSize: "1.25rem" }} className="form-label">🚆 Days you took the train:</label>
          <input
            type="number"
            min={0}
            max={7}
            className="form-control"
            value={trainDays}
            onChange={e => setTrainDays(Number(e.target.value))}
          />
        </div>
         <div className="mb-3">
          <label className="form-label">Train trip length: {trainMinutes} min</label>
          <input
            type="range"
            min={0}
            max={180}
            step={15}
            className="form-range"
            value={trainMinutes}
            onChange={e => setTrainMinutes(Number(e.target.value))}
          />
        </div>


        <div className="mb-3">
          <label style={{ fontSize: "1.25rem" }}  className="form-label">✈️ How many flights this week:</label>
          <input
            type="number"
            min={0}
            max={5}
            className="form-control"
            value={flightTrips}
            onChange={e => setFlightTrips(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Plane trip length: {planeHours} hours</label>
          <input
            type="range"
            min={0}
            max={24}
            step={1}
            className="form-range"
            value={planeHours}
            onChange={e => setPlaneHours(Number(e.target.value))}
          />
        </div>


        <hr />
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  );
}


function AdvancedForm() {

   

  const barEmptyStyle = {
    display: 'inline-block',
    width: '12px',
    height: '28px',
    backgroundColor: '#b66dff',
    opacity: 0.5,
    margin: '1px'
}

  const barFullStyle = {
    display: 'inline-block',
    width: '12px',
    height: '28px',
    backgroundColor: '#b66dff',
    margin: '1px'
}

  const [showModal, setShowModal] = useState(false);

  const handleTravelSubmit = () => {
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (

    
    <div>

      <div className="page-header" >
        <h1  style={{ fontSize: "2rem" }} className="page-title">Weekly Travel Check-In</h1>
        
      </div>

      <WeeklyTravelForm onSubmit={handleTravelSubmit} />

      {/* Simple Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
        >
          <div style={{
            background: "#fff",
            padding: "2rem 3rem",
            borderRadius: "8px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
            textAlign: "center",
            color: "#222", // <-- Ensure text is visible on white background
            minWidth: "250px"
          }}>
            <h4 style={{color: "#222", fontSize: "1.3rem"}}>Data has been recorded</h4>
            <button className="btn btn-success mt-3" onClick={closeModal} style={{fontSize: "1.1rem"}}>OK</button>
          </div>
        </div>
      )}
      
  {/*
    </div>

   
  
      <div className="row">
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fontawesome Rating</h4>
              <p className="card-description"> Simple rating with font-awesome icons</p>
              <Rating 
                  initialRating={1}
                  emptySymbol={<i className="fa fa-star" style={{fontSize:'20px', marginRight: '2px', color: '#d2d2d2'}}></i>}
                  fullSymbol={<i className="fa fa-star text-primary"  style={{fontSize:'20px', marginRight: '2px'}}></i>}
              />
            </div>
          </div>
        </div>
        <div className='col-md-4 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>CSS Rating</h4>
              <p className="card-description"> CSS star rating</p>
              <Rating
                initialRating={1}
                emptySymbol={<i className="mdi mdi-star-outline me-1" style={{fontSize:'20px', marginRight: '2px', display:'block', color: '#d2d2d2'}}></i>}
                fullSymbol={<i className="mdi mdi-star-outline text-primary me-1" style={{fontSize:'20px', marginRight: '2px'}}></i>} 
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">1/10 Rating</h4>
                    <p className="card-description">Rating from 1 to 10</p>
                    <Rating 
                        start={1}
                        stop={10}
                        initialRating={7}
                        emptySymbol={<span className='text-primary' style={barEmptyStyle}></span>}
                        fullSymbol={<span className='text-primary' style={barFullStyle}></span>}
                    />
                </div>
            </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Fractional Rating</h4>
                    <p className="card-description"> Enable fractional rating such as 2.5</p>
                    <Rating 
                        initialRating={2.5}
                        emptySymbol={<i className="fa fa-star" style={{fontSize:'30px', marginRight: '2px', color: '#d2d2d2'}}></i>}
                        fullSymbol={<i className="fa fa-star text-primary"  style={{fontSize:'30px', marginRight: '2px'}}></i>}
                        fractions={2}
                    />
                </div>
            </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Custom each symbol</h4>
                    <p className="card-description"> Custom symbol for each value</p>
                    <Rating
                        stop={4}
                        emptySymbol="fa fa-battery-empty fa-3x me-1"
                        fullSymbol={['fa fa-battery-quarter fa-3x text-primary me-1', 'fa fa-battery-half fa-3x text-primary me-1', 'fa fa-battery-three-quarters fa-3x text-primary me-1', 'fa fa-battery-full fa-3x text-primary me-1']}
                    />
                </div>
            </div>
        </div>
      <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
              <div className="card-body">
                  <h4 className="card-title">Reverse Rating</h4>
                  <p className="card-description">Rating from 9 to 1</p>
                  <Rating
                      start={11}
                      stop={1}
                      step={-2}
                      initialRating={7}
                      emptySymbol={<span style={barEmptyStyle}></span>}
                      fullSymbol={<span style={barFullStyle}></span>}
                      onChange={(rate) => {document.querySelector('#selectedValue').innerHTML= rate || ''}}
                      onHover={(rate) => {document.querySelector('#hoveredValue').innerHTML= rate || ''}}
                  />
                  <label className="d-block">Selected Value: <span id="selectedValue">7</span></label>
                  <label className="d-block">Hovered Value: <span id="hoveredValue"></span></label>
              </div>
          </div>
      </div>
      </div>
      <div className='row'>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>React Hook From</h4>
              <p className="card-description">React hook form</p>
              <div className='template-demo'>
                <div className='editable-form'>
                <HookForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 grid-margin stretch-card'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Form Mask</h4>
              <p className="card-description">Gives a preview of input format</p>
              <FormMask />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col-12 grid-margin stretch-card">
              <div className="card">
                  <div className="card-body">
                      <h4 className="card-title">Dropzone</h4>
                      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                          <section>
                            <div {...getRootProps() } style={{minHeight: '200px', border: '1px solid #ebedf2'}}>
                              <input {...getInputProps()} />
                              <p className="text-center my-5">Drag &apos;n&apos; drop some files here, or click to select files</p>
                            </div>
                          </section>
                        )}
                      </Dropzone>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-6 d-flex flex-column">
              <div className="row flex-grow">
                  <div className="col-12 grid-margin stretch-card">
                      <div className="card">
                          <div className="card-body">
                              <h4 className="card-title">Datepicker (Default)</h4>
                              <p className="card-description">Click to open datepicker</p>
                              <DefaultDatepicker />
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row flex-grow">
                  <div className="col-12 grid-margin stretch-card">
                      <div className="card">
                          <div className="card-body">
                              <h4 className="card-title">Clockpicker (Default)</h4>
                              <p className="card-description">A simple clockpicker</p>
                              <DefaultTimePicker />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-lg-6 stretch-card grid-margin">
          <div className="card">
              <div className="card-body">
                  <h4 className="card-title">Inline Datepicker</h4>
                  <p className="card-description">An inline datepicker</p>
                  <InlineDatePicker />
              </div>
          </div>
          </div>
      </div>
      <div className="row">
          <div className="col-12 grid-margin stretch-card">
              <div className="card">
                  <div className="card-body">
                      <h4 className="card-title">Date Range</h4>
                      <p className="card-description">A simple date range picker</p>
                      <DateRangePicker />
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-12 grid-margin">
              <div className="card">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="card-body">
                              <h4 className="card-title">Form Repeater</h4>
                              <p className="card-description">Click the add button to repeat the form</p>
                              <FormRepeater />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card-body">
                              <h4 className="card-title">Input Tag</h4>
                              <p className="card-description">Type to add a new tag </p>
                              <TagsInput />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className='row'>
        <div className="col-lg-6 stretch-card">
          <div className="card">
              <div className="card-body">
                  <h4 className="card-title">React Select</h4>
                  <p className="card-description">Single select box using react select</p>
                  <Select 
                      options={[
                          { value: 'chocolate', label: 'Chocolate' },
                          { value: 'strawberry', label: 'Strawberry' },
                          { value: 'vanilla', label: 'Vanilla' }
                      ]}
                  />
                  <p className="card-description mt-4">Multiple select using react select</p>
                  <Select 
                      isMulti={true}
                      options={[
                          { value: 'violet', label: 'Violet' },
                          { value: 'indigo', label: 'Indigo' },
                          { value: 'blue', label: 'Blue' },
                          { value: 'green', label: 'Green' },
                          { value: 'yellow', label: 'Yellow' },
                          { value: 'orange', label: 'Orange' },
                          { value: 'red', label: 'Red' },
                          { value: 'black', label: 'Black' },
                          { value: 'white', label: 'White' }
                      ]}
                  />
              </div>
          </div>
        </div>
        <div className="col-lg-6 stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Typeahead</h4>
                    <p className="card-description">Type and select an option from the suggestions</p>
                    <Typeahead
                        labelKey="label"
                        id="typeahead-single"
                        options={[
                            { value: 'violet', label: 'Violet' },
                            { value: 'indigo', label: 'Indigo' },
                            { value: 'blue', label: 'Blue' },
                            { value: 'green', label: 'Green' },
                            { value: 'yellow', label: 'Yellow' },
                            { value: 'orange', label: 'Orange' },
                            { value: 'red', label: 'Red' },
                            { value: 'black', label: 'Black' },
                            { value: 'white', label: 'White' }
                        ]}
                        placeholder="Choose a Color..."
                    />

                    <p className="card-description">Multi select using typeahead</p>
                    <Typeahead
                        labelKey="label"
                        id="typeahead-multiple"
                        multiple={true}
                        options={[
                            { value: 'violet', label: 'Violet' },
                            { value: 'indigo', label: 'Indigo' },
                            { value: 'blue', label: 'Blue' },
                            { value: 'green', label: 'Green' },
                            { value: 'yellow', label: 'Yellow' },
                            { value: 'orange', label: 'Orange' },
                            { value: 'red', label: 'Red' },
                            { value: 'black', label: 'Black' },
                            { value: 'white', label: 'White' }
                        ]}
                        placeholder="Choose a Color..."
                    />

                </div>
            </div>
        </div>
      </div>
      */}
    </div>

    
  )

  
}


export default AdvancedForm