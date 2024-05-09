import Quote from '../components/Quote'
import { Auth } from '../components/Auth'

export const Signin = () => {
  return (
    <div className="grid grid-cols-2">
        <div>
            <Auth type='signin'/>
        </div>
            <Quote />
    </div>
  )
}


