import React from 'react'
import { Button } from '@mantine/core';

export const HeaderBasket = (props) => {
    return (
        <>

            <div className="nav-link ">


                <Button className="non-border" variant="default" color="gray" {...props} >
                    <i className='pi pi-shopping-cart shopping-cart'></i>
                </Button>


            </div>
        </>
    )
}
