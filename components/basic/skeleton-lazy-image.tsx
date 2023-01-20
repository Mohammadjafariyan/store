import Image from "next/image";
import { useState } from "react";
import { Skeleton } from 'primereact/skeleton';

export default function SkeletonLazyImage(props) {

   const [isImageReady, setIsImageReady] = useState(false);


   const onLoadingComplete = (e) => {
      console.log('onLoadingComplete')

      setIsImageReady(true)
   }



   return <>
      {!isImageReady && <Skeleton   {...props} />}
      <Image  {...props} onLoadingComplete={onLoadingComplete} />
   </>
} 