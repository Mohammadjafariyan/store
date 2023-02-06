import React from 'react'; 

export default function NavigationBar() {
    const items = [{ label: 'فروشگاه اینترنتی دیجی‌کالا' }, { label: 'مد و پوشاک' }, { label: 'زنانه' }, { label: 'اکسسوری زنانه' }, { label: 'زیورآلات زنانه' }];
    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

    return (
        <div  >


{items && items.map((val,i,arr)=>{


return <><small className='on-hover-red text-muted' style={{marginRight:'4px',marginLeft:'4px'}}>   <a className='font-slim text-muted' href='#'>{val.label} </a> 

{i!=arr.length -1 && <span  style={{marginRight:'6px',marginLeft:'6px'}}>/</span>}

  </small>  </>
})}
        </div>
    )
}