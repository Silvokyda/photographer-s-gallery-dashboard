import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Welcome</Typography>
          {/* Add the Link component for "Sign in" */}
          <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;