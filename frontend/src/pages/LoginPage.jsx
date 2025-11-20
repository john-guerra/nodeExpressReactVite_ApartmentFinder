import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <>
      <Form method="POST" action="/api/auth/login">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <div>
          <Button className="me-2" variant="primary" type="submit">
            Login
          </Button>

          <Button href="/register" variant="secondary">
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}
