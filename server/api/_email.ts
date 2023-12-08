import { createTransport } from "nodemailer";

const { emailUser, emailPass } = useRuntimeConfig();

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

export default async function main(
  email: string,
  name: string,
  message: string
) {
  const info = await transporter.sendMail({
    to: "hamza.es.saadi@proton.me",
    subject: `name :  ${name} /  email : ${email}`,
    text: `${message}`,
  });

  return info;
}
