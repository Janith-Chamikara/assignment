import { getSession } from "../lib/utils";

export default async function ProtectedRoute() {
  const session = await getSession();
  return session ? (
    <div className="text-5xl font-bold text-green-500">
      Session will be expired after 10s
    </div>
  ) : (
    <div className="text-5xl font-bold text-red-600">
      Session cookie not found
    </div>
  );
}
