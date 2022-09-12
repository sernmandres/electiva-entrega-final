import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from '../context/shoppingCartContext';
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from './CartItem';
import StoreItem from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

    const { cartItems, closeCart } = useShoppingCart();

    return (
        <Offcanvas className="car-tamano" show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header closeButton={true}>
                <Offcanvas.Title>Lista de productos</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div>
                        <span className="fw-bold fs-5" style={{paddingRight:"1em", color:"#6976BF"}}>Total:</span> {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = StoreItem.find(item => item.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}