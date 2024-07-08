import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../components/Footer";

function NoPage() {
  return (
    <div
      className="w-screen h-screen
                    grid place-items-center content-between
                    bg-show bg-cover bg-center
                    text-white"
    >
      <Header />

      <div className="grid place-items-center">
        <h1 className="text-7xl font-black">Error: Page Not Found</h1>

        <ButtonPrimary title="Return Home" link="/home" />
      </div>

      <Footer />
    </div>
  );
}

export default NoPage;
