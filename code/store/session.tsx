import React from "react";
import { useStorageState } from "./secureStorage";
import { User } from "../types/user";
import { useRouter } from "one";

const AuthContext = React.createContext<{
  sendCode: ({ email }: { email: string }) => Promise<{ success: boolean }>;
  loginWithCode: ({
    email,
    code,
  }: {
    email: string;
    code: string;
  }) => Promise<{ user: User | null; success: boolean; error?: string }>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  sendCode: () => Promise.resolve({ success: false }),
  loginWithCode: () =>
    Promise.resolve({ user: null, success: false, error: "Unknown error" }),
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const router = useRouter();

  return (
    <AuthContext.Provider
      value={{
        sendCode: async ({ email }) => {
          // TOOD: Call API to send OTP code
          await new Promise((resolve) => setTimeout(resolve, 2500));
          return Promise.resolve({ success: true });
        },
        loginWithCode: async ({ email, code }) => {
          // TODO: Call API to verify OTP code
          const fakeJWT =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMxIiwiaWF0IjoxNTE2MjM5MDIyfQ.gx8qwZ5PGV_8DLVzHyqw4t1qA_3CgXz_xw9N8HE3c4A";
          let user = { id: "1231" } satisfies User;
          setSession(fakeJWT);
          router.replace("/(tabs)");
          return Promise.resolve({ user, success: true });
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
