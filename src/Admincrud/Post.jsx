import React, { useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Post = () => {



  const [Deleteautherid, setDeleteautherid] = useState('')
  const DeleteSubmit = async (e) => {
    e.preventDefault()
    const deleteData = {
     
      auther_id: Deleteautherid
    }
    console.log(deleteData)
    try {

      const resp = await axios.delete('http://localhost:5000/admin-delete',{ 
        data:deleteData
      })
      console.log('blog delete successfuly', resp)
      toast.success('Delete successfuly ')

      
      setDeleteautherid('')


      setdeleteForm(!deleteForm)


    } catch (error) {
      toast.error('Failed to delete')

    }
     }
  const [deleteForm, setdeleteForm] = useState(false)
  const ToggleDelete = () => {
    setdeleteForm(state => !state)

  }
  // Edit the post
  const [editimg, setEditimg] = useState('')
  const [edittitle, setEdittitle] = useState('')
  const [editcontent, setEditcontent] = useState('')
  const [editautherid, setEditautherid] = useState('')


  const EditSubmit = async (e) => {
    e.preventDefault()
    const updateData = {
      img: editimg,
      title: edittitle,
      content: editcontent,
      auther_id: editautherid
    }
    try {

      const resp = await axios.put('http://localhost:5000/admin-update', updateData)
      console.log('blog update successfuly', resp)



      toast.success('update successfuly ')

      setEditimg('')
      setEdittitle('')
      setEditcontent('')
      setEditautherid('')


      setEditForm(!EditForm)


    } catch (error) {
      toast.error('Failed to update')

    }


  }
  const [EditForm, setEditForm] = useState(false)
  const ToggleEdit = () => {
    setEditForm(state => !state)

  }
  const [img, setImg] = useState('')
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [auther_id, setautherId] = useState('')
  const handleSubmit = async (e) => {
    console.log('')
    e.preventDefault();
    const postData = { img, title, content, auther_id }
    try {
      const response = await axios.post("http://localhost:5000/admin-create", postData)
      console.log('blog create successfuly', response)
      toast.success('Create successfuly')
      setImg('')
      settitle('')
      setcontent('')
      setautherId('')

      setForm(!Form)

    } catch (error) {
      toast.error('Failed to creating. Try again!')
    }

  }
  const [Form, setForm] = useState(false)
  const Toggle = () => {
    setForm(state => !state)

  }

  return (
    <>
      <div className="flex min-h-screen">


        <div className=" bg-blue-400 text-white w-64 flex flex-col p-6 space-y-4">
          <h2 className=" text-2xl font-bold mb-8">Admin Dashboard</h2>

          <nav className=" space-y-2 flex flex-col">

            <NavLink to="/dashboard" className="text-lg p-3 font-normal">Dashboard</NavLink>
            <NavLink to="/post" className=" text-lg p-3 font-normal">Posts</NavLink>
            <NavLink to="/" className="text-lg p-3 font-normal">All Post</NavLink>
            <NavLink  className="text-lg p-3  font-normal">Settings</NavLink>
            <NavLink  className="text-lg p-3  font-normal">Logout</NavLink>
          </nav>
        </div>


        <div className="flex-1 flex flex-col ">

          <header className="flex items-center justify-between bg-white shadow px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none"
            />
          </header>
          <main className="flex-grow p-6">
            <div className="min-h-screen bg-gray-100 p-8">
              <h1 className="text-3xl font-bold mb-8">Posts</h1>
              <nav className="bg-white shadow-lg p-4 flex items-center justify-between">
                <div className="text-lg font-bold">Posts</div>
                <div className="flex md:space-x-4 sm:space-x-2">
                  <button
                    onClick={Toggle}
                    className="flex items-center text-white bg-green-700 hover:bg-green-600 p-3 rounded"
                  >
                    <FaPlus className="mr-2" /> Create
                  </button>

                  {Form && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 ">
                      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-gray-700">Image URL</label>
                            <input
                              type="text"
                              value={img}
                              onChange={(e) => setImg(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Title</label>
                            <input
                              type="text"
                              value={title}
                              onChange={(e) => settitle(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Content</label>
                            <textarea
                              value={content}
                              onChange={(e) => setcontent(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Author ID</label>
                            <input
                              type="text"
                              value={auther_id}
                              onChange={(e) => setautherId(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <button
                              type="button"
                              onClick={Toggle}
                              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  <NavLink onClick={ToggleEdit} className="flex items-center text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded">
                    <FaEdit className="mr-2" /> Edit
                  </NavLink>

                  {EditForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 ">
                      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4"> Edit Post by auther_ID</h2>
                        <form onSubmit={EditSubmit} className="space-y-4">
                          <div>
                            <label className="block text-gray-700">Image URL</label>
                            <input
                              type="text"
                              value={editimg}
                              onChange={(e) => setEditimg(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Title</label>
                            <input
                              type="text"
                              value={edittitle}
                              onChange={(e) => setEdittitle(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Content</label>
                            <textarea
                              value={editcontent}
                              onChange={(e) => setEditcontent(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700">Author ID</label>
                            <input
                              type="text"
                              value={editautherid}
                              onChange={(e) => setEditautherid(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <button
                              type="button"
                              onClick={ToggleEdit}
                              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}




                  <NavLink onClick={ToggleDelete} className="flex items-center text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </NavLink>

                  {deleteForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 ">
                      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4"> Delete Post by auther_ID</h2>
                        <form onSubmit={DeleteSubmit} className="space-y-4">
                          <div>
                            <label className="block text-gray-700">Author ID</label>
                            <input
                              type="text"
                              value={Deleteautherid}
                              onChange={(e) => setDeleteautherid(e.target.value)}
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <button
                              type="button"
                              onClick={ToggleDelete}
                              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                              Delete
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                </div>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
 


export default Post
