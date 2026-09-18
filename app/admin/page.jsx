"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const categories = [
  "Fine Line",
  "Black & Bold",
  "Colour",
  "Anime",
  "Arabic",
  "Lettering",
];

export default function AdminPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      setUser(user);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please choose an image.");
      return;
    }

    if (!category) {
      setMessage("Please choose a category.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const fileExtension = file.name.split(".").pop();

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2)}.${fileExtension}`;

      const { error: storageError } = await supabase.storage
        .from("portfolio-images")
        .upload(fileName, file);

      if (storageError) {
        throw storageError;
      }

      const { data: publicUrlData } = supabase.storage
        .from("portfolio-images")
        .getPublicUrl(fileName);

      const imageUrl = publicUrlData.publicUrl;

      const { error: databaseError } = await supabase
        .from("portfolio")
        .insert({
          image_url: imageUrl,
          category: category,
          title: title || null,
        });

      if (databaseError) {
        throw databaseError;
      }

      setMessage("Tattoo uploaded successfully!");

      setFile(null);
      setTitle("");
      setCategory("");

      e.target.reset();
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink-950">
        <p className="font-lato text-sm text-stone-400">
          Loading...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink-950 px-6 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 border-b border-ink-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-oswald text-4xl tracking-wide text-amber-100">
              ADMIN DASHBOARD
            </h1>

            <p className="mt-2 font-lato text-sm text-stone-400">
              {user?.email}
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="border border-white/30 px-5 py-2.5 font-lato text-sm uppercase tracking-wide text-white transition-colors hover:border-[#E8750B] hover:text-[#E8750B]"
          >
            Logout
          </button>
        </div>

        <section className="mt-12 max-w-2xl">
          <h2 className="font-oswald text-3xl tracking-wide text-amber-100">
            ADD TATTOO
          </h2>

          <p className="mt-2 font-lato text-sm text-stone-400">
            Upload a new design to your portfolio.
          </p>

          <form
            onSubmit={handleUpload}
            className="mt-8 space-y-6 border border-ink-800 bg-ink-900 p-6 md:p-8"
          >

            <div>
              <label className="mb-2 block font-lato text-sm text-stone-300">
                Tattoo Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFile(e.target.files?.[0] || null)
                }
                className="block w-full cursor-pointer border border-ink-700 bg-ink-950 px-4 py-3 font-lato text-sm text-stone-300 file:mr-4 file:border-0 file:bg-bone file:px-4 file:py-2 file:font-semibold file:text-ink-950"
              />
            </div>

            <div>
              <label className="mb-2 block font-lato text-sm text-stone-300">
                Title <span className="text-stone-500">(optional)</span>
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Rose Sleeve"
                className="w-full border border-ink-700 bg-ink-950 px-4 py-3 font-lato text-white outline-none transition-colors focus:border-[#E8750B]"
              />
            </div>

            <div>
              <label className="mb-2 block font-lato text-sm text-stone-300">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full border border-ink-700 bg-ink-950 px-4 py-3 font-lato text-white outline-none transition-colors focus:border-[#E8750B]"
              >
                <option value="">Select category</option>

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {message && (
              <p className="font-lato text-sm text-stone-300">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-bone px-5 py-3 font-lato text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors hover:bg-[#E8750B] hover:text-bone disabled:cursor-not-allowed disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Upload Tattoo"}
            </button>

          </form>
        </section>
      </div>
    </main>
  );
}
