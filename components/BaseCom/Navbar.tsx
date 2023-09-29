import Image from 'next/image'
import {Search} from 'lucide-react'
const Navbar = () => {
    return (
        <div>
            <div>
                <Image src='/Images/airbnb-logo.png' alt='logo' width={120} height={120} className='bg-white' />
            </div>
            <div>
                <span>Any where</span>
                <span>|</span>
                <span>Any where</span>
                <span>|</span>
                <span>Any Guest</span>
            </div>
            <div>
                <span>Add Your Home</span>
                <span>
                    <Search />
                </span>
            </div>
        </div>
    )
}

export default Navbar