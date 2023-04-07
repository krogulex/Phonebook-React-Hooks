
export const ContactList = ({ contacts, filter, handleDeleteContact }) => {
  return (
    <div>
      {filter !== ''
        ? contacts
            .filter(f => f.name.toLowerCase().includes(filter.filterInput.toLowerCase()))
            .map(element => {
              return (
                <div
                  key={element.id}
                  id={element.id}
                  className="contact-item"
                >
                  <p>
                    <span>{element.name}: </span>
                    {element.number}
                  </p>
                  <button
                    className="contact-delete"
                    onClick={() => handleDeleteContact(element.id)}
                  >
                    delete
                  </button>
                </div>
              );
            })
        : contacts.map(element => {
            return (
              <div key={element.id} id={element.id} className="contact-item">
                <p>
                  <span>{element.name}: </span>
                  {element.number}
                </p>
                <button
                  className="contact-delete"
                  onClick={() => handleDeleteContact(element.id)}
                >
                  delete
                </button>
              </div>
            );
          })}
    </div>
  );
}