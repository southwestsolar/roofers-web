import "@/styles/globals.css";


export const metadata = {
  title: "Southwest Roofers",
  description: "Southwest Roofers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
