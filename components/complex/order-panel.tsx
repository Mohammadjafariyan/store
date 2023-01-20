import React from 'react';
import { Card } from 'primereact/card';
import { OrderPanelTimeline } from '../basic/order-panel-timeline';

export default function OrderPanel() {
    return (
        <>
            <Card style={{ width: '80vw', backgroundColor: '#ef4056' }}>


                <div className='row'>

                    <Card style={{ height: '300px' }}>
                        <OrderPanelTimeline />

                    </Card>

                </div>
            </Card>
        </>
    )
}
