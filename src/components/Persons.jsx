const Persons = ({person, remove}) => {
    return (
        <div>
            <p key={person.name}>{person.name} {person.number} <button onClick={remove}>Delete</button></p>
        </div>
    )
}

export default Persons;