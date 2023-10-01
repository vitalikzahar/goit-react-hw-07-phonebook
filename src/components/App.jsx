import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Section } from './App.styled';

export const App = () => {
  return (
    <Section>
      <h1>Phone book</h1>
      <PhoneForm></PhoneForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <Contacts></Contacts>
    </Section>
  );
};
