import NavigationBar from "../components/NavigationBar.jsx";
import Container from "react-bootstrap/Container";

export default function BaseTemplate({ children }) {
  return (
    <Container>
      <NavigationBar />

      {children}

      <footer className="mt-5">
        <hr />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Apartment Finder. All rights
          reserved.
        </p>
      </footer>
    </Container>
  );
}
