import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function signup() {
  const { user, signup } = useAuth();
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(data.email, data.password);
      router.push("/dashboard");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="bg-[url('../public/assets/login_bg.svg')] bg-cover h-[100vh] grid place-items-center">
      <div className="w-[35%] rounded bg-[#36393F] py-10">
        <div className="flex flex-col">
          <div className="text-center">
            <p className="text-2xl text-white font-semibold">
              Create an Account
            </p>
          </div>
          <form
            className="flex flex-col gap-3 mt-5 w-[90%] mx-auto"
            onSubmit={handleSignup}
          >
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 font-bold">
              Email
              <input
                type="text"
                className="p-3 rounded bg-[#202225] focus:outline-none"
                onChange={(e) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 font-semibold">
              Username
              <input
                type="text"
                className="p-3 rounded bg-[#202225] focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 mt-2 font-semibold">
              Password
              <input
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
            <label className="flex flex-col text-[#8e9297] uppercase text-xs gap-1 mt-2 font-semibold">
              Date of Birth
              <div className="flex justify-between">
                <select className="focus:outline-none w-[30%] py-3 rounded p-2 bg-[#2f3136]">
                  <option></option>
                  <option>January</option>
                </select>
                <select className="focus:outline-none w-[30%] py-3 rounded p-2 bg-[#2f3136]">
                  <option></option>
                  <option>1</option>
                </select>
                <select className="focus:outline-none w-[30%] py-3 rounded p-2 bg-[#2f3136]">
                  <option></option>
                  <option>2019</option>
                </select>
              </div>
            </label>
            <button className="bg-[#5865F2] rounded py-2 text-[#f6f6f6] mt-4">
              Continue
            </button>
            <p className="text-sm">
              <Link href="/login">
                <a className="text-[#06A3E2]">Already have an account?</a>
              </Link>
            </p>
            <p className="text-[#8e9297] text-xs">
              By registering, you agree to Discord's Terms of Service and
              Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signup;
