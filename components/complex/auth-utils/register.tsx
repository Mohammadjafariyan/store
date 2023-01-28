import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function Register() {
    const toast:any = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik:any = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors:any = {};

            if (!data.value) {
                errors.value = 'Name - Surname is required.';
            }

            return errors;
        },
        onSubmit: (data:any) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name:any) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name:any) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center" data-testid='register'>

<form>
      

      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" />
        <label className="form-label" >Name</label>
      </div>

      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" />
        <label className="form-label" >Username</label>
      </div>

      <div className="form-outline mb-4">
        <input type="email" id="registerEmail" className="form-control" />
        <label className="form-label" >Email</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" />
        <label className="form-label" >Password</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" className="form-control" />
        <label className="form-label" >Repeat password</label>
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" >
          I have read and agree to the terms
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
    </form>

           {/*  <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <span className="p-float-label">
                    <Toast ref={toast} />
                    <InputText
                        name="value"
                        value={formik.values.value}
                        onChange={(e) => {
                            formik.setFieldValue('value', e.target.value);
                        }}
                        className={classNames({ 'p-invalid': isFormFieldInvalid('value') })}
                    />
                    <label htmlFor="input_value">Name - Surname</label>
                </span>
                {getFormErrorMessage('value')}
                <Button type="submit" label="Submit" />
            </form> */}
        </div>
    )
}