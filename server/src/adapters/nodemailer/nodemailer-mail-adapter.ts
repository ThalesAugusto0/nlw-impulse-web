import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dd959b0d925b6f",
      pass: "f45fa7381d1561"
    }
  });

export class NodemailerMailerAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Thales Augusto <thalesaugusto3@icloud.com>',
            subject,
            html: body,
    })
    }
}