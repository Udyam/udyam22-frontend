import { useAuth } from "../context/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NoAuth = (props) => {
  const router = useRouter();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      router.replace("/");
    }
  }, []);

  return props.children;
};

export default NoAuth;