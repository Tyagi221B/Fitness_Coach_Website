"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "./ui/moving-border";
import { Input } from "./ui/input";
import { Button2 } from "./ui/moving-border2";

const UserInfoSection = () => {
	const [user, setUser] = React.useState({
		email: "",
	});
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const onSignup = async () => {
    if (loading) return; 
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success(response.data.message);
      setUser({ email: "" });
    } catch (error: any) {
      console.log("Signup failed", error.response?.data?.error || error.message);
      toast.error(
        error.response?.data?.error || "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

	useEffect(() => {
		if (user.email.length > 0 ) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="flex flex-col items-center justify-center h-full md:py-12 gap-6 mx-16 mt-6 mb-16">
			<h1 className="md:mt-0 lg:text-2xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8 text-center">
			{loading ? "Saving Your Information" : "Send Your Info To Us, And We Will Connect To You Soon."}
				</h1>
			<hr />
			<div className="flex flex-row md:gap-10 gap-3 justify-center items-center md:h-28 h-full">
				<Input
					className="p-6 text-center border border-gray-300 rounded-lg focus:outline-none text-xl focus:border-gray-600 text-black"
					id="email"
					type="text"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					placeholder="email"
				/>
				<Button
					duration={9000}
					onClick={onSignup}
                    disabled={buttonDisabled || loading}
                    loading={loading}
					borderRadius="1.75rem"
					className="bg-white  dark:bg-black text-black dark:text-yellow-300 border-neutral-200 dark:border-slate-800 lg:text-xl dark:hover:bg-yellow-500 dark:hover:text-black cursor-pointer"
				>
					{loading ?  <span className="text-green-300 text-xs">Saving ...</span> : <span className="">Submit -&gt;</span>} 
				</Button>
			</div>

			<h1 className="md:mt-0 lg:text-5xl md:text-3xl text-xl md:font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-[#c0b9ff] lg:mt-32 mt-6 text-center">
			This is the heading that will be displayed like this.
				</h1>
				<div className="md:mt-16 mt-6">
				<Button2
					duration={1000}
					borderClassName="bg-red-800 bg-yellow-400 bg-orange-400"
					className="bg-white  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 md:text-xl "
				>
					{loading ? "...." : "Button"}
				</Button2>

				</div>
				
		</div>
	);
};

export default UserInfoSection;
