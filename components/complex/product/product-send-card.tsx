import React from 'react'
import { Badge } from 'primereact/badge';
import { Group } from '@mantine/core';

export default function ProductSendCard() {
    return (
        <>
        <div className='row send-card'>
            <Group>
                <div> <i style={{ color: 'purple', fontSize: '15px' }} className='pi pi-verified'></i> </div>
                <div><small style={{ color: 'purple' }} >ارسال رایگان سفارش‌ها برای اعضای دیجی‌پلاس

                </small></div>
            </Group>

            <small className='text-muted' style={{ fontWeight: 'lighter' }}>
                ۲۹ هزارتومان هزینه ارسال به سراسر ایران برای کاربران غیر دیجی‌پلاس


            </small>

        </div>
        <div className='row send-card mt-3'>
            <Group>
                <div> <i style={{ color: 'purple', fontSize: '15px' }} className='pi pi-verified'></i> </div>
                <div><small style={{ color: 'purple' }} >ویژه اعضای دیجی‌پلاس</small></div>
            </Group>

            <small className='text-muted' style={{ fontWeight: 'lighter' }}>
                ارسال رایگان


            </small>

        </div>
        </>
    )
}
