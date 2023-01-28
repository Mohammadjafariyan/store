import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import HeaderLoginRegisterButton from "@/components/basic/header-login-register-button";
import Login from "./login";
import Register from "./register";

export default function LoginRegisterModal() {
    const [visible, setVisible] = useState(false);
    const [loginOrRegister, setLoginOrRegister] = useState(1);


    return (
        <div data-testid='login-register-modal'>
            <HeaderLoginRegisterButton onClick={() => setVisible(true)} />

            <Dialog header="ورود | ثبت نام" visible={visible} onHide={() => setVisible(false)} >

                <div className=" d-flex justify-content-center align-items-center" data-testid='login' >
                    {/*     <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${loginOrRegister == 1 ? 'active' : ''}`} id="tab-login" data-mdb-toggle="pill" 
                            onClick={() => setLoginOrRegister(1)} role="tab"
                                aria-controls="pills-login" aria-selected="true">ورود</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${loginOrRegister == 2 ? 'active' : ''}`}  id="tab-register" data-mdb-toggle="pill" 
                            onClick={() => setLoginOrRegister(2)} role="tab"
                                aria-controls="pills-register" aria-selected="false">ثبت نام</button>
                        </li>
                    </ul> */}

                    <div className=" d-flex flex-column align-items-center tab-content">
                <img src={'/img/logo.svg'} width={100} height={50} alt="لوگو" />
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form>

                                {loginOrRegister === 1 && <Login />}
                                {loginOrRegister === 2 && <Register />}

                                <ul className="nav nav-pills nav-justified " id="ex1" role="tablist" style={{ padding: '0px' }}>

                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link active`} id="tab-register" data-mdb-toggle="pill"
                                            role="tab"
                                            aria-controls="pills-register" aria-selected="false">ورود</button>
                                    </li>
                                </ul>
                                <br />
                                <small className="text-caption color-700 mt-4">ورود شما به معنای پذیرش<a className="mx-1 d-inline-block color-secondary-700" href="/page/terms/">شرایط طلا کالا</a>و<a className="mx-1 d-inline-block color-secondary-700" href="/page/privacy/">قوانین حریم‌خصوصی</a>است</small>

                                <hr />
                                <div className="text-center mb-3">
                                    <small>ورود با  سرویس های دیگر </small>
                                    <br/>
                                    <br/>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="pi pi-facebook"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="pi pi-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="pi pi-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="pi pi-github"></i>
                                    </button>
                                </div>





                                {/*  <div className="text-center">
                                    <p>حساب کاربری ندارید ? <a href="#!" onClick={() => setLoginOrRegister(2)}>ثبت نام</a></p>
                                </div> */}
                            </form>
                        </div>

                    </div>
                    {/*   <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
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

            </Dialog>
        </div>
    )
}