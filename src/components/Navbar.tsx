import React from "react";
import { Navbar as NavBarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCardContext";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavBarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={styles.button as React.CSSProperties}
            variant="outline-primary"
            className="rounded-circle"
          >
            Shop
            <div
              className="rounded-circle bg-danger d-flex
             justify-content-center align-items-center"
              style={styles.shoppingCart as React.CSSProperties}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBs>
  );
}

const styles = {
  shoppingCart: {
    color: "white",
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    bottom: 0,
    right: 0,
    transform: "translate(25%, 25%)",
  },
  button: {
    width: "3rem",
    height: "3rem",
    position: "relative",
  },
};

export default Navbar;
