import Footer from "../../components/Footer/Footer";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import TopBar from "../../components/TopBar/TopBar";

function HomePage() {
    return (
        <main className="w-full flex-col">
            <nav className="w-full h-20 bg-slate-500 mb-1">
                <TopBar />
            </nav>
            <section className="bg-slate-500 max-w-5xl my-0 mx-auto text-white p-3 text-center font-bold text-4xl">
                <h1>PRODUTOS</h1>
            </section>
            <section className="w-full max-w-5xl h-screen my-2 mx-auto bg-slate-300 border-solid border-slate-600 rounded-lg">
                <ProductsTable />
            </section>
            <section className="w-full h-20 bg-slate-500 my-0 mx-auto">
                <Footer />
            </section>
        </main>
    );
}

export default HomePage;