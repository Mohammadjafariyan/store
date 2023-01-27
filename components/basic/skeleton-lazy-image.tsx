import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from 'primereact/skeleton';




export default function SkeletonLazyImage(props:any) {


   const [isImageReady, setIsImageReady] = useState<boolean>(false)


   return <div className={`SkeletonLazyImage SkeletonLazyImage-${props.fill ? 'fill' : null}`}>
      {!isImageReady && <Skeleton   {...props} />}

      <Image  style={{visibility:(isImageReady==true ? 'unset' : 'hidden')}}    
       {...props}  onLoadingComplete={()=>{

         setIsImageReady(true)
       }} />
      
   </div>
} 