import React, { useState } from 'react';
import Loader from '../../images/Preloader.gif';

const Preloader = () => {
	const [ message, setMessage ] = useState('d-none');

	setTimeout(() => {
        setMessage('d-block');
    }, 3000);

    function refreshPage() {
        window.location.reload();
      }

	return (
		<div className="text-center col-12 my-1">
			<img src={Loader} alt="loader" />

			<div className={message}>
				<button className="btn btn-danger" onClick={refreshPage}>
					Please Reload the Page
				</button>
			</div>
		</div>
	);
};

export default Preloader;
