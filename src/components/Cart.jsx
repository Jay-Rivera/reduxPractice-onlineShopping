import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "20px" }}>
      <Card
        key={product.id}
        className="h-100"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Img variant="top" src={product.image} style={{ width: "10%" }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>$ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h2>My Cart</h2>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
