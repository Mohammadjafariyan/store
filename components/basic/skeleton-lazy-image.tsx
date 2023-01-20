import Image from "next/image";
import { useState } from "react";
import { Skeleton } from 'primereact/skeleton';

export default function SkeletonLazyImage(props:any) {

   const [isImageReady, setIsImageReady] = useState(false);


   const onLoadingComplete = () => {
      console.log('onLoadingComplete')

      setIsImageReady(true)
   }



   return <>
      {!isImageReady && <Skeleton   {...props} />}
      <Image  {...props} onLoadingComplete={onLoadingComplete} />
   </>
} 