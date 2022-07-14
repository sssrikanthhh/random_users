import { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

const UsersList = () => {
	const [users, setUsers] = useState([]);

	const fetchUsers = async () => {
		const { data } = await axios('https://randomuser.me/api/?results=10');
		setUsers(data.results);
	};

	useEffect(() => {
		fetchUsers();
	}, []);
	console.log(users);
	return (
		<div>
			{users.map(user => (
				<User key={user.login.uuid} user={user} />
			))}
		</div>
	);
};

export default UsersList;
