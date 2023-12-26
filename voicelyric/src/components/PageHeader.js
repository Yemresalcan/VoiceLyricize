export default function PageHeaders( {h1Text='Hello', h2Text='SubHeader'} ) {
  
    return (
        <div className='text-center mt-24'>
        <h1 className="text-3xl"
        style={{textShadow:'3px 3px 0px #fff'}}
        >{h1Text}</h1>
        <h2 className='text-black/95'> {h2Text} </h2>
      </div>
    )
}