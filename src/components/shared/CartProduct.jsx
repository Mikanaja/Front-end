export function CartProduct({ image, title, description, quantity, price }) {
    console.log('O valor é: ' + price);
    return (
        <div className="w-full flex items-center gap-5 p-2.5 border-b-[1px] border-b-black/30">
            <img src={image} alt={description} className="w-32" />
            <div className="flex flex-col gap-2.5">
                <h2 className="text-xl font-bold">
                    {title}
                </h2>
                <p>
                    {description}
                </p>
                <p>
                    {quantity} x ${price ? price.toFixed(2) : "0.00"}
                </p>
            </div>
        </div>
    )
}