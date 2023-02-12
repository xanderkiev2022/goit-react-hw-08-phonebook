import { useAuth } from 'hooks/useAuth';
import { Container, Title, Advice, Accent } from './Home.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Title>Welcome to your Phonebook!!!</Title> <br />
      <br />
      {!isLoggedIn && (
        <Advice>
          *To use the test account please use the following email and password <br />
          <Accent>oleksandr-koval@test.mail.com</Accent>
        </Advice>
      )}
    </Container>
  );
}
