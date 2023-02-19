import { AuthProvider } from "@arcana/auth";

const auth = new AuthProvider(process.env.NEXT_PUBLIC_ARCANA_APP_ID, {
  theme: "light", 
});

export default function getAuth () {
  return auth;
};
