import React, {useState, useEffect,} from 'react';
import {Galleria} from 'primereact/galleria';
import {PhotoService} from '@/service/header-photo-service';
import {Skeleton} from 'primereact/skeleton';
import SkeletonLazyImage from '@/components/basic/skeleton-lazy-image';
import API_FACTORY, {ApiConsts} from '@/api-clients/abstract/api-factory';
import {Image} from 'primereact/image';
import ReactImageZoom from 'react-image-zoom';
import {ProducImage, Product} from "@/pages/api/swagger-generated-api classes";
import {useSelector} from "react-redux";
import {selectProductState} from "@/components/slices/product-single-slices";


export default function ProductImageGallery() {


    const [images, setImages] = useState([]);
    const [images2, setImages2] = useState(null);

    //const galleriaService = API_FACTORY(ApiConsts.MOST_SELLED)

    const product: any = useSelector(selectProductState);


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
        // galleriaService.getList<any>(ApiConsts.MOST_VIEWED).subscribe((data:any) => {setImages(data); setImages2(data.slice(0, 5))})

        console.log('product.producImages',product.producImages)
        setImages(product.producImages)
        setImages2(product.producImages)
    }, [product]); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item: ProducImage) => {
        if (!item || !item.path) {
            return <Skeleton width="100%" height="400px"/>;

        } else {

            return <div className='product-single-img'><ReactImageZoom zoomPosition={'left'} style={{width: '100%'}}
                                                                       height={500} zoomWidth={600} src={item.path}
                                                                       img={item.path}/></div>
            /*  return <SkeletonLazyImage  preview  height={400} width={400} src={item.src} 
             onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
             alt={item.alt} style={{ width: '100% !important', display: 'block' }} />; */

        }
    }

    const thumbnailTemplate = (item: ProducImage) => {
        return <img src={item.path} height={50} width={50} alt={item.path}/>
    }


    return (
        <div className='ProductImageGallery' data-testid='ProductImageGallery' dir='ltr'>

            <Galleria value={images} numVisible={5}
                      circular transitionInterval={2000}
                      thumbnail={thumbnailTemplate} showThumbnails={true} indicatorsPosition="bottom"
                      item={itemTemplate}/>


        </div>
    );

}
