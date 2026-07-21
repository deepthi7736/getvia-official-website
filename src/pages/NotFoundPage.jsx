import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="font-mono text-sm text-[#858585]">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-[#141414]">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-[#646464]">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-7 rounded-xl bg-[#007A1F] px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#006619]"
      >
        Back to home
      </Link>
    </main>
  );
}
