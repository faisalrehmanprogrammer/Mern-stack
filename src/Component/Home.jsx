import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [filterPost, setfilterPost] = useState([])

    const [searchTerm, setsearchTerm] = useState('')

    const Togglesearch = async (searchTerm) => {
        try {
            const response = await axios.get('http://localhost:5000/filter-blog', {
                params: { title: searchTerm }
            });
            console.log(response.data);
            // filterPost(response.data.blog)
        } catch (error) {
            console.error('Failed to fetch the search results:', error);
        }
    };
    // const [showDetail, setshowDetail] = useState(null)

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        await axios.get("http://localhost:5000/blogs-all").then((res) => {
            setPosts(res.data.blog)
            console.log(setPosts)

        }).catch((err) => {
            console.log(err)
        })

    }

    useEffect(() => {
        console.log("object")
        fetchPosts();

    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filterData = posts.filter(post => post.title.includes(searchTerm))
            setfilterPost(filterData)
            return


        } else {
            setfilterPost(posts)

        }

    }, [posts, searchTerm])
    // const ToggleDetail = () => {
    //     if (showDetail === id) {
    //         setshowDetail(null)
    //     } else {
    //         setshowDetail(id)

    //     }
    // }

    return (

        <>
            <nav className="bg-blue-400 px-10 flex items-center justify-between ">
                <div className="flex items-center">
                    <img
                        src="./img1.png"
                        alt="Blog Logo"
                        className="h-20 w-24  opacity-100"
                    />
                </div>
                <div className="flex mx-4 ">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setsearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && Togglesearch(searchTerm)}
                        placeholder="Search...."
                        className="shadow-lg p-1 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                </div>
                <div className=" text-lg">
                    USERS
                </div>
            </nav>

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 ">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterPost.length > 0 ? (
                        Array.isArray(filterPost) ? filterPost.map((rs) => {
                            const { id, img, title, content, auther_id } = rs;

                            return (
                                <>
                                    <div key={id} className="bg-white shadow-md rounded-lg p-4">
                                        <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <h2 className="text-xl font-semibold">{title}</h2>
                                        <p className="text-gray-700 mb-2">{content}</p>
                                        <p className="text-gray-500 text-sm">Author ID: {auther_id}</p>
                                    </div>
                                </>
                            )
                        }

                        ) : ""
                    ) : (
                        <p>no post found</p>)}


                </div>
            </div>

            <footer className='bg-gray-800 w-[100%] h-full mt-20'>
                <div className='p-4 space-y-10 md:grid md:grid-cols-5 md:gap-4 lg:w-[70%] md:mx-auto '>
                    <div className='text-white font-Nunito space-y-7 md:w-[90%] mt-10 '>
                        <h1 className='text-lg font-bold'>avo</h1>
                        <p className='text-white/50 '>Far far away, behind the word mountains, far from the countries</p>
                        <div className='text-gray-400 flex md:grid-cols-3 '>
                            <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-twitter"></i></a>
                            <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="" className='bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full'><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className='text-white font-Nunito space-y-7'>
                        <h1 className='text-lg font-bold'>Community</h1>
                        <ul className='text-white/50 space-y-2 '>
                            <li className=''>
                                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Project</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Teams</span>
                                </a>
                            </li>
                            <li>
                                <a href=""> <i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Reviews</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>FAQs</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-white font-Nunito space-y-7'>
                        <h1 className='text-lg font-bold'>About Us</h1>
                        <ul className='text-white/50 space-y-2 '>
                            <li className=''>
                                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Our Story</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Meet the team</span>
                                </a>
                            </li>
                            <li>
                                <a href=""> <i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Careers</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='text-white font-Nunito space-y-7'>
                        <h1 className='text-lg font-bold'>Company</h1>
                        <ul className='text-white/50 space-y-2 '>
                            <li className=''>
                                <a href="" className=''><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Press</span>
                                </a>
                            </li>
                            <li>
                                <a href=""> <i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Contact</span>
                                </a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-angle-right"></i>
                                    <span className='ml-1'>Careers</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-white font-Nunito space-y-7 '>
                        <h1 className='text-lg font-bold'>Have a Question?</h1>
                        <ul className='text-white/50 space-y-4 '>
                            <li className=''>
                                <a href="" className='inline-flex '><i class="fa-solid fa-map"></i>
                                    <span className='ml-6 '>203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='inline-flex'><i class="fa-solid fa-phone"></i>
                                    <span className='ml-6 text-sm '>+2 392 3929 210</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='inline-flex'><i class="fa-solid fa-envelope"></i>
                                    <span className='ml-6 text-sm'>info@yourdomain.com</span>
                                </a>
                            </li>

                        </ul>
                    </div>





                </div>
                <div className='text-white/70 flex justify-center p-4 text-center '>
                    <p className='my-20'>Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <a href="" className='text-red-700'>Blog</a></p>
                </div>
            </footer>

        </>
    )
}

export default Home

