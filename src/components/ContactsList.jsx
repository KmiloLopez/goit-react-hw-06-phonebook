import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/contacts/slice';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);

  const filteredbyName = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <ul>
      <h1>{filteredbyName}</h1>
      {contacts
        .filter(contact =>
          contact.contactname.toLowerCase().includes(filteredbyName)
        )

        .map(contact => (
          <li key={contact.id}>
            {contact.contactname} : {contact.phoneNum}
            <button
              onClick={() => {
                dispatch(deleteTask(contact.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactsList;
