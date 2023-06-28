import Footer from "@/components/Footer";
import "../assets/styles/index.css";
import NavBar from "@/components/Navbar";
export const metadata = {
  title: "Apple",
  description: "A clone of Apple website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar bgColor="bg-gray-200" />
        {children}
      <Footer />
      </body>
    </html>
  );
}
