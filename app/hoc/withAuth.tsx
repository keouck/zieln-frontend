"use client";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";
import { useUser } from "@clerk/clerk-react";
import Loader from "../components/globalcomponents/Loader";

type WithAuthProps = {
  // Define any props you want to pass to the wrapped component here
};

function withAuth<P extends WithAuthProps>(Component: ComponentType<P>) {
  const AuthenticatedComponent = (props: P) => {
    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && !isSignedIn) {
        router.push("/sign-in");
      }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded || !isSignedIn) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
}

export default withAuth;
