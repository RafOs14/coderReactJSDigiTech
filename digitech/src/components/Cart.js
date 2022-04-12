import { Table, Container } from "react-bootstrap";


const Cart = () => {
    return(
        <Container className="mt-3">
            <h1>Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
            </Table>
        </Container>
    )
}

export default Cart;