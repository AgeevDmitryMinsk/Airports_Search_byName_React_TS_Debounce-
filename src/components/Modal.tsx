import React from 'react';

const Modal = () => {
	return (
		<div>

			<label htmlFor="my-modal-6" className="btn modal-button hover:bg-primary">open modal</label>


			<input type="checkbox" id="my-modal-6" className="modal-toggle"/>
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg pb-4">Thanks for your attention!</h3>
					<p className="pb-2">This app was created using technology: </p>
					<p>React</p>
					<p>Redux Toolkit</p>
					<p>Tailwind CSS</p>
					<p>daisyUI library</p>
					<div className="modal-action">
						<label htmlFor="my-modal-6" className="btn">Confirm</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
