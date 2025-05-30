import {useState} from 'react'
import DatePicker from 'react-datepicker';


function DateRangePicker() {

    const [startDate, setStartDate] = useState(new Date("2014/02/08"));

    const [endDate, setEndDate] = useState(new Date());

  return (
    <>
    <div className="daterange-picker">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          // selectsStart
          startDate={startDate}
          // endDate={endDate}
          className="form-control"
        />
        <span className="range-seperator"> to </span>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          // selectsEnd
          endDate={endDate}
          minDate={startDate}
          className="form-control"
        />
    </div>
    </>
  )
}

export default DateRangePicker