import { useEffect } from 'react';
import Head from 'next/head'
import {
  Container,
  Hyperlink,
  Row,
  Col,
  Button,
} from '@edx/paragon'

const REDIRECT_TIME_REMAINING_MS = 5000;

export default function Home() {
  useEffect(() => {
    setTimeout(function() {
      global.location.replace('https://paragon-openedx.netlify.app/');
    }, REDIRECT_TIME_REMAINING_MS);
  }, []);

  return (
    <Container className="py-5">
      <Head>
        <title>Paragon | edX</title>
        <meta name="description" content="The Paragon documentation site has moved to https://paragon-openedx.netlify.app/." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row>
          <Col xs={12} lg={{ span: 8, offset: 2 }}>
            <h1 className="mb-4">Paragon</h1>
            <p className="mb-4">
              The Paragon documentation website moved to{' '}
              <Hyperlink destination="https://paragon-openedx.netlify.app/">https://paragon-openedx.netlify.app</Hyperlink>.
              Any previous links to pages on{' '}
              <Hyperlink destination="https://paragon-edx.netlify.app/">https://paragon-edx.netlify.app</Hyperlink> will
              redirect to the correct URL.
            </p>
            <Button as={Hyperlink} destination="https://paragon-openedx.netlify.app/" className="mb-2">
              Go to documentation website
            </Button>
            <p className="small">You will be automatically redirected in 5 seconds.</p>
          </Col>
        </Row>
      </main>
    </Container>
  )
}
