import Header from "../components/Header";
import Footer from "../components/Footer";
import Grove from "../components/Grove";
import Haven from "../components/Haven";
import Cosmo from "../components/Cosmo";

const Shop = () => {

    return (

        <section className="wrapper">
            <div className="shopHero border">
                <Header />
                <div className="shopTitle">
                    <h2>Your <i>Dream</i> Place</h2>
                </div>
            </div>
            <Grove />
            <Haven />
            <Cosmo />
            <Footer />
        </section>

    );
}

export default Shop;