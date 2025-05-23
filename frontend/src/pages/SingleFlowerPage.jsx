import { useParams } from "react-router-dom";
import UpdateRose from "../components/UpdateRose";
import { AxiosClient } from "../config/axiosClient";
import { useEffect, useState } from "react";

const SingleFlowerPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({});

  const fetchRose = async (id) => {
    try {
      setLoading(true);
      const response = await AxiosClient.get("/rose/get-roses/" + id);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRose(id);
  }, [id]);

  if (loading) {
    return <div>Loading ......</div>;
  }

  return (
    <>
      <div className=" w-full lg:w-[80%] my-10 rounded-md bg-green-800/80 mx-auto   lg:flex items-start overflow-hidden">
        <div className="w-full  lg:h-[60vh] lg:w-1/2">
          <img src={data.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start px-10 py-10 justify-center">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p className="py-2 ">{data.description}</p>
          <div className="mb-3 flex gap-x-3 py-4">
            <UpdateRose data={data} updateHandler={fetchRose} />
            <button className="px-10 py-2 rounded-full outline-none border-2 border-red-500 ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleFlowerPage;
