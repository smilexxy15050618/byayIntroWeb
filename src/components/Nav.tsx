import * as React from 'react';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import { Col, Row, Container } from 'react-grid-system';

// export const Nav = withRouter((props: WithRouterProps) => (
//   <nav>
//     <h4>{props.router.route}</h4>
//     <ul>
//       <li>
//         <Link href="/">
//           <a>Home</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/SSR">
//           <a>SSR</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/StyledJsx">
//           <a>Styled Jsx</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/ModuleCss">
//           <a>Module CSS</a>
//         </Link>
//       </li>
//     </ul>
//   </nav>
// ));

class Header extends React.Component<WithRouterProps> {
  render() {
    const {
      router: { router },
    } = this.props;
    return (
      <Container>
        <Row>
          <Col className="logo">logo</Col>
          <Row>
            <Col>1</Col>
            <Col>2</Col>
            <Col>3</Col>
            <Col>4</Col>
          </Row>
          <Col className="btn-wrapper">
            <div>123</div>
            <div className="btn">立即体验</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const Nav = withRouter(Header);
