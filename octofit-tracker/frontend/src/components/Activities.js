
function Activities() {
  const [activities, setActivities] = useState([]);

  // Copilot agent mode: Codespace Django REST API endpoint suffix
  const API_SUFFIX = 'https://musical-cod-4j79pg66pq77fq59g-8000.app.github.dev/api/activity/';
  useEffect(() => {
    fetch(API_SUFFIX)
      .then(res => res.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-primary">Activities</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {activities.map(activity => (
                  <tr key={activity.id}>
                    <td>{activity.name}</td>
                    <td>{activity.description}</td>
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

export default Activities;
