

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  // Copilot agent mode: Codespace Django REST API endpoint suffix
  const API_SUFFIX = 'https://musical-cod-4j79pg66pq77fq59g-8000.app.github.dev/api/workouts/';
  useEffect(() => {
    fetch(API_SUFFIX)
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-danger">Workouts</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-danger">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map(workout => (
                  <tr key={workout.id}>
                    <td>{workout.name}</td>
                    <td>{workout.description}</td>
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

export default Workouts;
