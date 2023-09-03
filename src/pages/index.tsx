import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar/sidebar'
import Chart from '@/components/chart/chart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
     
    >
     <div className="flex bg-[#F2F4F7]">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Chart/>
    </main>
    </div>
    </div>
  )
}
