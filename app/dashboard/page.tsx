import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">
            Your saved job applications will appear here.
          </p>
        </div>

        <Link
          href="/jobs/new"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Add Job
        </Link>
      </div>

      <div className="rounded-lg border bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold">No jobs yet</h2>
        <p className="mt-2 text-gray-500">
          Once you add job applications, they will show up in this dashboard.
        </p>
      </div>
    </main>
  );
}