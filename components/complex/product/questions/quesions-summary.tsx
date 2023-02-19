import { GlobalConstants } from '@/components/abstract/global'
import { Group, Rating } from '@mantine/core'
import { Button } from 'primereact/button'
import React, { Component } from 'react'

export default class QuestionsSummary extends Component {
    render() {
        return (
            <div data-testid='QuestionsSummary'>

                <div >
                    <span><span style={{ fontSize: 30, fontWeight: 'lighter' }}>4.3</span></span>
                    <span>از</span>
                    <span>5</span>
                </div>

                <div className='row'>
                    <div className='col-auto'>
                        <Group dir='ltr'>
                            <small style={{ color: GlobalConstants.SECENDARY_CSS, fontWeight: 'lighter' }}>از مجموع ۶ امتیاز</small>
                            <Rating fractions={2} defaultValue={1.5} readOnly  >  </Rating>
                        </Group>

                    </div>
                </div>

                <div className='row mt-4 ' >
                    <h5>موضوع پرسش‌ها

                    </h5>


                    <div className='row mt-2 ' style={{padding:'10px',width:'70%',  margin: 0, border: '1px solid ' + GlobalConstants.BORDER_SECENDARY_CSS, borderRadius: '7px' }}>
                        <b className='col-auto text-muted' >
                            قیمت و ارزش خرید

                        </b>
                        <div className='col-auto me-auto text-muted' style={{fontWeight: 'lighter' }}>
                            15 پرسش

                        </div>

                        <div className='row mb-2 mt-2'>

                            <div className='col-md-6 bg-success ' style={{ height: 5 }}></div>
                            <div className='col-md-3 bg-danger'></div>
                            <div className='col-md-3 ' style={{ backgroundColor: GlobalConstants.SECENDARY_CSS }}></div>
                        </div>
                    </div>

                    <div className='row  mt-2' style={{padding:'10px',width:'70%', margin: 0, border: '1px solid ' + GlobalConstants.BORDER_SECENDARY_CSS, borderRadius: '7px' }}>
                        <b className='col-auto text-muted' >
                           کیفیت و کارایی

                        </b>
                        <div className='col-auto me-auto text-muted' style={{ fontWeight: 'lighter' }}>
                            47 پرسش

                        </div>

                        <div className='row mb-2 mt-2'>

                            <div className='col-md-4 bg-success ' style={{ height: 5 }}></div>
                            <div className='col-md-5 bg-danger'></div>
                            <div className='col-md-3 ' style={{ backgroundColor: GlobalConstants.SECENDARY_CSS }}></div>
                        </div>
                    </div>

                    <div className='row  mt-2' style={{padding:'10px',width:'70%', margin: 0, border: '1px solid ' + GlobalConstants.BORDER_SECENDARY_CSS, borderRadius: '7px' }}>
                        <b className='col-auto text-muted' >
                            قیمت و ارزش خرید

                        </b>
                        <div className='col-auto me-auto text-muted' style={{ fontWeight: 'lighter' }}>
                            15 پرسش

                        </div>

                        <div className='row mb-2 mt-2'>

                            <div className='col-md-1 bg-success ' style={{ height: 5 }}></div>
                            <div className='col-md-9 bg-danger'></div>
                            <div className='col-md-3 ' style={{ backgroundColor: GlobalConstants.SECENDARY_CSS }}></div>
                        </div>
                    </div>


                    <div className='row  mt-2' style={{ padding:'10px',width:'70%',margin: 0, border: '1px solid ' + GlobalConstants.BORDER_SECENDARY_CSS, borderRadius: '7px' }}>
                        <b className='col-auto text-muted' >
                            شباهت یا مغایرت

                        </b>
                        <div className='col-auto me-auto text-muted' style={{ fontWeight: 'lighter' }}>
                            1 پرسش

                        </div>

                        <div className='row mb-2 mt-2'>

                            <div className='col-md-0 bg-success ' style={{ height: 5 }}></div>
                            <div className='col-md-12 bg-danger'></div>
                            <div className='col-md-0 ' style={{ backgroundColor: GlobalConstants.SECENDARY_CSS }}></div>
                        </div>
                    </div>

                    <div className='row  mt-2' style={{ padding:'10px',width:'70%',margin: 0, border: '1px solid ' + GlobalConstants.BORDER_SECENDARY_CSS, borderRadius: '7px' }}>
                        <b className='col-auto text-muted' >
                            گارانتی

                        </b>
                        <div className='col-auto me-auto text-muted' style={{ fontWeight: 'lighter' }}>
                            1 پرسش

                        </div>

                        <div className='row mb-2 mt-2'>

                            <div className='col-md-6 bg-success ' style={{ height: 5 }}></div>
                            <div className='col-md-3 bg-danger'></div>
                            <div className='col-md-3 ' style={{ backgroundColor: GlobalConstants.SECENDARY_CSS }}></div>
                        </div>
                    </div>


                </div>

                <hr/>
                
                <p style={{color:GlobalConstants.SECENDARY_CSS,fontWeight:'lighter'}}>شما هم درباره این کالا پرسش ثبت کنید

</p>


<Button style={{width:'100%'}} label='ثبت پرسش'  outlined > </Button>

            </div>
        )
    }
}
