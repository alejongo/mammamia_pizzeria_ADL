import { CardPizza } from "./CardPizza";

export const CardPizzaGrid = () => {
  return (
    <>
      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            <CardPizza
              name="Pizza Peperoni"
              ingredients={["Mozzarella", "Peperoni", "Oregano"]}
              price={25000}
              img="https://www.novachef.es/media/images/pizza-pepperoni.jpg"
            />
            <CardPizza
              name="Pizza Napoletana"
              ingredients={["Mozzarella", "Tomato", "Oregano"]}
              price={20000}
              img="https://cloudfront-us-east-1.images.arcpublishing.com/copesa/UJQEGMANSJGG5CSZZ22TPK66DA.JPG"
            />
            <CardPizza
              name="Pizza Española"
              ingredients={["Mozzarella", "Chorizo", "Jamon", "Pimenton"]}
              price={28000}
              img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
            />
            <CardPizza
              name="Pizza Hawaiana"
              ingredients={["Mozzarella", "Jamon", "Tocineta", "Piña"]}
              price={25000}
              img="https://static.wixstatic.com/media/f85dae_d32f04cdb3c149b3aab2cf14732d5928~mv2.jpg/v1/fill/w_560,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f85dae_d32f04cdb3c149b3aab2cf14732d5928~mv2.jpg"
            />
          </div>
        </div>
      </main>
    </>
  );
};
