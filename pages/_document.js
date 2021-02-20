import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' />
                <link rel="stylesheet" href="css/normalize.css" />
                <link rel="stylesheet" href="css/font-awesome.min.css" />
                <link rel="stylesheet" href="css/login-page_demo.css" />
                <link rel="stylesheet" href="css/login-page_style.css" />
                <link rel="stylesheet" href="css/login-page_responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

                  <script src="js/jquery-1.12.1.min.js"></script>
                  <script src="js/login-page_script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument