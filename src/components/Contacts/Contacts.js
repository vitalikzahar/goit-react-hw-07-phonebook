import { useDispatch, useSelector } from 'react-redux';
import { Delete } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filterUsers = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {filterUsers.map(contact => (
          <li key={contact.id}>
            {contact.name}:{contact.number}
            <Delete onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Delete>
          </li>
        ))}
      </ul>
    </div>
  );
};
