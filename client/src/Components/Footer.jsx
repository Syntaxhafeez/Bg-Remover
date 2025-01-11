import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className="flex flex-col items-center gap-4 px-4 lg:px-44 py-3 lg:flex-row lg:justify-between">
            <img width={120} src={assets.logo} alt="Logo" className="mb-2 lg:mb-0" />
            <p className="text-center text-xs text-gray-500 border-t border-gray-400 pt-2 lg:border-0 lg:pt-0 lg:text-sm">
                Copyright © Mohammad Hafeez | All rights reserved.
            </p>
            <div className="flex gap-2">
                <img width={30} src={assets.facebook_icon} alt="Facebook" />
                <img width={30} src={assets.twitter_icon} alt="Twitter" />
                <img width={30} src={assets.google_plus_icon} alt="Google Plus" />
            </div>
        </div>

    )
}

export default Footer
