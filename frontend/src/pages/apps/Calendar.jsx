import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'

function Calendar() {

  // const events = [
  //   {
  //     title: 'Meeting',
  //     start: new Date()
  //   }
  // ]

    const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date()
    }
  ])

    const handleDateClick = (arg) => {
    const title = prompt('Enter event title:')
    if (title) {
      setEvents([...events, { title, start: arg.date }])
    }
  }

  const handleEventDrop = (info) => {
    const updatedEvents = events.map(event => 
      event.title === info.event.title ? { ...event, start: info.event.start } : event
    )
    setEvents(updatedEvents)
  }

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          Calendar
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={evt =>evt.preventDefault()}>Apps</a></li>
            <li className="breadcrumb-item active" aria-current="page">Calendar</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="fc-external-events">
            <div className="fc-event">
              <p>Deciphering Marketing Lingo For Small Business Owners</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Georgia</p>
            </div>
            <div className='fc-event'>
              <p>Influencing The Influencer</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Netherlands</p>
            </div>
            <div className='fc-event'>
              <p>Profiles Of The Powerful Advertising Exec Steve Grasse</p>
              <p className="small-text"></p>
              <p className="text-muted mb-0">Canada</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Filter board</p>
            <div className="form-check form-check-primary">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Project Board
              </label>
            </div>
            <div className="form-check form-check-danger">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Kanban Board
              </label>
            </div>
            <div className="form-check form-check-info">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Summary Board
              </label>
            </div>
            <div className="form-check form-check-success">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
                Planner Board
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Fullcalendar</h4>
              <FullCalendar
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                events={events}
                editable={true}
                selectable={true}
                dateClick={handleDateClick}
                eventDrop={handleEventDrop}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Calendar