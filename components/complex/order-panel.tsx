import React from 'react';
import { Card } from 'primereact/card';
import { OrderPanelTimeline } from '../basic/order-panel-timeline';
import { GlobalConstants } from '../abstract/global';

export default function OrderPanel() {
    return (
        <>
            <Card style={{ width: '80vw', border: `7px solid ${GlobalConstants.PRIMARY_CSS}`,borderRadius:'10px' }}>


                <div className='row' style={{ height: '300px' }}>

                <OrderPanelTimeline />


                </div>
            </Card>
        </>
    )
}
