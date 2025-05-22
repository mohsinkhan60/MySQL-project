import UpdateRose from "../components/UpdateRose"


const SingleFlowerPage = () => {
  return (
        <>
            <div className=" w-full lg:w-[80%] my-10 rounded-md bg-green-800/80 mx-auto   lg:flex items-start overflow-hidden">
                   <div className="w-full  lg:h-[60vh] lg:w-1/2">
                   <img src={"https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"} alt=""  className='w-full h-full object-cover'/></div>
                   <div className="w-full lg:w-1/2 flex flex-col items-start px-10 py-10 justify-center">
                        <h1 className='text-3xl font-bold'>Hi</h1>
                        <p className='py-2 '>Good</p>
                   <div className="mb-3 flex gap-x-3 py-4">
                        <UpdateRose />
                    <button className="px-10 py-2 rounded-full outline-none border-2 border-red-500 ">Delete</button>
                   </div>
                   </div>
             </div>
    </>
  )
}
export default SingleFlowerPage