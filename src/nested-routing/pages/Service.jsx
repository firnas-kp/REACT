import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Service.css'


const Service = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <p>Choose our service below.</p>

            <div className='service-link'>
                <Link to='/web-development'
                    className='service-link web'>Web development</Link>

                <Link to='/app-development'
                    className='service-link app'>
                    app development
                </Link>

                <Link to='/design' className='service-link.design'>
                    Design
                </Link>
            </div>

            {/* nested route content */}
            <Outlet />
        </div>
    )
}

export default Service
