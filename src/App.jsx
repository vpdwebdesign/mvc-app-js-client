import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseApiUrl } from './config';

import MainControl from './components/MainControl';
import Table from './components/Table';
import Toast from './components/Toast';
import DataEntryForm from './components/DataEntryForm';

// Define the API endpoints to use to fetch and send
// student data
const studentCreateUrl = `${baseApiUrl}/create`;
const studentReadOneUrl = `${baseApiUrl}/read`;
const studentReadAllUrl = `${baseApiUrl}/readall`;
const studentUpdateUrl = `${baseApiUrl}/update`;
const studentDeleteUrl = `${baseApiUrl}/delete`;
const studentDeleteAllUrl = `${baseApiUrl}/deleteall`;

const App = () => {
  // Define the student state
  const [students, setStudents] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  // Load student data from our API service
  // when component is mounted
  useEffect(() => {
    axios.get(studentReadAllUrl)
      .then((response) => {
        setStudents(response.data);
      })
      .catch(error => console.log(error));
  }, [students]);

  const handleAddEntry = () => {
    setDisplayForm(!displayForm);
  }

  const handleSetStudentData = (data) => {
    if (data.firstname === "") {
      return;
    }
    axios.post(studentCreateUrl, data)
      .then((response) => {
        if (response.status === 200) {
          return null;
        }
      })
      .catch(error => console.log(error));
  }

  const handleDoneSubmit = () => {
    setDisplayForm(!displayForm);
  }

  const handleDeleteEntry = (studentId) => {
    axios.delete(`${studentDeleteUrl}/${studentId}`)
      .then((response) => {
        if (response.status === 200) {
          setStudents(students.filter(student => student.id !== studentId));
        }
      })
      .catch(error => console.log(error));
  }

  const handleDeleteAllEntries = () => {
    axios.delete(`${studentDeleteAllUrl}`)
      .then((response) => {
        if (response.status === 200) {
          setStudents([]);
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          {
              displayForm && <DataEntryForm setStudentData={handleSetStudentData} doneSubmit={handleDoneSubmit} />
          }
          <MainControl 
            recordsLength={students.length} 
            entryFormOpen={displayForm}
            addEntry={handleAddEntry} 
            deleteAllEntries={handleDeleteAllEntries}
          />
          <Table 
            data={students}
            deleteEntry={handleDeleteEntry}
          />
          <Toast message="Welcome to our tiny MVC app in Js!" colorScheme="success" />
        </div>
      </div>
    </div>
  );
}

export default App;
