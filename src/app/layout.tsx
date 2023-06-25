import Footer from "@/components/Footer";
import "../assets/styles/index.css";

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
        {children}
      </body>
      <Footer/>
    </html>
  );
}
