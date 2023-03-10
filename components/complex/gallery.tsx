import React, { useState, useEffect, } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '@/service/header-photo-service';
import { Skeleton } from 'primereact/skeleton';
import SkeletonLazyImage from '../basic/skeleton-lazy-image';

export const GalleriaIndicatorDemo = () => {

    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState(null);

    const galleriaService = new PhotoService();

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        galleriaService.getImages().then(data => {setImages(data); setImages2(data.slice(0, 5))})
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item:any) => {
        if(!item || !item.itemImageSrc){
            return <Skeleton width="100%" height="400px"  />;

        }else{
            return <SkeletonLazyImage  fill src={item.itemImageSrc} onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{maxHeight:'400px', width: '100%', display: 'block' }} />;
 
        }
    }



    return (
        <div>
                
                    <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                    circular  transitionInterval={2000}
                        showThumbnails={false}  autoPlay  showIndicators changeItemOnIndicatorHover showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} />


        </div>
    );
}
     