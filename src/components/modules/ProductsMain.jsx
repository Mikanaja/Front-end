import { useEffect, useState } from "react"
import { productsApi } from "../../lib/axios";
import { Product } from "../shared/Product";
import { useLocation } from "react-router-dom";

export function ProductsMain() {

    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {

        async function fetchProducts() {
            const data = await productsApi.getProducts();
            setProducts(data);
        }


        fetchProducts();

    }, [])

    return (
        <main className="p-5 flex flex-col gap-10 md:pt-32">
            {
                location.pathname === '/' &&
                <section className="min-h-[80vh] bg-main-bg bg-top rounded text-white p-10 flex justify-start items-center">
                    <div className="flex flex-col gap-2.5 bg-black/50 rounded p-5 w-fit">
                        <h1 className="text-3xl font-bold">
                            Novidades da temporada
                        </h1>
                        <p>
                            Descubra as últimas tendências e atualize seu guarda-roupa com estilo!
                        </p>
                        <p>
                            Faça seu pedido agora e destaque-se nesta temporada!
                        </p>
                    </div>
                </section>
            }
            <section className="flex flex-col p-5">
                <h1 className="w-full text-center text-5xl font-thin border-b-black/30 border-b-2 p-4">
                    Produtos mais recentes
                </h1>
                <div className="flex gap-2.5 flex-wrap p-2.5 items-start justify-center" >
                    {
                        products.map((product, index) => (
                            <Product
                                key={index}
                                image={product.imagem}
                                title={product.nome}
                                description={product.descricao}
                                price={product.preco}
                                product={product}
                            />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
