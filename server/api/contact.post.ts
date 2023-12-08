import Response from "./_response";
import sendEmail from "./_email";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const name = body.name,
    message = body.message,
    email = body.email;

  try {
    const info = await sendEmail(email, name, message);
    return Response.create(true, "email has been sent!");
  } catch (e: any) {
    console.error("error\n", e);
    return Response.create(false, e.message);
  }
});
