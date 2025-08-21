
const PersonForm = ({
    handleAdd,
    newName,
    valueChange, 
    newNumber, 
    numberChange
}) => {
    return(
        <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={valueChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;
