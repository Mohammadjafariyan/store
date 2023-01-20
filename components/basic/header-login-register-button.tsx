import React from 'react'
import { Button } from '@mantine/core';


const HeaderLoginRegisterButton = (props:any) => {

    return (

        <div className="nav-link ">
        <Button leftIcon={<i className="pi pi-sign-in "></i>} variant="default" color="gray" {...props} >
            <span className='pe-2'>
                ورود | ثبت نام
            </span>
        </Button>
</div>
    );
}

export default HeaderLoginRegisterButton
