import {useState, useRef} from 'react';

const initialData = {
  firstname: "",
  lastname: "",
  gender: "Female",
  subjects: [
    {
      name: "English",
      score: 0
    },
    {
      name: "Kiswahili",
      score: 0
    },
    {
      name: "Mathematics",
      score: 0
    }
  ] 
}

const DataEntryForm = ({setStudentData, doneSubmit}) => {

  const [data, setData] = useState(initialData);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const genderRef = useRef();
  const englishScoreRef = useRef();
  const kiswahiliScoreRef = useRef();
  const mathScoreRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (firstNameRef.current.value === "" || lastNameRef.current.value === "") {
      alert("At least provide a first and last name. Gender will be set to 'female' and scores to 0 if not set.") ;
    } else {
      setData(Object.assign(initialData, {
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
        gender: genderRef.current.value,
        subjects: [
          {
            name: "English",
            score: parseInt(englishScoreRef.current.value)
          },
          {
            name: "Kiswahili",
            score: parseInt(kiswahiliScoreRef.current.value)
          },
          {
            name: "Mathematics",
            score: parseInt(mathScoreRef.current.value)
          }
        ]
      }))   
      
      setStudentData(data);
      doneSubmit();
    }
  }

  return (
    <form className="row g-3 m-4">
      <div className="col-md-4">
        <label for="inputFirstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="inputFirstName" ref={firstNameRef} required />
      </div>
      <div className="col-md-4">
        <label for="inputLastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="inputLastName" ref={lastNameRef} required />
      </div>
      <div className="col-md-4">
        <label for="inputGender" className="form-label">Gender</label>
        <select id="inputGender" className="form-select" ref={genderRef} required>
          <option selected>Female</option>
          <option>Male</option>
        </select>
      </div>
      <div className="col-md-12">
        <label className="visually-hidden" for="englishInputGroup">English</label>
        <div className="input-group">
        <div className="input-group-text">English</div>
        <input type="text" className="form-control" id="englishInputGroup" placeholder="Score" ref={englishScoreRef} required />
        </div>
      </div>
      <div className="col-md-12">
        <label className="visually-hidden" for="kiswahiliInputGroup">Kiswahili</label>
        <div className="input-group">
        <div className="input-group-text">Kiswahili</div>
        <input type="text" className="form-control" id="kiswahiliInputGroup" placeholder="Score" ref={kiswahiliScoreRef} required />
        </div>
      </div>
      <div className="col-md-12">
        <label className="visually-hidden" for="mathInputGroup">Mathematics</label>
        <div className="input-group">
        <div className="input-group-text">Mathematics</div>
        <input type="text" className="form-control" id="mathInputGroup" placeholder="Score" ref={mathScoreRef} required />
        </div>
      </div>
      <div className="col-12">
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      </div>
      <br />
      <hr />
    </form>
  );
}

export default DataEntryForm;
