import { withRouter } from 'next/router'; //新引入的
const A = ({ router }) => <div>this is a page,参数是{router.query.id}</div>;

A.getInitialProps = async ctx => {
  console.log(ctx.req.query);
  return {};
};

export default withRouter(A);
