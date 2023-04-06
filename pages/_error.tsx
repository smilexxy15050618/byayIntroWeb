import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title-404 {
    width: 148px;
    height: 22px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
    line-height: 21px;
  }
  .description-404 {
    text-align: center;
    margin-top: 56px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2b2b2b;
    line-height: 40px;
    .info-404 {
    }
    a {
      color: #f66600;
    }
  }
`;
export default function Custom404() {
  return (
    <Wrapper>
      <img src="https://cdn.byai.com/static/intro/img/404-page.png" alt="404 图片" width={172} />
      <div className="title-404">404-无法找到该页</div>
      <div className="description-404">
        <div className="info-404">您正在访问的页面可能已经删除或暂时不可用。</div>
        <div>
          点击 <a href="/">返回首页</a>
        </div>
      </div>
    </Wrapper>
  );
}
