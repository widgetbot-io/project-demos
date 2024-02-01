import React from 'react';

interface Props {
  isOpen: boolean;
  title?: string;
  actionName: string;
  onActionClick?: () => any;
  onClose: () => any;

  children: React.ReactNode;
}

export default function Modal(props: Props) {
  if (!props.isOpen) return null;

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded-lg"
      >
        <div className="w-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-900 outline-none focus:outline-none">
            {props.title && (
              <div className="p-4 border-b border-neutral-500">
                <h3 className="text-2xl font-medium">
                  {props.title}
                </h3>
              </div>
            )}

            <div className="p-4">
              {props.children}
            </div>

            <div className="flex items-center justify-between p-4 border-t border-neutral-500 rounded-b">
              <button
                className="text-red-500 font-medium uppercase text-sm outline-none focus:outline-none"
                type="button"
                onClick={() => props.onClose()}
              >
                Cancel
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-lg"
                type="button"
                onClick={() => props.onActionClick?.()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
