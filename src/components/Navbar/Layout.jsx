import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
