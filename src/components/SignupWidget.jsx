"use client";
import PropTypes from "prop-types";
import { useState } from "react";

const SignupWidget = ({ simulateNetworkRequestTime }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      className="flex flex-col p-6 border border-gray-300 rounded-md shadow-md w-full max-w-lg gap-3"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <h2 className="flex m-0 text-2xl font-bold text-gray-800">
        <img src="/envelope.svg" alt="Envelope" className="w-5 mr-2"></img>Stay up to date
      </h2>
      {isSubscribed && <p className="text-black">{message}</p>}
      {!isSubscribed && (
        <>
          <p className="text-base text-gray-500">
            Get notified when I publish something new, and unsubscribe at any time.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md flex-1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={busy}
            />
            <button
              type="submit"
              className={` w-16 text-center rounded-md bg-black text-white leading-4 text-sm ${
                busy ? "cursor-not-allowed opacity-70" : "hover:bg-black hover:opacity-80"
              }`}
              disabled={busy}
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </div>
          {message && !isSubscribed && <p className="text-red-600">{message}</p>}
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
