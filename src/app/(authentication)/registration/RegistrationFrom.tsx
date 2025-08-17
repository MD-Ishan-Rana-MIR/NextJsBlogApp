"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRegisterUserMutation } from "@/redux/api/authApi/authApi";
import { UserRegisterPayload } from "@/utility/type/userType";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserRegisterPayload>();

    // Correctly initialize the RTK Query mutation hook
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const onSubmit: SubmitHandler<UserRegisterPayload> = async (data) => {
        try {
            const response = await registerUser(data).unwrap();
            if (response) {
                alert("Registration successful! Please login.");
                reset();
                // window.location.href = "/login";
            }
        } catch (err) {
            console.error(err);
            const error = err as FetchBaseQueryError & { data?: { msg?: string } };
            alert(error.data?.msg || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center p-4 ">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <Input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

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

                    {/* Login Link */}
                    <div className="text-sm text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full cursor-pointer mt-4" disabled={isLoading}>
                        {isLoading ? "Registering..." : "Register"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
