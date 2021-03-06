import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from 'react-bootstrap/Button';
import { Navbar, Container } from 'react-bootstrap';
import { persistor } from 'redux/store';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Navbar.Text>Здравия тебе о, {name}</Navbar.Text>

      <Button
        className="m-2"
        variant="warning"
        type="button"
        onClick={() => {
          console.log('Log OUT');
          persistor.purge();
          return dispatch(authOperations.logOut());
        }}
      >
        Выйти
      </Button>
    </Container>
  );
}
