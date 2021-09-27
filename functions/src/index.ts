import * as functions from "firebase-functions";

// Initialize Firebase Admin
import * as admin from "firebase-admin";
admin.initializeApp();
export const db = admin.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

import * as nodemailer from "nodemailer";
// need new

const mailCred = functions.config().mail_cred;

const transporter = nodemailer.createTransport({
  host: mailCred.host,
  port: mailCred.port,
  secure: mailCred.secure,
  service: mailCred.service,
  auth: {
    user: mailCred.user,
    pass: mailCred.pass,
  },
});

export const sendMail = functions.https.onCall(
    async (data: any) => {
      const mailOptions = {
        from: mailCred.user,
        to: mailCred.user,
        subject: "TheCoolNerdInquiry",
        text: data.body,
      };
      let status: any;
      await transporter.sendMail(mailOptions, function(error: any) {
        if (error) {
          status = error;
        } else {
          status = "success";
        }
        return status;
      });
    }
);
