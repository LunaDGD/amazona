import { Card } from 'react-bootstrap';

const Products = ({ product }) => {
  return (
    <Card className="my-3 p-3" rounded>
      <a href={`/products/${product.id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/products/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <h3>{product.price}</h3>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import Rating from './Rating';
// function Product({ product }) {
//     const { product } = props;
//   return (
//     <Card>
//       <Link to={`/products/${product.slug}`}>
//         <img src={product.image} alt={product.name} className="card-img-top" />
//       </Link>
//       <Card.Body>
//         <Link to={`/products/${product.slug}`}>
//           <Card.Title>{product.name}</Card.Title>
//         </Link>
//         <Rating rating={product.rating} numReviews={product.numReviews} />

//         <Card.Text>${product.price}</Card.Text>
//         <Button>Add to cart</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;

// const Products = ({ product }) => {
//   return (
//     <div>
//       <Card className="my-3 p-3" rounded>
//         <Link to={`/shop/${product.id}`}>
//           <Card.Img src={product.image} variant="top" />
//         </Link>
//         <Card.Body>
//           <Link to={`/shop/${product.id}`}>
//             <Card.Title as="div">
//               <strong>{product.product_name}</strong>
//             </Card.Title>
//           </Link>
//           <Card.Text as="div">
//             <div className="my-3">
//               <h3>{product.price}</h3>
//               <h3>{product.rating}</h3>
//               <h3>{product.category}</h3>
//             </div>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
// export default Products;
