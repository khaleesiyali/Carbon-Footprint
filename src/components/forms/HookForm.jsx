import React from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function HookForm() {

    const { register, handleSubmit,  formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            requiredField: '',
            selectField: '',
            textarea: ''
        }
    });
    const onSubmit = data => console.log(data);


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="container">
        <div className="form-group row align-items-center">
            <label className="col-6 col-lg-4 col-form-label">Simple text field</label>
            <div className="col-6 col-lg-8">
                <input {...register("firstName")} className="form-control" />
            </div>
        </div>
        <div className="form-group row align-items-center">
            <label className="col-6 col-lg-4 col-form-label">Empty text field</label>
            <div className="col-6 col-lg-8">
                <input {...register("requiredField", { required: true })} className="form-control" />
                {errors.requiredField && <p className='text-danger'>This field is required</p>}
            </div>
        </div>
        <div className="form-group row align-items-center">
            <label className="col-6 col-lg-4 col-form-label">Select</label>
            <div className="col-6 col-lg-8">
                <select {...register("selectField")} className='form-select'>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
        <div className="form-group row align-items-center">
            <label className="col-6 col-lg-4 col-form-label">text area field</label>
            <div className="col-6 col-lg-8">
                <textarea {...register("textarea")} className="form-control" />
            </div>
        </div>
        <div className="form-group row">
            <div className="col-lg-12">
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </div>
        </div>
    </form>
    </>

  )
}

export default HookForm