import Button from "./Button";

function Home() {
  return (
    <div className="container flex-center mt-32">
      <Button className="flex-center" type="primary" to="/menu">
        menu
      </Button>
    </div>
  );
}

export default Home;
