

function Users() {
  const [users, setUsers] = useState([]);

  // Copilot agent mode: Codespace Django REST API endpoint suffix
  const API_SUFFIX = 'https://musical-cod-4j79pg66pq77fq59g-8000.app.github.dev/api/users/';
  useEffect(() => {
    fetch(API_SUFFIX)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-warning">Users</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-warning">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
