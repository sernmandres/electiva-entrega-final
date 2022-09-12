import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string

}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column" >
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                <span className="fs-3" style={{ width: "50%", letterSpacing: "1px", color: "#505050" }}>{name}</span>
                <span className="fs-5 ms-2 text-muted" style={{ width: "50%", textAlign: "right" }}>{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}
                        style={{
                            width: "100%",
                            backgroundColor: "#6976BF",
                            border: "1px solid #6976BF",
                            color: "#ffffff",
                            padding: "0.6em"
                        }}>Agregar al carrito</Button>
                ) :
                    <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem", width:"100%" }}>
                            <Button onClick={() => decreaseCartQuantity(id)}
                            style={{
                                width: "33.33%",
                                backgroundColor: "transparent",
                                border: "1px solid #6976BF",
                                color: "#6976BF",
                                padding: "0.5em",
                                fontWeight: "700"
                            }}>-</Button>
                            <div className="fs-6">
                                <span className="fs-6" style={{fontWeight: "500", color:"#6976BF"}}> {quantity}x </span> en carrito
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}
                            style={{
                                width: "33.33%",
                                backgroundColor: "transparent",
                                border: "1px solid #6976BF",
                                color: "#6976BF",
                                padding: "0.5em",
                                fontWeight: "700"
                            }}>+</Button>
                        </div>
                        <Button variant="danger" onClick={() => removeFromCart(id)}
                        style={{
                            width: "100%",
                            backgroundColor: "#6976BF",
                            border: "1px solid #6976BF",
                            color: "#ffffff",
                            padding: "0.6em"
                        }}>Eliminar</Button>
                    </div>
                }
            </div>
        </Card.Body>
    </Card>

}