"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-950 px-6">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <h1 className="font-oswald text-5xl tracking-wide text-amber-100">
            ADMIN
          </h1>

          <p className="mt-3 font-lato text-sm text-stone-400">
            Sign in to manage your portfolio.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="border border-ink-800 bg-ink-900 p-8"
        >
          <div className="space-y-6">
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
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}