import Product from "./Products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//pass in {products as a prop to fetch data by json.data like key, id, title, price etc..}
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products

        //slice show first 5 products before showing banner//
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      <img
        //image will show full length advert after first 4 products and span full length
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2 xl:col-span-2">
        {products
          //slice 5th and 6th product after advert and span 2 columns
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      {products
        //slice products after 0-5=6th through rest of products to be shown after advert copy and pasted from first snippet of json data just change the slice for products number
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
