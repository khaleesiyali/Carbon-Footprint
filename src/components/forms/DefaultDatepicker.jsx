import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import bsCustomFileInput from 'bs-custom-file-input'



  function DefaultDatepicker() {

      const [startDate, setStartDate] = useState(new Date());

        useEffect(() => {
            bsCustomFileInput.init();
        }, []);

        const handleChange = (date) => {
            setStartDate(date);
        };

    return (
      <>
      <DatePicker className="form-control w-100" selected={startDate} onChange={handleChange}/>
      </>
    )
  }
  
  export default DefaultDatepicker