import React from 'react';

export const Landing = ({handleName}) => {

	return(

		<section className="landing">

		<div className="picture">

		</div>
		<div className="logic-section">
			<div className="login">
				<h2>Login</h2>
				<div className="login-input">
					<Button handleName={handleName}/>
				</div>
			</div>
		</div>

		</section>

	)


}
