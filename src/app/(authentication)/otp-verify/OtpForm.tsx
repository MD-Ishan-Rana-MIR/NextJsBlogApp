"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOtpVerifyMutation } from "@/redux/api/authApi/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/navigation";

type OtpFormInputs = {
    email: string;
    otp: string;
};

const OtpForm = () => {
    const router = useRouter();
    const [otpVerify] = useOtpVerifyMutation();
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<OtpFormInputs>({
        defaultValues: { email: "", otp: "" },
    });

    const onSubmit: SubmitHandler<OtpFormInputs> = async (data) => {
        try {
            const res = await otpVerify(data).unwrap();
            if (res) {
                console.log("OTP verification successful:", res);
                alert("OTP verified successfully!");
                router.push("/new-password"); // Redirect to login page after successful verification
                reset(); // Reset form after success
            }
        } catch (err) {
            console.error(err);
            const error = err as FetchBaseQueryError & { data?: { msg?: string } };
            alert(error.data?.msg || "OTP verification failed. Please try again.");
            reset(); // Reset form even on error
        }
    };

    return (
        <div className="flex items-center justify-center  p-4 ">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Verify OTP</h2>
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
                                    message: "Invalid email address",
                                },
                            }}
                            render={({ field }) => (
                                <Input {...field} type="email" placeholder="Enter your email" />
                            )}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* OTP Field */}
                    <div>
                        <label className="block text-sm font-medium mb-1">6-Digit OTP</label>
                        <Controller
                            name="otp"
                            control={control}
                            rules={{
                                required: "OTP is required",
                                pattern: {
                                    value: /^\d{6}$/,
                                    message: "OTP must be 6 digits",
                                },
                            }}
                            render={({ field }) => (
                                <Input {...field} type="text" maxLength={6} placeholder="Enter 6-digit OTP" />
                            )}
                        />
                        {errors.otp && (
                            <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-4 cursor-pointer"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Verifying..." : "Verify OTP"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default OtpForm;
