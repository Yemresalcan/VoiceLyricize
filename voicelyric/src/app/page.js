import BoltIcon from '@/components/BoltIcon'
import DemoSection from '@/components/DemoSection'
import PageHeaders from '@/components/PageHeader'
import UploadIcon from '@/components/UploadIcon'
import Image from 'next/image'


export default function Home() {
  return (
<>
      <PageHeaders 
      h1Text={'Videonuza epik altyazılar ekleyin'}
      h2Text={'Sadece videoyu yükleyin gerisini biz hallederiz'} />
    
      <div className='text-center my-2'>
        <button className='bg-green-400 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-green-700'> 
        <UploadIcon/>

         <span>Hemen Başla </span>
          </button>
      </div>
  <DemoSection/>


</>
  
  )
}
