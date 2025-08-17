"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEmailVerifyMutation } from "@/redux/api/authApi/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/navigation";

type EmailFormInputs = {
  email: string;
};

const EmailVerifyFrom = () => {
  const router = useRouter();
  const [emailVerify] = useEmailVerifyMutation(); // Assuming you have a mutation hook for email verification
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormInputs>();

  const onSubmit: SubmitHandler<EmailFormInputs> = async (data) => {
    try {
      const res = await emailVerify(data).unwrap();
      if (res) {
        console.log("Email verification successful:", res);
        router.push("/otp-verify"); // Redirect to success page
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
    <div className="flex items-center justify-center p-4 ">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Enter Your Email</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <Button type="submit" className="w-full cursor-pointer mt-4" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerifyFrom;
