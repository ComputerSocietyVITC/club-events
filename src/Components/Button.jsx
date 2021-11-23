import React from 'react'
import { Link } from 'react-router-dom';
function Button() {
    return (
        <button className="mt-12 mb-8 ml-4 py-2 max-w-xs bg-lightergreen hover:bg-green-500 text-black font-bold   text-sm border border-blue-700 rounded-full ">
        <Link to="events/Dashboard">Let's Go!</Link>
        </button>
    )
}

export default Button
