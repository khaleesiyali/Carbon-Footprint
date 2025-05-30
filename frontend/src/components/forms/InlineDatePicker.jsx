import {useState} from 'react'
import DatePicker from 'react-datepicker';


function InlineDatePicker() {
const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        inline
        />
    </>
  )
}

export default InlineDatePicker