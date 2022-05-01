import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <h3 className='fw-bold mb-3 mt-2'>Log In</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>                
                <Button variant="primary" type="submit">Log In</Button>
            </Form>
        </Container>  
    );
}


//Export the component
export default Login;