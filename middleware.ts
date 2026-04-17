import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
// poople auth routes must stay public — main /poople page handles redirect in client
const isPoopleAuth = createRouteMatcher(["/poople/sign-in(.*)", "/poople/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPoopleAuth(req)) return; // allow through — Clerk handles these
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
