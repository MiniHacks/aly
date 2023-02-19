import { User } from "@firebase/auth";
import withAuth from "../util/withAuth";
import { useUser } from "../util/useUser";

const Dash = () => {
  const { user, logout } = useUser();

  const u = user as unknown as User;
  return (
    <div>
      <div>Private</div>
      {u?.email && (
        <div>
          <div>Email: {u.email}</div>
          <button type={"button"} onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default withAuth(Dash);
