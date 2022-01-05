import { useMoralis } from "react-moralis";
import styles from '../styles/UserHeader.module.css';

const UserHeader = () => {
  const { user, logout } = useMoralis();

  return (
    <div className={styles.user}>
      <h1>Welcome {user.get("username")} !</h1>
      <button className="btn btn-secondary" onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default UserHeader;