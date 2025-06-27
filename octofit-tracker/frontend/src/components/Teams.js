

function Teams() {
  const [teams, setTeams] = useState([]);

  // Copilot agent mode: Codespace Django REST API endpoint suffix
  const API_SUFFIX = 'https://musical-cod-4j79pg66pq77fq59g-8000.app.github.dev/api/teams/';
  useEffect(() => {
    fetch(API_SUFFIX)
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-info">Teams</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-info">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {teams.map(team => (
                  <tr key={team.id}>
                    <td>{team.name}</td>
                    <td>{team.description}</td>
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

export default Teams;
