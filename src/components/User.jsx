import './User.css';

const User = ({ user }) => {
	console.log(user);
	return (
		<div className='user_card'>
			<img src={user.picture.large} alt='' />
			<div className='user_card_details'>
				<h2>
					Name: {user.name.title}. {user.name.first} {user.name.last}
				</h2>
				<p>
					<strong>Email:</strong> {user.email}
				</p>
				<p>
					<strong>Gender:</strong> {user.gender}
				</p>
				<p>
					<strong>Age:</strong> {user.dob.age}
				</p>
				<p>
					<strong>Country:</strong> {user.location.country}
				</p>
			</div>
		</div>
	);
};

export default User;
