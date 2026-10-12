import { redirect } from "next/navigation";
import { loginAction } from "@/lib/admin/actions";
import { getCurrentAdmin } from "@/lib/admin/auth";
import { messageOf } from "@/components/admin/AdminBits";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  if (await getCurrentAdmin()) redirect("/admin/dashboard");
  const error = messageOf((await searchParams).error);

  return (
    <main className="admin-login">
      <form action={loginAction}>
        <h1>Staff sign in</h1>
        <p className="admin-lead">Sign in with the staff account below.</p>
        {error ? <p className="admin-flash admin-flash--bad">{error}</p> : null}
        <label>
          Email
          <input name="email" type="email" autoComplete="username" defaultValue="admin@bansallawyers.com.au" required />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" defaultValue="C00lins@278" required />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
