"use client";

import useModalStore from "@/app/store/useModal";
import { Button, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Modal: React.FC = () => {
  const { openModal, closeModal, isOpen } = useModalStore();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* to blur the background */}
            <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-full max-w-xs transform overflow-hidden rounded-2xl  bg-gray-100  py-10 text-center align-middle shadow-xl transition-all opacity-95">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-8 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center me-2 mb-2 shadow-xl"
                      onClick={closeModal}
                    >
                      <FcGoogle className="mt-[0.20rem] mr-1" />
                      Sign in with Google
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
