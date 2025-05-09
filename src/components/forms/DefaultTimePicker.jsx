import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';

function DefaultTimePicker() {

    const [startDate, setStartDate] = useState(new Date());
    
  return (
    <>
    <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        className="form-control"
        />
    </>
  )
}

export default DefaultTimePicker