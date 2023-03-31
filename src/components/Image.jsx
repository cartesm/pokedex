import React,{useState} from 'react'

function Image({url,alt,clas,preCharge}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
    { loading&& <div className={` ${preCharge} bg-opacity-60 mb-[100px] md:mb-[20px] rounded-md`}></div>}
      
      <img src={url} onLoad={() => setLoading(false)} className={`${clas} ${loading?"hidden":"block"}`} alt={alt} />
      
    </>
   
  )
}

export default Image