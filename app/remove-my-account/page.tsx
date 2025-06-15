"use client";
export const dynamic = "force-dynamic";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function RemoveAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const router = useRouter();
  const supabase = createClientComponentClient();

  // Step 1: Send OTP
  const handleSendOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
      });
      if (otpError) {
        setError(`Failed to send code: ${otpError.message}`);
      } else {
        setOtpSent(true);
      }
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOTP = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });
      if (verifyError) {
        setError(`Invalid code: ${verifyError.message}`);
      } else {
        setAuthenticated(true);
        setShowConfirmation(true);
      }
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3: Directly insert into `to_be_deleted`
  const handleDeleteAccount = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // 1) Get session (must be set after OTP verification)
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Session expired. Please verify again.");
        setAuthenticated(false);
        setOtpSent(false);
        setIsLoading(false);
        return;
      }

      // 2) Insert a row into `to_be_deleted`
      const { error: insertError } = await supabase
        .from("to_be_deleted")
        .insert({ user_id: session.user.id });
      if (insertError) {
        setError(`Failed to mark account for deletion: ${insertError.message}`);
        setIsLoading(false);
        return;
      }

      // 3) Sign out and redirect
      await supabase.auth.signOut();
      router.push("/account-deleted");
    } catch (err) {
      console.error(err);
      setError("Unexpected error. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Screens remain the same as before:
  const renderInitialScreen = () => (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What happens when you delete your account?</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>All your personal information will be permanently deleted</li>
          <li>Your profile and data will be completely removed from our systems</li>
          <li>You won't be able to recover your account or data after deletion</li>
          <li>Your data will be deleted within 30 days of request</li>
        </ul>
      </div>
      <button
        onClick={() => setShowConfirmation(true)}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        I Want To Delete My Account
      </button>
      <button
        onClick={() => router.push("/")}
        className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
      >
        Cancel
      </button>
    </div>
  );

  const renderAuthScreen = () => (
    <div>
      <p className="mb-4 font-medium">
        To verify your identity, enter your account’s email:
      </p>
      {error && <p className="mb-4 text-red-600 bg-red-50 p-2 rounded">{error}</p>}
      {!otpSent ? (
        <>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            onClick={handleSendOTP}
            disabled={isLoading || !email}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
          >
            {isLoading ? "Sending…" : "Send Verification Code"}
          </button>
        </>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-green-600 mb-2">Code sent to {email}</p>
            <label htmlFor="otp" className="block mb-2 text-sm font-medium">Enter Verification Code</label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            onClick={handleVerifyOTP}
            disabled={isLoading || !otp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
          >
            {isLoading ? "Verifying…" : "Verify Code"}
          </button>
          <button
            onClick={() => { setOtpSent(false); setOtp(""); }}
            disabled={isLoading}
            className="w-full mt-2 text-blue-600 hover:underline text-sm"
          >
            Change email or resend code
          </button>
        </>
      )}
      <button
        onClick={() => setShowConfirmation(false)}
        disabled={isLoading}
        className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded disabled:opacity-50"
      >
        Cancel
      </button>
    </div>
  );

  const renderConfirmationScreen = () => (
    <div>
      <p className="mb-4 text-red-600 font-medium">
        Are you sure you want to permanently delete your account?
      </p>
      {error && <p className="mb-4 text-red-600 bg-red-50 p-2 rounded">{error}</p>}
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded mb-4">
        <p className="text-yellow-800">This action cannot be undone.</p>
      </div>
      <button
        onClick={handleDeleteAccount}
        disabled={isLoading}
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        {isLoading ? "Processing…" : "Yes, Permanently Delete My Account"}
      </button>
      <button
        onClick={() => { setShowConfirmation(false); setAuthenticated(false); }}
        disabled={isLoading}
        className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded disabled:opacity-50"
      >
        No, Keep My Account
      </button>
    </div>
  );

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Delete Your Account</h1>
      {!showConfirmation && renderInitialScreen()}
      {showConfirmation && !authenticated && renderAuthScreen()}
      {showConfirmation && authenticated && renderConfirmationScreen()}
    </div>
  );
}