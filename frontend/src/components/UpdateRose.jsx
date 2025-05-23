/* eslint-disable react/prop-types */
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { AxiosClient } from "../config/axiosClient";
import { FaArrowRight } from 'react-icons/fa6';
import { CgSpinner } from 'react-icons/cg';

const UpdateRose = ({ data, updateHandler }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    title: yup.string().required("Title is Required"),
    description: yup
      .string()
      .required("Description is Required")
      .min(10, "Description Length should be greater than 10 characters"),
    image: yup
      .string()
      .required("Image is required")
      .url("Image should be a valid url"),
  });

  const initialStates = {
    title: data.title || '',
    description: data.description || '',
    image: data.image || ''
  };

  const onSubmitHandler = async (e, helpers) => {
    try {
      setLoading(true);
      const response = await AxiosClient.put("/rose/update-rose/" + data.id, e);
      const datas = response.data;
      toast.success(datas.msg || datas.message || "Updated!");
      await updateHandler(data.id);
      helpers.resetForm();
      setIsOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">
      Loading....
    </div>;
  }

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
        className="px-10 py-2 rounded-full outline-none border-2 border-yellow-500"
      >
        Update
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
                Update Rose
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
                    <button type="submit" className="w-full border border-green-500 outline-none text-white flex items-center disabled:cursor-no-drop disabled:bg-gray-800 justify-center py-2 hover:bg-green-500  transition-all duration-300 cursor-pointer hover:rounded-md gap-x-2 ">
                      <span>Submit</span>
                      {
                        loading ? <CgSpinner className='text-xl animate-spin' /> : <FaArrowRight />
                      }
                    </button>
                  </div>
                </Form>
              </Formik>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateRose;