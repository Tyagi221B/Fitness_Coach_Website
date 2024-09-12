"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "./ui/moving-border";
import { Input } from "./ui/input";

const UserInfoSection = () => {
	const [user, setUser] = React.useState({
		email: "",
		phone: "",
	});
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const onSignup = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/users/signup", user);
			console.log("Signup success", response.data);
			toast.success(response.data.message);
		} catch (error: any) {
			console.log("Signup failed", error.response?.data?.error || error.message);
        toast.error(error.response?.data?.error || "An unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user.email.length > 0 && user.phone.length >= 10) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	return (
		<div className="flex flex-col items-center justify-center h-full py-12 gap-6">
			<h1 className="md:mt-0 lg:text-2xl md:text-2xl md:font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:mt-12 mt-8">
			{loading ? "Saving Your Information" : "Send Your Info To Us"}
				</h1>
			<hr />
			<div className="flex flex-row gap-10">
				<Input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
					id="email"
					type="text"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					placeholder="email"
				/>
				<Input
					className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
					id="phone"
					type="tel"
					value={user.phone}
					onChange={(e) => setUser({ ...user, phone: e.target.value })}
					placeholder="phone"
				/>
				<Button
					duration={1000}
					onClick={onSignup}
                    disabled={buttonDisabled || loading}
                    loading={loading}
					borderClassName="bg-red-800 bg-yellow-400 bg-orange-400"
					borderRadius="1.75rem"
					className="bg-white  dark:bg-black text-black dark:text-yellow-300 border-neutral-200 dark:border-slate-800 md:text-xl"
				>
					{loading ? "...." : "Submit"} -&gt;
				</Button>
			</div>
		</div>
	);
};

export default UserInfoSection;
