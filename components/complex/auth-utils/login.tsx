import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function Login() {
    const toast: any = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };

    const formik: any = useFormik({
        initialValues: {
            value: ''
        },
        validate: (data) => {
            let errors: any = {};

            if (!data.value) {
                errors.value = 'Name - Surname is required.';
            }

            return errors;
        },
        onSubmit: (data: any) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name: any) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name: any) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="" data-testid='login' style={{ padding: '2vw' }}>

          {/*   <p className="text-muted">
                جهت ورود یا ثبت نام
            </p> */}
           {/*  <p style={{fontWeight:'normal !important',color:'#ef4056'}}>

                لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p> */}
            <p  style={{fontWeight:'normal',color:'#ef4056'}} >
                شماره تلفن یا ایمیل :
            </p>
            <InputText style={{width:'100%'}} />
            {/* <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
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
                {getFormErrorMessage('value')}
                <Button type="submit" label="Submit" />
            </form> */}
        </div>
    )
}