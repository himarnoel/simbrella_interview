import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

// type Props = {};

const Login = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  // const [login, { data, error, isLoading }] = useLoginMutation();
  // const router = useRouter();

  const handleSubmit = async () => {
    //   e.preventDefault();
    //   try {
    //     await login({ email, password }).unwrap();
    //     router.push("/admin/dashboard");
    //     toast.success("Login successful");
    //   } catch (err) {
    //     console.error("Login failed:", err);
    //     toast.error(err?.data?.message || "Something went wrong");
    //   }
  };
  return (
    <div className=" flex flex-col h-screen items-start  ">
      <div className="flex flex-1 w-full  gap-4 mb-4 flex-col items-center justify-center">
      
        <div className="flex flex-col mt-10 gap-4 rounded-lg border border-[#3438a1] bg-[#fff]   sh p-8 pb-10 sm:p-10 sm:pb-12 w-11/12 max-w-md">
          <p className="text-xl md:text-3xl text-center text-[#2D3192] font-bold font-display">
            Login
          </p>
          <p className="text-sm font-body text-gray-700 text-center">
            Securely login to access the admin dashboard.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 pr-2 md:py-3 md:pr-4 rounded-lg bg-white border border-[#d0d3d9] border-solid text-gray-900 outline-none pl-3 md:pl-4"
              />
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="password"
                className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
              >
                Password
              </label>
              <input
                type={isVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 pr-2 md:py-3 md:pr-4 rounded-lg bg-white border border-[#d0d3d9] border-solid text-gray-900 outline-none pl-3 md:pl-4"
              />
              <button
                type="button"
                className="bottom-4 right-2 absolute text-xl"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                {isVisible ? <LuEye  className="text-[#667085]" /> : <LuEyeOff  className="text-[#667085]" />}
              </button>
            </div>
            <button
              type="submit"
              className="disabled:opacity-75 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-xl w-full flex flex-col md:flex-row items-center justify-center pt-4 py-3 px-10 font-display text-sm md:text-sm uppercase bg-[#2D3192] font-bold text-white hover:bg-primary-500 mt-8"
              // disabled={isLoading}
            >
              {"Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
