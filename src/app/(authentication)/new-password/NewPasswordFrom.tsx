"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNewPasswordMutation } from "@/redux/api/authApi/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type PasswordFormInputs = {
  email: string;
  password: string;
};

const NewPasswordForm = () => {
  const [newPassword] = useNewPasswordMutation(); // Mutation hook
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PasswordFormInputs>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<PasswordFormInputs> = async (data) => {
    try {
      const res = await newPassword(data).unwrap();
      if (res) {
        console.log("New password set successfully:", res);
        alert("Password reset successfully!");
        reset(); // Clear inputs
        window.location.href = "/login"; // Redirect to login
      }
    } catch (err) {
      console.error(err);
      const error = err as FetchBaseQueryError & { data?: { msg?: string } };
      alert(error.data?.msg || "Password reset failed. Please try again.");
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Set New Password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter new password"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-4 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordForm;
