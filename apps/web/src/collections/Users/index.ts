import type { CollectionConfig } from "payload";
import { authenticated } from "~/access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  auth: {
    forgotPassword: {
      generateEmailHTML: ({ token, user } = {}) => {
        // TODO: this is a placeholder. You can customize this email template.
        // Use the token provided to allow your user to reset their password
        const resetPasswordURL = `https://yourfrontend.com/reset-password?token=${token}`;

        return `
          <!doctype html>
          <html>
            <body>
              <h1>Here is my custom email template!</h1>
              <p>Hello, ${user.email}!</p>
              <p>Click below to reset your password.</p>
              <p>
                <a href="${resetPasswordURL}">${resetPasswordURL}</a>
              </p>
            </body>
          </html>
        `;
      },
    },
    verify: {
      generateEmailHTML: ({ token, user }) => {
        // TODO: this is a placeholder. You can customize this email template.
        // Use the token provided to allow your user to verify their account
        const url = `https://example.com/verify?token=${token}`;

        return `Hey ${user.email}, verify your email by clicking here: ${url}`;
      },
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: true,
};
