import SEO from "../components/common/SEO";
import Button from "../components/common/Button";
export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or may have been moved."
        noindex
      />
      <section className="not-found container">
        <span className="error-code">404</span>
        <h1>Oops! Page Not Found</h1>
        <p>The page you're looking for doesn't exist or may have been moved.</p>
        <Button to="/">Back to Home</Button>
      </section>
    </>
  );
}
