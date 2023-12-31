import "../styles/global.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shivam PhotoFarm",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
        <script
          src="https://kit.fontawesome.com/a31bdd6d95.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
