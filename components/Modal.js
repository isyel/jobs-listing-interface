function Modal({ visible, data, header, counts, setModalVisibleStatus }) {
	return (
		<div
			className={`${
				visible ? "block" : "hidden"
			} fixed z-10 inset-0 overflow-y-auto`}>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				{/* <!--
              Background overlay, show/hide based on modal state.
        
              Entering: "ease-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
				<div
					className={`fixed inset-0 transition-opacity ${
						visible
							? "ease-out duration-300 opacity-100"
							: "ease-in duration-200 opacity-0"
					}`}
					aria-hidden="true">
					<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true">
					&#8203;
				</span>
				{/* <!--
              Modal panel, show/hide based on modal state.
        
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            --> */}
				<div
					className={`${
						visible
							? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
							: "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					} inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xlg sm:w-full`}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline">
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<h1 className="font-semibold pb-2">{header}</h1>
						<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
							{data.map((item, key) => (
								<div className="pb-2 col-span-1" key={key}>
									<span className="pr-2">{item}</span>
									<span className="text-gray-400">{counts[item]}</span>
								</div>
							))}
						</div>
					</div>
					<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							onClick={() => setModalVisibleStatus(false)}
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
