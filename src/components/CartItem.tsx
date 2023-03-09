import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext";
import storeItems from "../data/items.json";
import formatCurrency from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item?.imgUrl} style={{ width: "125px", objectFit: "cover" }} />
      <div className="m-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              &nbsp; x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price!)}
        </div>
      </div>
    </Stack>
  );
}

export default CartItem;