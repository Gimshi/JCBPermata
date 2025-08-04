import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Admin",
  description: "Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
