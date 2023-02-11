import { useAuth } from "hooks/useAuth";

const styles = {
  container: {
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  advice: {
    fontWeight: 400,
    fontSize: 15,
    textAlign: 'center',
  },
  accent: {
    color: 'yellow',
  },
};

export default function Home() {
    const { isLoggedIn } = useAuth();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to your Phonebook!!!</h1> <br />
      <br />
      {!isLoggedIn && (
        <h2 style={styles.advice}>
          *To use the test account please use the following email and password <br /> <span style={styles.accent}>oleksandr-koval@test.mail.com</span>
        </h2>
      )}
    </div>
  );
}
