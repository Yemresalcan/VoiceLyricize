


import BoltIcon from '@/components/BoltIcon'
import DemoSection from '@/components/DemoSection'
import PageHeaders from '@/components/PageHeader'
import UploadForm from '@/components/UploadForm'

import Image from 'next/image'


export default function Home() {

  return (
<>
      <PageHeaders 
      h1Text={'Videonuza epik altyazılar ekleyin'}
      h2Text={'Sadece videoyu yükleyin gerisini biz hallederiz'} />
    
      <div className='text-center my-2'>
      <UploadForm/>
      </div>
  <DemoSection/>


</>
  
  )
}
