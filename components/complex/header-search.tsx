import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { SampleTable } from '@/utility/sample-table';



export default function HeaderSearch() {

    const op = useRef(null);


    return (
        <>

            <form className="d-flex" role="search">
                {/*  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

                <span className="p-input-icon-right me-3">
                    <i className="pi pi-search" />
                    <InputText onClick={(e) => op.current.toggle(e)} placeholder="                جستجو " style={{ width: '30vw', backgroundColor: '#f1f2f4', border: 'none', borderRadius: '5px', height: '40px', fontSize: '15px' }} />


             
                </span>
            </form>
            <OverlayPanel ref={op}>
<SampleTable/> 
                    </OverlayPanel>
        </>
    )
}
