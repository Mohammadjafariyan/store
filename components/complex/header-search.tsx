import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';



export default function HeaderSearch() {
    return (
        <>

<form className="d-flex" role="search">
         {/*  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
         
         <span className="p-input-icon-right me-3">
                <i className="pi pi-search" />
                <InputText placeholder="                جستجو "  style={{width:'30vw' , backgroundColor:'#f1f2f4' , border:'none',borderRadius:'5px',height:'40px',fontSize:'15px'}}/>
            </span>
        </form>
        
        </>
    )
}
