import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { SampleTable } from '@/utility/sample-table';


export const SelectCityModal = (props:any) => {
    const [visible, setVisible] = useState(false);

    const dialogFuncMap:any = {
        'visible': setVisible,
    }

  

    const onHide = (name:any) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name:any) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <>  <a href='#' className="nav-link text-muted" onClick={()=>setVisible(true)} >
            <i className="pi pi-map-marker ms-2"></i>
            لطفا شهر خود را انتخاب کنید
        </a>

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} footer={renderFooter('visible')} onHide={() => onHide('displayBasic2')}>
                <SampleTable/>
                <br />
            </Dialog>

        </>
    )
}