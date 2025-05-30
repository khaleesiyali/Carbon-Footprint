import {useState} from 'react'
import { InputMask } from '@react-input/mask';

function FormMask() {

    const [creditCardMask, setCreditCardMask] = useState('____-____-____-____');

    const handleCreditCardChange = (event) => {
        const input = event.target.value;
        if (input.startsWith('34') || input.startsWith('37')) {
            setCreditCardMask('____-______-_____');
        } else {
            setCreditCardMask('____-____-____-____');
        }
    };

  return (
    <>
    <form className='form-sample'>
        <div className='form-group row'>
            <div className='col-lg-12'>
                <label>Phone:</label>
                <InputMask mask="+7 (___) ___-__-__" replacement={{ _: /\d/ }}  className='form-control'/>
            </div>
        </div>
        <div className="form-group row">
            <div className="col-lg-12">
                <label>Date with default value:</label>
                <InputMask mask="dd/mm/yyyy" defaultValue={"06/10/2019"} replacement={{ d: /\d/, m: /\d/, y: /\d/ }} showMask className='form-control' />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-lg-12">
                <label>Date with custom placeholder</label>
                <InputMask mask="__/__/____" replacement={{ _: /\d/ }} showMask className='form-control' />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-lg-12">
                <label>Credit Card <small>(autochange to Amex format if starts with 34 or 37)</small>:</label>
                <InputMask  mask={creditCardMask}  replacement={{ _: /\d/ }} showMask className='form-control' onChange={handleCreditCardChange}/>
            </div>
        </div>
    </form>
    </>
  )
}

export default FormMask