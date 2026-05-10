import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-8 py-6">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Job Tracker</h1>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton>
              <button className="rounded border px-4 py-2">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton>
              <button className="rounded bg-black px-4 py-2 text-white">
                Sign Up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="underline">
                Dashboard
              </Link>
              <UserButton />
            </div>
          </Show>
        </div>
      </nav>

      <section className="mx-auto mt-24 max-w-3xl text-center">
        <h2 className="text-5xl font-bold tracking-tight">
          Track your job applications in one place.
        </h2>

        <p className="mt-5 text-lg text-gray-600">
          Save companies, job titles, application links, salaries, locations,
          interview stages, and custom company logos.
        </p>

        <div className="mt-8">
          <Show when="signed-out">
            <SignUpButton>
              <button className="rounded bg-black px-5 py-3 text-white">
                Get Started
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <Link
              href="/dashboard"
              className="rounded bg-black px-5 py-3 text-white"
            >
              Go to Dashboard
            </Link>
          </Show>
        </div>
      </section>
    </main>
  );
}