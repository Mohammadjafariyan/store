import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import LoginInsertEmailPhone from "./login-insert-email-phone";
import LoginConfirmCode from "./login-confirm-code";
import { RegexEmailUtil, RegexMobileUtil } from "@/utility/regex";
import { GlobalConstants } from "@/components/abstract/global";

enum LoginPanels{
    LoginInsertEmailPhone,
    LoginConfirmCode
}

export default function Login() {
    const toast: any = useRef(null);


const [panel, setPanel] = useState(LoginPanels.LoginInsertEmailPhone);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.value });
    };


    const formik: any = useFormik({
        initialValues: {
            phoneOrEmail: ''
        },
        validate: (data) => {
            let errors: any = {};

            if (!data.phoneOrEmail) {
                errors.phoneOrEmail = 'لطفا ایمیل یا شماره تلفن خود را وارد نمایید';
            }


            if (!RegexEmailUtil(data.phoneOrEmail) && !RegexMobileUtil(data.phoneOrEmail)) {
                errors.phoneOrEmail = 'شماره موبایل یا ایمیل اشتباه است';
            }

            return errors;
        },
        onSubmit: (data: any) => {
           // data && show();
           // formik.resetForm();
setPanel(LoginPanels.LoginConfirmCode);
           
        }
    });

    const goBack =()=>{
        setPanel(LoginPanels.LoginInsertEmailPhone);

    }

    const isFormFieldInvalid = (name: any) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name: any) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <form  onSubmit={formik.handleSubmit} >
        <div className="" data-testid='login' style={{ padding: '2vw' }}>

          {/*   <p className="text-muted">
                جهت ورود یا ثبت نام
            </p> */}
           {/*  <p style={{fontWeight:'normal !important',color:'#ef4056'}}>

                لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p> */}
          

{panel == LoginPanels.LoginInsertEmailPhone && <LoginInsertEmailPhone value={formik.values.phoneOrEmail} onChange={(e:any) => {
                            formik.setFieldValue('phoneOrEmail', e.target.value);
                        }}/>}
{panel == LoginPanels.LoginConfirmCode && <LoginConfirmCode  goBack={goBack}  mobileOrEmail={formik.values.phoneOrEmail}/>}
{getFormErrorMessage('phoneOrEmail')}
          
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

{panel != LoginPanels.LoginInsertEmailPhone &&  <a className="nav" style={{float:'left',color:GlobalConstants.SECENDARY_CSS}} type="button" onClick={goBack} > بازگشت</a>}
        </div>
        <ul className="nav nav-pills nav-justified " id="ex1" role="tablist" style={{ padding: '0px' }}>


        <li className="nav-item" role="presentation">
            <button type="submit"  className={`nav-link active`} 
               
                >ورود</button>
        </li>
    </ul>
 </form>
    )
}