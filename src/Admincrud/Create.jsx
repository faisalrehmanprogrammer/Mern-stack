// import React, { useState } from 'react'

// const Create = () => {
//   const [img,setImg]=useState('');
//   const [title,settitle]=useState('');
//   const [content,setcontent]=useState('');
//   const [auther_id,setautherId]=useState('');
//   const [msg,setmsg]=useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
// const postData={img, title, content, auther_id}
  
//   try {
//     const resp=await fetch('http://localhost:5000/admin-create',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(postData),


//     } )
    
//     if (resp.ok) {
//       console.error(setmsg('Post create successfuly'))
//     }else{
//       setmsg('Failed to create post')
//     }
    
//   } catch (error) {
//     setmsg('Error'+error.message);
//   }

// }
//   return (
//     <>
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//   <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Post</h2>
//   <p className="text-center text-red-500 bg-red-200 w-60 mx-auto rounded-md">{msg}</p>
//   <form onSubmit={handleSubmit} className="space-y-6">
    
//     <div>
//       <label for="img" className="block text-gray-700 font-medium mb-2">Image URL</label>
//       <input
//         type="text"
//         id="img"
//         value={img}
//         onChange={(e)=>setImg(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter image URL"
//       />
//     </div>

    
//     <div>
//       <label for="title" className="block text-gray-700 font-medium mb-2">Title</label>
//       <input
//         type="text"
//         id="title"
//         value={title}
//         onChange={(e)=>settitle(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter title"
//       />
//     </div>

    
//     <div>
//       <label for="content" className="block text-gray-700 font-medium mb-2">Content</label>
//       <textarea
//         id="content"
//         value={content}
//         onChange={(e)=>setcontent(e.target.value)}
//         className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Write your content here"
//       ></textarea>
//     </div>

    
//     <div>
//       <label for="authorId" className="block text-gray-700 font-medium mb-2">Author ID</label>
//       <input
//         type="text"
//        value={auther_id}
//        onChange={(e)=>setautherId(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter author ID"
//       />
//     </div>

    
//     <button
//       type="submit"
//       className="w-full bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//     >
//       Create Post
//     </button>
//   </form>
// </div>
//     </>
//   )
// }

// export default Create
