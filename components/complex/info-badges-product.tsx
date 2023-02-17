import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Avatar } from '@mantine/core';

const icons = [
    { icon: 'pi   p-overlay-badge pi-envelope', color: 'blue' },
    { icon: 'pi   p-overlay-badge pi-desktop', color: 'green' },
    { icon: 'pi   p-overlay-badge pi-apple', color: 'red' },
    { icon: 'pi   p-overlay-badge pi-paperclip', color: 'yellow' },
    { icon: 'pi   p-overlay-badge pi-microsoft', color: 'teal' },
    { icon: 'pi   p-overlay-badge pi-volume-down', color: 'violet' },
    { icon: 'pi   p-overlay-badge pi-search-minus', color: 'orange' },
]

export const InfoBadgesProduct = () => {

    return (

        <div className='container' data-testid='InfoBadgesProduct'>
<div className='d-flex justify-content-evenly'>
            {icons.map((item, i, arr) => {

                return (
                    
                    <Avatar key={i} size='xl' color={item.color} radius="sm">
                        <i style={{ fontSize: '45px' }} className={item.icon} ></i>
                    </Avatar>
               )
            })}
 </div>
        </div>
    );
}
