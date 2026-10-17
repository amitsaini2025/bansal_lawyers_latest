import { redirect } from "next/navigation";
import { sendLoginCodeAction, verifyLoginCodeAction } from "@/lib/admin/actions";
import { currentLoginCode, getCurrentAdmin } from "@/lib/admin/auth";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { ADMIN_OTP_EMAIL } from "@/lib/admin/otp";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[]; notice?: string | string[] }>;
}) {
  if (await getCurrentAdmin()) redirect("/admin/dashboard");
  const params = await searchParams;
  const error = messageOf(params.error);
  const notice = messageOf(params.notice);
  const pending = await currentLoginCode();

  return (
    <main className="admin-login">
      <div className="admin-login__card">
        <h1>Staff sign in</h1>
        <p className="admin-lead">
          {pending
            ? `Enter the six-digit code sent to ${ADMIN_OTP_EMAIL}. It expires in 10 minutes.`
            : `A six-digit sign-in code will be emailed to ${ADMIN_OTP_EMAIL}.`}
        </p>
        <Flash notice={notice} error={error} />
        {pending ? (
          <>
            <form action={verifyLoginCodeAction}>
              <label>
                Sign-in code
                <input
                  className="admin-login__code"
                  name="code"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  required
                />
              </label>
              <button type="submit">Sign in</button>
            </form>
            <form action={sendLoginCodeAction}>
              <button className="admin-button--ghost" type="submit">
                Email a new code
              </button>
            </form>
          </>
        ) : (
          <form action={sendLoginCodeAction}>
            <button type="submit">Email sign-in code</button>
          </form>
        )}
      </div>
    </main>
  );
}
