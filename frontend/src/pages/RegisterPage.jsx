import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <Form method="POST" action="/api/auth/register">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter your name"
            name="name"
          />
        </Form.Group>
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
            Register
          </Button>
        </div>

        <div>
          Do you have an account? <a href="/login">Login here</a>
        </div>
      </Form>
    </>
  );
}
