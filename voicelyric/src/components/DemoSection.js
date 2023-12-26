import BoltIcon from '@/components/BoltIcon'

export default function DemoSection() {
    return (
        <div className='flex justify-around mt-12 items-center'>
        <div className='bg-orange-200 w-[240px] h-[480px] rounded-xl'></div>
        <div>
          <BoltIcon/>
        </div>
        <div className='bg-orange-200 w-[240px] h-[480px] rounded-xl'></div>
       </div>
    )
}