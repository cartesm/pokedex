import React,{useState} from 'react'

function Image({url,alt,clas,preCharge,sizeLoader="w-6"}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
    { loading&& <div className={` ${preCharge} flex items-center justify-center mb-[100px] md:mb-[20px]`}>
      <span className={`loader block ${sizeLoader}`}></span>
      </div>}
      
      <img src={url} onLoad={() => setLoading(false)} className={`${clas} ${loading?"hidden":"block"}`} alt={alt} />
      
    </>
   
  )
}

export default Image