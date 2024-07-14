import Header from "../components/Header";
import ButtonPrimary from "../components/utilities/ButtonPrimary";
import Footer from "../components/Footer";

function NoPage() {
  return (
    <div
      className="w-screen h-screen
                    grid content-center
                    text-white"
    >
      <div className="grid place-items-center text-center">
        <h1 className="text-3xl md:text-6xl font-black">
          Error: Page Not Found
        </h1>

        <ButtonPrimary title="Return Home" link="/home" />
      </div>
    </div>
  );
}

export default NoPage;
