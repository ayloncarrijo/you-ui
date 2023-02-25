import { getCssText } from "@you-ui/core";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

class AppDocument extends Document {
  public static override async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  public override render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
