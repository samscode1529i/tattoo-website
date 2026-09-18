
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.replace("/admin");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6">
      <div className="w-full max-w-md">
        <h1 className="font-oswald text-4xl tracking-wide text-amber-100">
          ADMIN LOGIN
        </h1>

        <p className="mt-2 font-lato text-sm text-stone-400">
          Sign in to manage your portfolio.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6 border border-ink-800 bg-ink-900 p-6 md:p-8"
        >
          <div>
            <label className="mb-2 block font-lato text-sm text-stone-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-ink-700 bg-ink-950 px-4 py-3 font-lato text-white outline-none transition-colors focus:border-[#E8750B]"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block font-lato text-sm text-stone-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-ink-700 bg-ink-950 px-4 py-3 font-lato text-white outline-none transition-colors focus:border-[#E8750B]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="font-lato text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-bone px-5 py-3 font-lato text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors hover:bg-[#E8750B] hover:text-bone disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
