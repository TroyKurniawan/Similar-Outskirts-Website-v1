import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../components/Footer";

function NoPage() {
  return (
    <div
      className="w-screen h-screen
                    grid content-center
                    bg-show bg-cover bg-center
                    text-white"
    >
      <div className="grid place-items-center">
        <h1 className="text-7xl font-black">Error: Page Not Found</h1>

        <ButtonPrimary title="Return Home" link="/home" />
      </div>
    </div>
  );
}

export default NoPage;
