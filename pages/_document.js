import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <title>Data Scientist</title>
          <meta name="description" content="I hunt patterns in Data" />

          <meta property="og:url" content="https://m-rayan.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Data Scientist" />
          <meta property="og:description" content="I hunt patterns in Data" />
          <meta property="og:image" content="https://lh3.googleusercontent.com/pw/ABLVV84Wps5DVFqXecAog9te-dM1kMUxHiFz0GSCkWxV45Fhl8RbbZUL5OxplxpZ8wU-EF4DarrNVwugdDwqA0km3VM9pH5VWWpk4TxBOobhjYMNfYzJd0CT7IIx-5uRKS5z3WhHgjWeSGFtbFKGOQJHYypdUopkzPZoDCKTLlL5PwJ3SdR86vZTfHSwruNErAmrW_XI_04kQcYbRu6NCfoejuL8FWJxYVdS1-vcQ-DaJ0LFFVzqqRe01HlUoDjaxKY2VsC8gHw8j_HFmZOnCNj91q2Cmmtx_uAzDSxf5Fw5Se7aBglduhWkJaO5Gtf5fAGByedD1aJZOskyk66xoii5rkmrvroW49WAcwiM9nVDFVGDI2jBRLFru-Sc1JmX5XxPeAR1eT6JuICX4S_ivxM0_N40AXof6NZCEuMN-8v3GKxzs01gEB7GwH6y9k2yOmgkeqZvidAc6Iy-hXGDYkvDyiIH6Sp_zn-_U6t4Xu3AJzC4C53aokx5NRoK4npG9MmRJDhAspaZNzyGoAqVOfcS5ueL1sPbPKel7XToxADwzcc7ShgPkgNuO3DWn2Qw761UjxuQtAY3XBlM52ROTvSyQ97RcloTZgHj2E1wCQa8o8t2itA1AxLtT7Jca5q_197_LBmciG7oZZKrHPvNM4-LmaKV4rOv7YgzAQfF2g5k79Q0LQGsX0P6RDXV1jP-DAlyfgMftTiQlgGiiXeTP3GsDKefXOvpG3rWrsaFlW1EG3C1VecFhA5eoipy7gN6uJcY4z1BrGFrzs5GD2L1fgQM78yBMK0JppQCjegDp-FN8HUerr9rjF0vkakM1GrydNqpbX75JqdF74RPbmQPxkeWOAmQ-ojAZGLxCE0VvBq3DJy79a6HCLvyp2JkY7YdiydYGO5id9sYMTFnTHjFISn-gwbalv882O17kkjGr14RcFOdYum2CybJ0EFd0wmHxfc=s250-k-rw-no?authuser=1" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="m-rayan.vercel.app" />
          <meta property="twitter:url" content="https://m-rayan.vercel.app/" />
          <meta name="twitter:title" content="Data Scientist" />
          <meta name="twitter:description" content="I hunt patterns in Data" />
          <meta name="twitter:image" content="https://lh3.googleusercontent.com/pw/ABLVV84Wps5DVFqXecAog9te-dM1kMUxHiFz0GSCkWxV45Fhl8RbbZUL5OxplxpZ8wU-EF4DarrNVwugdDwqA0km3VM9pH5VWWpk4TxBOobhjYMNfYzJd0CT7IIx-5uRKS5z3WhHgjWeSGFtbFKGOQJHYypdUopkzPZoDCKTLlL5PwJ3SdR86vZTfHSwruNErAmrW_XI_04kQcYbRu6NCfoejuL8FWJxYVdS1-vcQ-DaJ0LFFVzqqRe01HlUoDjaxKY2VsC8gHw8j_HFmZOnCNj91q2Cmmtx_uAzDSxf5Fw5Se7aBglduhWkJaO5Gtf5fAGByedD1aJZOskyk66xoii5rkmrvroW49WAcwiM9nVDFVGDI2jBRLFru-Sc1JmX5XxPeAR1eT6JuICX4S_ivxM0_N40AXof6NZCEuMN-8v3GKxzs01gEB7GwH6y9k2yOmgkeqZvidAc6Iy-hXGDYkvDyiIH6Sp_zn-_U6t4Xu3AJzC4C53aokx5NRoK4npG9MmRJDhAspaZNzyGoAqVOfcS5ueL1sPbPKel7XToxADwzcc7ShgPkgNuO3DWn2Qw761UjxuQtAY3XBlM52ROTvSyQ97RcloTZgHj2E1wCQa8o8t2itA1AxLtT7Jca5q_197_LBmciG7oZZKrHPvNM4-LmaKV4rOv7YgzAQfF2g5k79Q0LQGsX0P6RDXV1jP-DAlyfgMftTiQlgGiiXeTP3GsDKefXOvpG3rWrsaFlW1EG3C1VecFhA5eoipy7gN6uJcY4z1BrGFrzs5GD2L1fgQM78yBMK0JppQCjegDp-FN8HUerr9rjF0vkakM1GrydNqpbX75JqdF74RPbmQPxkeWOAmQ-ojAZGLxCE0VvBq3DJy79a6HCLvyp2JkY7YdiydYGO5id9sYMTFnTHjFISn-gwbalv882O17kkjGr14RcFOdYum2CybJ0EFd0wmHxfc=s250-k-rw-no?authuser=1" />


        </Head>
        <body>
          <Main />
          <Analytics />
          <NextScript />
        </body>
      </Html>
    );
  }
}
