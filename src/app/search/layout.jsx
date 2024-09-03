import SearachHeader from '@/Components/SearachHeader'
import './../globals.css'

export default function layout({children }) {
  return (
    <div>
        <SearachHeader />
        {children }
    </div>
  )
}
