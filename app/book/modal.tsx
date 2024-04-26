import React from 'react';

interface ModalProps {
  name: string;
  alias: string;
}

const Modal: React.FC<ModalProps> = ({ 
  name,
  alias
 }) => {
  return (
    <>
    <button 
      data-modal-target="modal-single-action" 
      data-modal-toggle="modal-single-action" 
      className="aegov-btn"
      type="button">
      Single Action
    </button>

    {/* Main Modal */}
    <div id="modal-single-action" tabIndex={-1} aria-hidden="true" className="aegov-modal hidden z-50" role="dialog">
      <div className="relative sm:w-full sm:max-w-sm max-h-full">
        <div className="aegov-modal-wrapper py-4 md:py-5 xl:py-8 px-4 xl:px-6">
          <button type="button" className="aegov-modal-close top-2 end-2" data-modal-hide="modal-single-action">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div>
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-aegreen-50">
                <svg className="h-6 w-6 text-aegreen-600" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <polyline points="40 144 96 200 224 72" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-6">
                <h3 className="text-lg font-bold text-aeblack-900" id="modal-title">Payment successful</h3>
                <div className="mt-2">
                  <p className="text-base text-aeblack-500">Lorem ipsum dolor sit amet consectetur
                    adipisicing
                    elit. Consequatur amet labore.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button type="button" className="aegov-btn btn-block">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Modal;