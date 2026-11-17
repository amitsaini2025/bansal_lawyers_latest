import { redirect } from "next/navigation";
import { sendLoginCodeAction, verifyLoginCodeAction, writerPasswordLoginAction } from "@/lib/admin/actions";
import { homeForRole } from "@/lib/admin/access";
import { currentLoginCode, getCurrentAdmin } from "@/lib/admin/auth";
import { Flash, messageOf } from "@/components/admin/AdminBits";
import { ADMIN_OTP_EMAIL, CONTENT_WRITER_EMAIL } from "@/lib/admin/otp";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[]; notice?: string | string[] }>;
}) {
  const admin = await getCurrentAdmin();
  if (admin) redirect(homeForRole(admin.role));
  const params = await searchParams;
  const error = messageOf(params.error);
  const notice = messageOf(params.notice);
  const pending = await currentLoginCode();
  const pendingEmail = pending?.email;

  return (
    <main className="admin-login">
      <div className="admin-login__card">
        <h1>Staff sign in</h1>
        <p className="admin-lead">
          {pending
            ? `Enter the six-digit code sent to ${pendingEmail ?? "your email"}. It expires in 10 minutes.`
            : "Staff sign in with an emailed code. Blogs and recent cases use email and password."}
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
                  autoCapitalize="off"
                  spellCheck={false}
                  required
                />
              </label>
              <button type="submit">Sign in</button>
            </form>
            <form action={sendLoginCodeAction}>
              {pendingEmail ? <input type="hidden" name="email" value={pendingEmail} /> : null}
              <button className="admin-button--ghost" type="submit">
                Email a new code
              </button>
            </form>
          </>
        ) : (
          <>
            <form action={sendLoginCodeAction}>
              <input type="hidden" name="email" value={ADMIN_OTP_EMAIL} />
              <button type="submit">Email staff sign-in code</button>
            </form>
            <form action={writerPasswordLoginAction}>
              <p className="admin-login__heading">Blogs and recent cases</p>
              <label>
                Email
                <input name="email" type="email" autoComplete="username" defaultValue={CONTENT_WRITER_EMAIL} required />
              </label>
              <label>
                Password
                <input name="password" type="password" autoComplete="current-password" required />
              </label>
              <button type="submit">Sign in</button>
            </form>
            <p className="admin-note">
              Staff codes go to {ADMIN_OTP_EMAIL}. Blogs and recent cases sign in with email and password and can edit and publish those two areas only.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
