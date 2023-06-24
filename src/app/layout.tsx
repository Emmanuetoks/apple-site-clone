import "../assets/styles/index.css";
import NavBar from "@/components/Navbar";
import Main from "@/components/Main";

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
        <NavBar bgColor="bg-gray-200"/>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
