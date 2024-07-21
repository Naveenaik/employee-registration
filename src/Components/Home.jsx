import React from 'react'
import Navbar from './Navbar'

const Home = ({admin}) => {
  return (
    <div>
        <div>
            <Navbar admin={admin}/>
            {/* <ul>
                <li>Home</li>
                <li>Employee List</li>
                <li>Admin name</li>
                <li>Logout</li>
            </ul> */}
        </div>
        <div className='flex justify-center'>
            Welcome to Admin panel
        </div>
    </div>
  )
}

export default Home