import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CgSpinner } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import { AxiosClient } from "../config/axiosClient";
// import { useMainConntext } from "../context/MainContext";

const AddRose = () => {
    // const {fetchAllRose} = useMainConntext()
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required("Title is Required"),
    description: yup
      .string()
      .required("Description is Required")
      .min(10, "Description Length should be grater than 10 characters"),
    image: yup
      .string()
      .required("Image is required")
      .url("Image should be a valid url"),
  });

  const initialStates = {
    title: "",
    description: "",
    image: "",
  };
  const onSubmitHandler = async (e, helpers) => {
    try {
      setLoading(true);
      const response = await AxiosClient.post("/rose/add-rose", e);
      // console.log(response)
      const data = await response.data;
      // console.log(data)
      toast.success(data.msg);
      // await fetchAllRose()
      helpers.resetForm();
      setIsOpen(false);
      // add to your backend here
    } catch (error) {
      toast.error(error?.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="px-4 py-2 bg-green-400 rounded-md text-sm cursor-pointer"
      >
        Add Rose
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-slate-800 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Add New Rose
              </DialogTitle>

              <Formik
                initialValues={initialStates}
                onSubmit={onSubmitHandler}
                validationSchema={validationSchema}
              >
                <Form className="py-3">
                  <div className="mb-3">
                    <label htmlFor="title" className="text-white text-sm">
                      Title
                    </label>
                    <Field
                      name="title"
                      type="text"
                      className="w-full py-2 outline-none border-b bg-primary rounded-md text-white px-3 placeholder:text-gray-300 border-b-white"
                      placeholder="Enter Rose Title"
                    />
                    <ErrorMessage
                      name="title"
                      className="text-xs text-red-500 "
                      component={"p"}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="text-white text-sm">
                      Image
                    </label>
                    <Field
                      name="image"
                      type="text"
                      className="w-full py-2 outline-none border-b bg-primary rounded-md text-white px-3 placeholder:text-gray-300 border-b-white"
                      placeholder="Enter Rose Image URL"
                    />
                    <ErrorMessage
                      name="image"
                      className="text-xs text-red-500 "
                      component={"p"}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="text-white text-sm">
                      Description
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      type="text"
                      className="w-full py-2 outline-none border-b bg-primary rounded-md text-white px-3 placeholder:text-gray-300 border-b-white"
                      placeholder="Enter Rose Description"
                    />
                    <ErrorMessage
                      name="description"
                      className="text-xs text-red-500 "
                      component={"p"}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      disabled={loading}
                      className="w-full border border-green-500 outline-none text-white flex items-center disabled:cursor-no-drop disabled:bg-gray-800 justify-center py-2 hover:bg-green-500  transition-all duration-300 cursor-pointer hover:rounded-md gap-x-2 "
                    >
                      <span>Submit</span>
                      {loading ? (
                        <CgSpinner className="text-xl animate-spin" />
                      ) : (
                        <FaArrowRight />
                      )}
                    </button>
                  </div>
                </Form>
              </Formik>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddRose;
