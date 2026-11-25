import { Link } from 'react-router-dom';

export default function Users() {
  const users = [
    { id: 1, name: 'Sushil' },
    { id: 2, name: 'Ram' },
    { id: 3, name: 'Sita' }
  ];

  return (
    <div>
      <h1>Users List</h1>

      {users.map(user => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
}