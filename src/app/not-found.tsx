import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">404</h1>

        <p className="mb-6 text-lg text-muted-foreground">
          Oops! The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
