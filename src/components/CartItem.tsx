import { Button, FormGroup, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import StoreItem from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type cartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: cartItemProps) {

    const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    const item = StoreItem.find(item => item.id === id)
    console.log("item ", item)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center"
        style={{
            borderBottom: "1px solid rgb(247 247 247)",
            paddingBottom: "1em"
        }}>
            <div>
                <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            </div>
            <div style={{
                marginRight: "1em",
                padding: "0 1em 0 0.5em",
                width: "15%"
            }}>
                <div>
                    {item.name} {quantity > 1 &&
                        <span className="text-muted" style={{ fontSize: "0.65rem" }}> x{quantity}</span>
                    }
                </div>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div>
                <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                        <Button onClick={() => decreaseCartQuantity(id)}
                            style={{
                                width: "33.33%",
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "1px solid #6976BF",
                                borderRadius: "0",
                                color: "#6976BF",
                                fontWeight: "700"
                            }}>-</Button>
                        <div>
                            <span className="fs-6"> {quantity}</span>
                        </div>
                        <Button onClick={() => increaseCartQuantity(id)}
                            style={{
                                width: "33.33%",
                                backgroundColor: "transparent",
                                border: "none",
                                borderBottom: "1px solid #6976BF",
                                borderRadius: "0",
                                color: "#6976BF",
                                fontWeight: "700"
                            }}>+</Button>
                    </div>
                </div>
            </div>

            <div style={{ padding: "0 1em", width: "20%" }}> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size='sm' onClick={() => removeFromCart(item.id)}
                style={{
                    borderColor: "#6976BF",
                    color: "#6976BF",
                    fontWeight: "500"
                }}>&times;</Button>


        </Stack >
    )
}