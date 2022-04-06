import cookie from "cookie";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie"));  
  event.locals.theme = cookies.theme;

  const response = await resolve(event);
  return response;
};

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(event) {
  return {
    theme: event.locals.theme
  }
}