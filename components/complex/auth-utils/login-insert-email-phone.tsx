import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

export default function LoginInsertEmailPhone(props:any) {
  


    return (
        <div data-testid='LoginInsertEmailPhone' >

          {/*   <p className="text-muted">
                جهت ورود یا ثبت نام
            </p> */}
           {/*  <p style={{fontWeight:'normal !important',color:'#ef4056'}}>

                لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p> */}
            <p  style={{fontWeight:'normal',color:'#ef4056'}} >
                شماره تلفن یا ایمیل :
            </p>
            <InputText value={props.value} style={{width:'100%'}} onChange={props.onChange} />
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