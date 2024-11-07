interface VerificationEmailProps {
  identifier: string;
  provider: {
    apiKey: string;
    from: string;
  };
  url: string;
  theme?: {
    brandColor?: string;
    buttonText?: string;
  };
}

export async function sendVerificationRequest({ identifier: to, provider, url, theme }: VerificationEmailProps) {
  const { host } = new URL(url);

  // Define plain text fallback
  const textContent = `Sign in to ${host}\n${url}\n\n`;

  // Generate HTML content by calling htmlContent function with the necessary parameters
  const htmlContent = generateHtmlContent({ url, host, theme });

  if (!textContent || !htmlContent) {
    throw new Error("Email content cannot be empty.");
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${provider.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: provider.from },
      subject: `Sign in to ${host}`,
      content: [
        { type: "text/plain", value: textContent },
        { type: "text/html", value: htmlContent },
      ],
    }),
  });

  if (!response.ok) throw new Error("Sendgrid error: " + (await response.text()));
}

// Function to generate the HTML content for the email
function generateHtmlContent({ url, host, theme }: { url: string; host: string; theme?: VerificationEmailProps['theme'] }) {
  const escapedHost = host.replace(/\./g, "&#8203;.");

  const brandColor = theme?.brandColor || "#346df1";
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme?.buttonText || "#fff",
  };

  return `
  <body style="background: ${color.background};">
    <table width="100%" border="0" cellspacing="20" cellpadding="0"
      style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center"
          style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          Sign in to <strong>${escapedHost}</strong>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                  target="_blank"
                  style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                  in</a></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center"
          style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
          If you did not request this email you can safely ignore it.
        </td>
      </tr>
    </table>
  </body>
  `;
}
