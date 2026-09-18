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

  const [portfolioImages, setPortfolioImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

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

      fetchPortfolio();
    };

    checkUser();
  }, [router]);

  const fetchPortfolio = async () => {
    setLoadingImages(true);

    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching portfolio:", error);
      setLoadingImages(false);
      return;
    }

    setPortfolioImages(data || []);
    setLoadingImages(false);
  };

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

      fetchPortfolio();
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Something went wrong.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (image) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tattoo?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(image.id);
    setMessage("");

    try {
      const imagePath = image.image_url.split(
        "/storage/v1/object/public/portfolio-images/"
      )[1];

      if (!imagePath) {
        throw new Error("Could not determine image storage path.");
      }

      const { error: storageError } = await supabase.storage
        .from("portfolio-images")
        .remove([imagePath]);

      if (storageError) {
        throw storageError;
      }

      const { error: databaseError } = await supabase
        .from("portfolio")
        .delete()
        .eq("id", image.id);

      if (databaseError) {
        throw databaseError;
      }

      setPortfolioImages((current) =>
        current.filter((item) => item.id !== image.id)
      );

      setMessage("Tattoo deleted successfully!");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Could not delete tattoo.");
    } finally {
      setDeletingId(null);
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

        {/* HEADER */}
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

        {/* ADD TATTOO */}
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

        {/* MANAGE PORTFOLIO */}
        <section className="mt-20">
          <div className="border-b border-ink-800 pb-6">
            <h2 className="font-oswald text-3xl tracking-wide text-amber-100">
              MANAGE PORTFOLIO
            </h2>

            <p className="mt-2 font-lato text-sm text-stone-400">
              Delete tattoos from your portfolio.
            </p>
          </div>

          {loadingImages ? (
            <p className="py-12 text-center font-lato text-sm text-stone-400">
              Loading portfolio...
            </p>
          ) : portfolioImages.length === 0 ? (
            <p className="py-12 text-center font-lato text-sm text-stone-400">
              No tattoos uploaded yet.
            </p>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {portfolioImages.map((image) => (
                <div
                  key={image.id}
                  className="group overflow-hidden border border-ink-800 bg-ink-900"
                >
                  <div className="aspect-[222/278] overflow-hidden">
                    <img
                      src={image.image_url}
                      alt={image.title || `${image.category} tattoo`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <p className="truncate font-lato text-xs font-semibold uppercase tracking-wide text-amber-100">
                      {image.title || "Untitled"}
                    </p>

                    <p className="mt-1 font-lato text-[10px] uppercase tracking-wider text-stone-500">
                      {image.category}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleDelete(image)}
                      disabled={deletingId === image.id}
                      className="mt-3 w-full border border-red-500/40 px-3 py-2 font-lato text-[10px] font-semibold uppercase tracking-wide text-red-400 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {deletingId === image.id
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
}