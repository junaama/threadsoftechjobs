import "./globals.css";

export const metadata = { // TODO
  title: "Threads of Tech - Fashion-Tech Jobboard Site Title",
  description: "copy about description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
