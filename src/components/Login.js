import { Auth, useAuth } from "@arcana/auth-react";
import { useRouter } from "next/router";


export default function Login() {
  const router = useRouter();
  const auth = useAuth();

  const onLogin = () => {
    // Route to authenticated page
    router.push("/home")
  }
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"dark"} onLogin={onLogin}/>
        </div>
      )}
    </div>
  );
}

