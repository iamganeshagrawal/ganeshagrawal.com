import CustomHead from "../components/CustomHead";

const Home = () => {
  return (
    <>
      <CustomHead title="Ganesh Agrawal - Software Engineer" />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Ganesh Agrawal</h1>
        <img
          src="/assets/svg/maintenance.svg"
          alt="maintenance mode"
          style={{ width: "256px" }}
        />
        <h2>Hi, I’m Ganesh. I’m a Full Stack Web Developer.</h2>
        <div>
          <p>
            We are currently upgrading this website.. So you can checkout my{" "}
            <a href="https://blog.ganeshgrawal.com">blogs</a>.
          </p>
        </div>
        <p>
          Feel free to contact me at{" "}
          <a
            href="https://www.linkedin.com/in/iamganeshagrawal"
            title="Ganesh Agrawal | LinkedIn Profile"
          >
            LinkedIn
          </a>{" "}
          //{" "}
          <a
            href="https://twitter.com/imganeshagrawal"
            title="Ganesh Agrawal | Twitter Profile"
          >
            Twitter
          </a>{" "}
          // <a href="mailto:hello@ganeshgrawal.com">hello@ganeshgrawal.com</a>!
        </p>
      </div>
    </>
  );
};

export default Home;
