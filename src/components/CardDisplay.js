const cards = [
    { id: '1', title: 'first', cost: '123', color: 'bg-military-charcoal', },
    { id: '2', title: 'second', cost: '456', color: 'bg-green-800' },
    { id: '3', title: 'third', cost: '789', color: 'bg-military-blue' },
    { id: '4', title: 'fourth', cost: '012', color: 'bg-cyan-800' },
    { id: '5', title: 'fifth', cost: '345', color: 'bg-teal-800' },
]



function CardDisplay() {
    return (
        <div className="bg-military-brown min-w-[300px] min-h-full xl:w-[80vw] xl:max-w-[1200px] xl:h-[600px] border-8 border-dashed border-black flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-stretch xl:items-stretch justify-center shadow-xl py-5 px-3">
            {cards.map((card) => {
                return (
                    <div key={card.id} className={`p-5 xl:p-0 flex-1 w-full min-h-full ${card.color} flex flex-col justify-center items-center text-center space-y-5 hover:flex-[2] hover:transition-all group tracking-wider border-8 border-dashed border-transparent hover:border-military-orange relative hover:shadow-lg`}>
                        <h4 className="uppercase text-lg xl:text-3xl">{card.title}</h4>
                        <div className="bg-black h-24 w-16">image</div>
                        <h5 className="mb-32 group-hover:translate-y-0 group-hover:opacity-100 translate-y-20 opacity-0 group-hover:transition-transform group-hover:duration-500 group-hover:underline-offset-8 group-hover:underline">price- {card.cost} INR</h5>
                        <div className="absolute bottom-1/2 xl:bottom-4 right-4 xl:left-1/2 xl:-translate-x-1/2 -translate-y-10 xl:translate-y-10 opacity-0 group-hover:opacity-100 group-hover:delay-500 group-hover:translate-y-0 group-hover:transition-all">
                            <button className="block xl:hidden uppercase bg-military-orange px-1 py-1 text-sm text-white hover:scale-125 hover:shadow-lg transition-transform active:scale-90">buy</button>
                            <button className="hidden xl:block uppercase bg-military-orange px-3 py-1 text-white hover:scale-125 hover:shadow-lg transition-transform active:scale-90">purchase</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardDisplay
