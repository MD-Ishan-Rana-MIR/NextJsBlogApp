"use client";
import Cookies from "js-cookie";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserLoginPayload } from "@/utility/type/userType";
import { useLoginUserMutation } from "@/redux/api/authApi/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";



const LoginForm = () => {
    const [loginUser] = useLoginUserMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UserLoginPayload>();

    const onSubmit: SubmitHandler<UserLoginPayload> = async (data) => {
        try {
            const res = await loginUser(data).unwrap();
            console.log(res);

            if (res) {
                alert("Login successful!");

                // ✅ Store token in localStorage
                localStorage.setItem("token", res.token);

                // ✅ Store token in cookie (expires in 1 day)
                Cookies.set("token", res.token, { expires: 1, sameSite: "Strict" });

                // Reset form fields
                reset();

                // Redirect to homepage
                window.location.href = "/";
            }
        } catch (err) {
            console.error(err);

            const error = err as FetchBaseQueryError & { data?: { msg?: string } };
            alert(error.data?.msg || "Login failed. Please try again.");

            // Reset form fields even if login fails
            reset();
        }
    };

    return (
        <div className=" flex items-center justify-center  p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center text-sm">
                        <Link
                            href="/email-verify"
                            className="text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                        <Link
                            href="/registration"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            No account? Register
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full mt-4 cursor-pointer " disabled={isSubmitting}>
                        {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </div>
        </div>
    );
}


export default LoginForm;