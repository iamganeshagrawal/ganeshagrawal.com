import Document, { Html, Head, Main, NextScript } from "next/document";

// TODO: Add meta tags for seo

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        prefix="og: https://ogp.me/ns#"
        style={{ "--vh": "100%" }}
      >
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="author" content="Ganesh Agrawal" />
          <link
            href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900,300italic,400italic,600italic,700italic,900italic"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="stylesheet" href="/assets/css/style.css" media="screen" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
