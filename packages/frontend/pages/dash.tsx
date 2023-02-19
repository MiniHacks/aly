import { User } from "@firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import withAuth from "../util/withAuth";
import { useUser } from "../util/useUser";

const Dash = () => {
  const { user, logout } = useUser();
  const router = useRouter();
  useEffect(() => {
    router.push("https://www.youtube.com/results?search_query=calculus");
  }, []);

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
