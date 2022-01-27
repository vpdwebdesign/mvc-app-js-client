const Table = ({data, deleteEntry}) => {
  const students = data;

  const caption = () => {
    const count = students.length;
    return `Student's Performance Database: ${count} record(s)`
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table caption-top align-middle mt-2">
            <caption>{caption()}</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col" colspan="2">Performance</th>
              </tr>
            </thead>
            <tbody>
              {
                students.map((student, index) => (
                  <tr key={student.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.gender}</td>
                    <td colspan="2">
                      <table className="table table-primary align-middle m-0">
                        <thead>
                          <tr>
                            <th scope="row">Subject</th>
                            <th scope="row">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            student.subjects.map((subject, index) => (
                              <tr key={index}>
                                <td>{subject.name}</td>
                                <td>{subject.score}</td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <button 
                        type="button" 
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteEntry(student.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
