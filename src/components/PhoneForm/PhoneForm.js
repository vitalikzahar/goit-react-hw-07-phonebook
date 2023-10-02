import { useState } from 'react';

import {
  FormButton,
  FormInput,
  InputName,
  InputNumber,
} from './PhoneForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const PhoneForm = () => {
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'number' ? setPhone(value) : setName(value);
  };

  const onSubmit = (name, phone) => {
    const contact = { name, phone };
    if (
      contactList.find(
        userCard => userCard.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`"${contact.name}  "is already in contact`);
    }

    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, phone);
    setName('');
    setPhone('');
  };
  return (
    <FormInput onSubmit={handleSubmit}>
      <label>
        Name
        <InputName
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <InputNumber
          value={phone}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <FormButton type="submit">Add contacts</FormButton>
    </FormInput>
  );
};
