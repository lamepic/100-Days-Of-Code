import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function login() {
  const { login } = useAuth();
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      router.push("/dashboard");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="bg-[url('../public/assets/login_bg.svg')] bg-cover h-[100vh] grid place-items-center">
      <div className="w-[60%] min-h-96 rounded bg-[#36393F] flex justify-between py-10">
        <div className="flex-[0.6] flex flex-col">
          <div className="text-center">
            <p className="text-2xl text-white">Welcome back!</p>
            <p className="text-base text-[#8e9297]">
              We're so excited to see you again!
            </p>
          </div>
          <form
            className="flex flex-col gap-3 mt-5 w-[80%] mx-auto"
            onSubmit={handleLogin}
          >
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 font-semibold">
              Email or phone number
              <input
                required
                type="email"
                className="p-3 rounded bg-[#202225] focus:outline-none"
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 mt-2 font-semibold">
              Password
              <input
                required
                type="password"
                className="p-3 rounded bg-[#202225] focus:outline-none"
                onChange={(e) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
              />
            </label>
            <p className="text-[#06A3E2] text-sm cursor-pointer">
              Forgot your password?
            </p>
            <button className="bg-[#5865F2] rounded py-2 text-[#f6f6f6]">
              Login
            </button>
            <p className="text-[#8e9297] text-sm">
              Need and account?{" "}
              <Link href="/signup">
                <a className="text-[#06A3E2]">Register</a>
              </Link>
            </p>
          </form>
        </div>
        <div className="flex-[0.4]">
          <div className="w-[80%] mx-auto flex flex-col items-center text-center">
            <div className="rounded-md overflow-hidden w-48 h-48">
              <Image src="/assets/qr_code.png" width={300} height={300} />
            </div>
            <p className="text-[#f6f6f6] text-3xl font-semibold mt-5">
              Login with QR Code
            </p>
            <p className="text-[#8e9297] text-base">
              Scan this the Discord mobile app to log in instantly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
