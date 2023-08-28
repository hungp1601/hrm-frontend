export default function ({ store, redirect, route }) {
  const allowedRoutes = ['forgot-password', 'sign-up'];

  if (!allowedRoutes.includes(route.name)) {
    if (!store.state.auth.loggedIn) {
      return redirect("/auth/login");
    }
  }
}