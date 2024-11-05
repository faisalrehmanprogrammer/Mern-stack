import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div className="flex min-h-screen">


                <div className="bg-blue-400 text-white w-64 flex flex-col p-6 space-y-4">
                    <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>

                    <nav className="space-y-2 flex flex-col">

                        <NavLink to="/dashboard" className="text-lg p-3 font-normal">Dashboard</NavLink>
                        <NavLink to="/post" className=" text-lg p-3 font-normal">Posts</NavLink>
                        <NavLink to="/" className="text-lg p-3 font-normal">Creat Post</NavLink>
                        <NavLink to="/" className="text-lg p-3  font-normal">Settings</NavLink>
                        <NavLink to="/" className="text-lg p-3  font-normal">Logout</NavLink>
                    </nav>
                </div>


                <div className="flex-1 flex flex-col">

                    <header className="flex items-center justify-between bg-white shadow px-6 py-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </header>


                    <main className="flex-grow p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <div classNameName='flex items-center  space-x-10'>
                                    <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <p className="text-3xl font-bold text-blue-600">1,234</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-700">Total Post</h3>
                                <p className="text-3xl font-bold text-blue-600">2,234</p>
                            </div>

                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}

export default Admin
