const MainControl = ({recordsLength, entryFormOpen, addEntry, deleteAllEntries}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-grid">
          <button 
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => addEntry()}
          >
            {entryFormOpen ? "Cancel" : "Add"}
          </button>
        </div>
        <div className="col d-grid">
          <button 
            type="button"
            className="btn btn-danger btn-lg"
            disabled={recordsLength === 0}
            onClick={() => deleteAllEntries()}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainControl;
