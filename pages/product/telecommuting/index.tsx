import isMobile from 'ismobilejs';
import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import VoiceFooter from '../../../src/components/aicc/footer';
import Partner from '../../../src/components/aicc/partner';
import { DescImgCol } from '../../../src/components/clew/descImg';
import { DescWrapper } from '../../../src/components/DescWrapper';
import { Footer } from '../../../src/components/Footer';
import { DescCol } from '../../../src/components/homepage/DescContent';
import { LargeProductCard, ProductCard } from '../../../src/components/homepage/ProductCard';
import { LayoutWithoutFooter } from '../../../src/components/LayoutWithoutFooter';
import { DataVisualWrapper, Wrapper } from '../../../src/components/product';
import { partner, PRODUCT_BG1, PRODUCT_BG2, PRODUCT_BG3, PRODUCT_WRAPPER, STSTEM_BG } from '../../index-old';
import {
  Banner, CardWrapper, GreenTag, H5HelpItem, H5Title, H5TryWrapper, HelpItem, HelpItemBottom, HelpItemTitle, HighLiteSpan, MyFooter, OnePxLine, SalesItem, SassItem, SetBackgroundWrapper, SubTitle, Title, TryWrapper, TwoLineH5HelpItem
} from './styled';

const Telecommuting = () => {
  const [isPc, setIsPc] = React.useState(true);
  React.useEffect(() => {
    setIsPc(!isMobile(window.navigator.userAgent).any);
  }, []);
  return (
    <LayoutWithoutFooter>
      {(formVisible, setFormVisible) => (
        <Wrapper>
          <Banner>
            <div>抗击疫情，一呼百应</div>
            <h1>百应助力企业实现远程营销服务</h1>
            <h2>一站式智能营销解决方案</h2>
          </Banner>
          <Visible sm xs>
            <H5Title>
              <p>
                携手共抗新疫情
                <br />
                百应系统<HighLiteSpan>免费</HighLiteSpan>用
              </p>
            </H5Title>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Title>
              <div>
                携手共抗新疫情
                <span style={{ marginLeft: 32 }} />
                百应系统<HighLiteSpan>免费</HighLiteSpan>用
              </div>
            </Title>
          </Visible>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={12} md={12} sm={24}>
                  <HelpItemTitle>
                    免费为政府机构、医疗机构、公益组织
                    <Visible sm xs>
                      <br />
                    </Visible>
                    提供智能政务通知回访系统
                  </HelpItemTitle>
                  <div>
                    <GreenTag>百万话费专项补贴</GreenTag>
                  </div>
                  <Visible sm xs>
                    <div
                      style={{
                        marginTop: 18,
                        marginBottom: 28,
                        display: 'block',
                      }}>
                      <H5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/notice.png"
                          style={{ width: 40 }}
                        />
                        <p>防疫政策宣传通知</p>
                      </H5HelpItem>
                      <H5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/diaocha.png"
                          style={{ width: 40 }}
                        />
                        <p>回乡/返工人员随访调查</p>
                      </H5HelpItem>
                      <H5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/jiedai.png"
                          style={{ width: 40 }}
                        />
                        <p>咨询/捐赠智能接待</p>
                      </H5HelpItem>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>防疫政策宣传通知</HelpItem>
                      <HelpItem>回乡/返工人员随访调查</HelpItem>
                      <HelpItem>咨询/捐赠智能接待</HelpItem>
                    </div>
                  </Visible>
                </DescCol>
                <Col lg={1} md={1}></Col>
                <DescImgCol lg={11} md={1} sm={24}>
                  <Visible md lg xl xxl xxxl>
                    <img
                      src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu1.png"
                      alt=""
                      style={{ height: 345 }}
                    />
                  </Visible>
                  <Visible sm xs>
                    <img
                      src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu1.png"
                      alt=""
                      style={{ height: 'unset', marginTop: -60, marginBottom: 14 }}
                    />
                  </Visible>
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <Visible sm xs>
            <div
              style={{
                paddingTop: 40,
                fontSize: 30,
                lineHeight: '42px',
                textAlign: 'center',
                background: '#f8f9fb',
              }}>
              当前挑战
            </div>
          </Visible>
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescImgCol lg={11} md={11} sm={24}>
                  <Visible md lg xl xxl xxxl>
                    <img
                      src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu2.png"
                      alt=""
                      style={{ height: 345 }}
                    />
                  </Visible>
                  <Visible sm xs>
                    <img
                      src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu2.png"
                      alt=""
                      style={{ height: 'unset', marginTop: -20, marginBottom: 14 }}
                    />
                  </Visible>
                </DescImgCol>
                <Col lg={1} md={1}></Col>
                <DescCol lg={12} md={12} sm={24}>
                  <HelpItemTitle>
                    <Visible md lg xl xxl xxxl>
                      当前挑战：
                    </Visible>
                    经济要发展、客户要服务、员工的健康
                    <Visible sm xs>
                      <br />
                    </Visible>
                    也要有保障
                  </HelpItemTitle>
                  <Visible sm xs>
                    <div style={{ marginTop: 18, display: 'block' }}>
                      <TwoLineH5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/zengsu.png"
                          style={{ width: 40 }}
                        />
                        <p>2020年GDP 期望6.1%的增速</p>
                      </TwoLineH5HelpItem>
                      <TwoLineH5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/fuwu.png"
                          style={{ width: 40 }}
                        />
                        <p>
                          2020年2月3日企业要全面开工，
                          <br />
                          服务要全面开始
                        </p>
                      </TwoLineH5HelpItem>
                      <TwoLineH5HelpItem>
                        <img
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/chuanran.png"
                          style={{ width: 40 }}
                        />
                        <p>
                          新型冠状病毒会通过呼吸道传染，
                          <br />
                          需要远离聚集点
                        </p>
                      </TwoLineH5HelpItem>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>2020年GDP 期望6.1%的增速</HelpItem>
                      <HelpItem>2020年2月3日企业要全面开工，服务要全面开始</HelpItem>
                      <HelpItem>新型冠状病毒会通过呼吸道传染，需要远离聚集点</HelpItem>
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <HelpItemBottom>
            <p>感谢互联网+SaaS的普及，我们找到了平衡点 </p>
            <p>「百应AI远程云办公」</p>
            <Visible sm xs>
              <img
                src="//cdn.byai.com/static/intro/img/Products/telecommuting/dangqian-tiaozhan.png"
                alt=""
                style={{ position: 'absolute', bottom: 0, left: 0, margin: 0 }}
              />
            </Visible>
          </HelpItemBottom>
          <Visible sm xs>
            <H5Title>
              <div>
                既要保证工作开展
                <br />
                也要保障员工身体健康
              </div>
              <div>众志成城，百应助力远程销售</div>
            </H5Title>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Title>
              <div>既要保证工作开展，也要保障员工身体健康</div>
              <p>众志成城，百应助力远程销售</p>
            </Title>
          </Visible>
          <SubTitle>借助SaaS，只要1台电脑+1个浏览器+1个耳麦，就能无缝服务</SubTitle>
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 0 }}>
                  <Visible md lg xl xxl xxxl>
                    <Col style={{ marginRight: 70 }}>
                      <SassItem>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu3.png" />
                        <img
                          className="sass-item-img-absolute"
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/error.png"
                        />
                        <div>
                          <div>
                            以前
                            <br />
                            必须坐到指定办公区域才能服务客户
                          </div>
                          <p>
                            买专门的呼叫/接听设备
                            <br />
                            拉专属通话线路
                            <br />
                            设备操作要专属培训
                            <br />
                            密闭空间，来自五湖的员工，极易交叉感染
                            <br />
                          </p>
                        </div>
                      </SassItem>
                    </Col>
                    <Col>
                      <SassItem>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu4.png" />
                        <img
                          className="sass-item-img-absolute"
                          src="//cdn.byai.com/static/intro/img/Products/telecommuting/right.png"
                        />
                        <div>
                          <div>
                            现在
                            <br />
                            一台联网电脑+一个耳麦随时随地服务客户
                          </div>
                          <p>
                            仅需准备耳麦，甚至苹果的耳机就能用
                            <br />
                            浏览器账号密码登陆，无须安装本地客户端
                            <br />
                            数据云端存储，时刻不丢失
                            <br />
                            产品简单易用，实时在线自动升级
                            <br />
                          </p>
                        </div>
                      </SassItem>
                    </Col>
                  </Visible>
                  <Visible sm xs>
                    <SassItem>
                      <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu3.png" />
                      <div>
                        <div>
                          以前
                          <br />
                          必须坐到指定办公区域才能服务客户
                        </div>
                        <p>
                          买专门的呼叫/接听设备
                          <br />
                          拉专属通话线路
                          <br />
                          设备操作要专属培训
                          <br />
                          密闭空间，来自五湖的员工，极易交叉感染
                          <br />
                        </p>
                      </div>
                    </SassItem>
                    <SassItem>
                      <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu4.png" />
                      <div>
                        <div>
                          现在
                          <br />
                          一台联网电脑+一个耳麦随时随地服务客户
                        </div>
                        <p>
                          仅需准备耳麦，甚至苹果的耳机就能用
                          <br />
                          浏览器账号密码登陆，无须安装本地客户端
                          <br />
                          数据云端存储，时刻不丢失
                          <br />
                          产品简单易用，实时在线自动升级
                          <br />
                        </p>
                      </div>
                    </SassItem>
                  </Visible>
                </Row>
              </Container>
            </DataVisualWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <SassItem style={{ background: '#fff' }}>
                <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu4.png" />
                <div>
                  <div style={{ textAlign: 'center' }}>
                    启用云坐席，隔离病毒
                    <br />
                    畅通服务
                  </div>
                  <p style={{ width: 280, lineHeight: '38px', marginLeft: -15 }}>
                    现在1台联网电脑+1个耳麦随时随地服务客户
                    <br />
                    仅需准备耳麦，甚至苹果的耳机就能用
                    <br />
                    浏览器账号密码登陆，无须安装本地客户端
                    <br />
                    数据云端存储，时刻不丢失
                    <br />
                    产品简单易用，实时在线自动升级
                    <br />
                  </p>
                </div>
              </SassItem>
            </CardWrapper>
          </Visible>
          <OnePxLine style={{ paddingTop: 80 }} />
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                  <DescCol lg={12} md={12} sm={24}>
                    <HelpItemTitle>
                      借助AI，减少人工服务工作量
                      <br />
                      降本增效
                    </HelpItemTitle>

                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>降低人力成本</HelpItem>
                      <HelpItem>快速解答咨询/解决投诉</HelpItem>
                      <HelpItem>无缝人机协作</HelpItem>
                      <HelpItem>屏蔽骚扰电话</HelpItem>
                    </div>
                  </DescCol>
                  <Col lg={1} md={1}></Col>
                  <DescImgCol lg={11} md={1} sm={24}>
                    <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu5.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu5.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                借助AI，减少人工服务
                <br />
                工作量降本增效
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem width={160}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>降低人力成本</p>
                </H5HelpItem>
                <H5HelpItem width={160}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>快速解答咨询/解决投诉</p>
                </H5HelpItem>
                <H5HelpItem width={160}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>咨询/无缝人机协作</p>
                </H5HelpItem>
                <H5HelpItem width={160}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>屏蔽骚扰电话</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <OnePxLine />
          <Visible md lg xl xxl xxxl>
            <SetBackgroundWrapper url="//cdn.byai.com/static/intro/img/Products/telecommuting/bg2.png">
              <DataVisualWrapper odd style={{ backgroundColor: 'transparent' }}>
                <Container>
                  <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                    <DescImgCol lg={11} md={1} sm={24}>
                      <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tuai-0204.png" alt="" />
                    </DescImgCol>
                    <Col lg={1} md={1}></Col>
                    <DescCol lg={12} md={12} sm={24}>
                      <HelpItemTitle>
                        依靠AI，辅助客服人员，提升
                        <br />
                        接待的质量
                      </HelpItemTitle>
                      <div style={{ marginTop: 16, display: 'block' }}>
                        <HelpItem>通话中实时给员工“上课”</HelpItem>
                        <HelpItem>成熟的话术库实时学习</HelpItem>
                      </div>
                    </DescCol>
                    <Visible sm xs>
                      <DescImgCol lg={11} md={1} sm={24}>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tuai-0204.png" alt="" />
                      </DescImgCol>
                    </Visible>
                  </Row>
                </Container>
              </DataVisualWrapper>
            </SetBackgroundWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tuai-0204.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                依靠AI，辅助客服人员
                <Visible sm xs>
                  <br />
                </Visible>
                提升接待的质量
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem width={170}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>通话中实时给员工“上课”</p>
                </H5HelpItem>
                <H5HelpItem width={170}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>成熟的话术库实时学习</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <Visible sm xs>
            <H5Title>
              <div>
                当前形势下，企业获客
                <br />
                的方式要有所倾斜：不
                <br />
                见面，照样谈业务！
              </div>
              <div>众志成城，百应助力远程销售</div>
            </H5Title>
          </Visible>
          <div style={{ background: '#F8F9FB' }}>
            <Visible md lg xl xxl xxxl>
              <Title>
                <div>当前形势下，企业获客的方式要有所倾斜：不见面，照样谈业务！</div>
                <p>众志成城，百应助力远程销售</p>
              </Title>
            </Visible>
          </div>
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper>
              <Container>
                <div>
                  <SubTitle>减少面销比重，重点发力电销、网销</SubTitle>
                  <Row className="data-visual-wrapper">
                    <Col style={{ marginRight: 67 }}>
                      <SalesItem>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu7.png" />
                        <div>
                          <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/error.png" alt="" />
                          <p>面销：相互“冒着生命”谈业务</p>
                        </div>
                      </SalesItem>
                    </Col>
                    <Col style={{ marginRight: 67 }}>
                      <SalesItem>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu8.png" />
                        <div>
                          <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/right.png" alt="" />
                          <p>电销：不见面照样谈业务</p>
                        </div>
                      </SalesItem>
                    </Col>
                    <Col>
                      <SalesItem>
                        <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu9.png" />
                        <div>
                          <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/right.png" alt="" />
                          <p>网销：不知道你是谁，照样谈业务</p>
                        </div>
                      </SalesItem>
                    </Col>
                  </Row>
                </div>
              </Container>
            </DataVisualWrapper>
            <OnePxLine />
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img
                src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu8.png"
                alt=""
                style={{ marginBottom: 40 }}
              />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                减少面销比重。重点发力
                <br />
                电销、网销
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>电销：不见面照样谈业务</p>
                </H5HelpItem>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>网销：不知道你是谁，照样谈业务</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                  <DescCol lg={12} md={12} sm={24}>
                    <HelpItemTitle>
                      使用随时随地可电销的
                      <br />
                      SaaS云坐席方案
                    </HelpItemTitle>
                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>批量自动拨打，减少拨号环节</HelpItem>
                      <HelpItem>预测式外呼，避免销售等待</HelpItem>
                      <HelpItem>自定义外呼并发数，效率手动可控</HelpItem>
                    </div>
                  </DescCol>
                  <Col lg={1} md={1}></Col>
                  <DescImgCol lg={11} md={1} sm={24}>
                    <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu10.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu10.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                使用随时随地可电销的
                <br />
                SaaS云坐席方案
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>批量自动拨打，减少拨号环节</p>
                </H5HelpItem>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>预测式外呼，避免销售等待</p>
                </H5HelpItem>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>自定义外呼并发数，效率手动可控</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <OnePxLine />
          </Visible>
          <Visible md lg xl xxl xxxl>
            <SetBackgroundWrapper url="//cdn.byai.com/static/intro/img/Products/telecommuting/bg3.png">
              <DataVisualWrapper style={{ backgroundColor: 'transparent' }}>
                <Container>
                  <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                    <DescImgCol lg={11} md={1} sm={24}>
                      <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu11-0204.png" alt="" />
                    </DescImgCol>
                    <Col lg={1} md={1}></Col>
                    <DescCol lg={12} md={12} sm={24}>
                      <HelpItemTitle>
                        通过手机+APP的形式
                        <br />
                        更低门槛地实现云端销售
                      </HelpItemTitle>
                      <div style={{ marginTop: 16, display: 'block' }}>
                        <HelpItem>随时随地，有手机就能联系客户</HelpItem>
                        <HelpItem>通过网络云呼叫，录音实时云保存</HelpItem>
                        <HelpItem>对接CRM数据可直接拨号</HelpItem>
                      </div>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
            </SetBackgroundWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu11-0204.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                通过手机+APP的形式
                <br />
                更低门槛地实现云端销售
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>随时随地，有手机就能联系客户</p>
                </H5HelpItem>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>通过网络云呼叫，录音实时云保存</p>
                </H5HelpItem>
                <H5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>对接CRM数据可直接拨号</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <Visible sm xs>
            <H5Title>
              <div>
                目前更多的流量聚集到
                <br />
                微信等社交领域，如何
                <br />
                把握？
              </div>
              <div>众志成城，百应助力远程营销</div>
            </H5Title>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Title>
              <div>目前更多的流量聚集到微信等社交领域，如何把握？</div>
              <p>众志成城，百应助力远程营销</p>
            </Title>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                  <DescCol lg={12} md={12} sm={24}>
                    <HelpItemTitle>
                      用智能的名片帮助横扫
                      <br />
                      微信生态圈流量
                    </HelpItemTitle>
                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>自家公众号内容/外部公众号内容都能做内容营销，吸引客户入池</HelpItem>
                      <HelpItem>朋友圈海报，AI作图+AI文案，素材助力曝光、曝光增长流量</HelpItem>
                      <HelpItem>音视频多媒体分享，内容更丰富效用看的见</HelpItem>
                    </div>
                  </DescCol>
                  <Col lg={1} md={1}></Col>
                  <DescImgCol lg={11} md={1} sm={24}>
                    <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu12-0204.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu12-0204.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                用智能的名片帮助横扫
                <br />
                微信生态圈流量
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <TwoLineH5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>自家公众号内容/外部公众号内容都能做内容营销，吸引客户入池</p>
                </TwoLineH5HelpItem>
                <TwoLineH5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>朋友圈海报，AI作图+AI文案，素材助力曝光、曝光增长流量</p>
                </TwoLineH5HelpItem>
                <TwoLineH5HelpItem>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>音视频多媒体分享，内容更丰富效用看的见</p>
                </TwoLineH5HelpItem>
              </div>
            </CardWrapper>
          </Visible>

          <Visible sm xs>
            <H5Title>
              <div>
                管理不用常开会
                <br />
                实时结果云端留
              </div>
              <div>众志成城，百应助力远程管理</div>
            </H5Title>
          </Visible>
          <div style={{ background: '#F8F9FB' }}>
            <Visible md lg xl xxl xxxl>
              <Title>
                <div>管理不用常开会，实时结果云端留</div>
                <p>众志成城，百应助力远程管理</p>
              </Title>
            </Visible>
          </div>
          <Visible md lg xl xxl xxxl>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper" style={isPc ? undefined : { paddingTop: 30 }}>
                  <DescImgCol lg={11} md={1} sm={24}>
                    <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu13-0204.png" alt="" />
                  </DescImgCol>
                  <Col lg={1} md={1}></Col>
                  <DescCol lg={12} md={12} sm={24}>
                    <HelpItemTitle>
                      以结果为导向
                      <br />
                      在线实时观察服务和销售数据
                    </HelpItemTitle>
                    <div style={{ marginTop: 16, display: 'block' }}>
                      <HelpItem>通话维度报表实时看</HelpItem>
                      <HelpItem>每日维度数据随时查</HelpItem>
                      <HelpItem>单个人的数据随时拉</HelpItem>
                    </div>
                  </DescCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </Visible>
          <Visible sm xs>
            <CardWrapper>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/tu13-0204.png" alt="" />
              <HelpItemTitle style={{ fontSize: 24, lineHeight: '33px', fontWeight: 500 }}>
                以结果为导向
                <br />
                在线实时观察服务和销售数据
              </HelpItemTitle>
              <div style={{ padding: '30px 0 40px', display: 'block' }}>
                <H5HelpItem width={150}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>通话维度报表实时看</p>
                </H5HelpItem>
                <H5HelpItem width={150}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>每日维度数据随时查</p>
                </H5HelpItem>
                <H5HelpItem width={150}>
                  <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/dagou.png" />
                  <p>单个人的数据随时拉</p>
                </H5HelpItem>
              </div>
            </CardWrapper>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <TryWrapper>
              <div>远程云办公，左手抗疫情，右手抓建设</div>
              <div>
                <input type="text" placeholder="请输入你的手机号" onClick={setFormVisible} />
                <button onClick={setFormVisible}>立刻体验</button>
              </div>
            </TryWrapper>
          </Visible>
          <Visible xs sm>
            <H5Title>
              <div>
                远程云办公
                <br />
                左手抗疫情 , 右手抓建设
              </div>
              <div>百应期望携手一起渡过难关，同时帮助大家提升战斗力</div>
            </H5Title>
            <H5TryWrapper>
              <input type="text" placeholder="请输入你的手机号" onClick={setFormVisible} />
              <button onClick={setFormVisible}>立刻体验</button>
            </H5TryWrapper>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Partner title="百应是，42000+企业/机构的共同选择" partner={partner} />
            <DescWrapper
              background={STSTEM_BG}
              title={
                <>
                  从智能销售到大数据营销
                  <br />
                  百应提供全生态产品体系
                </>
              }
              desc={
                <>
                  基于AI+大数据技术，覆盖客户全生命周期，实现全渠道营销获客与数据分析决策
                  <br />
                  帮助企业高效引流、精准获客，以更低成本获取更多的商机，充分挖掘用户价值
                </>
              }>
              <PRODUCT_WRAPPER>
                <div className="product-list-wrapper">
                  <ProductCard
                    name="智能营销云"
                    englishName="INTELLIGENT MARKETING"
                    background={PRODUCT_BG1}
                    list={[
                      {
                        name: '智能搜客',
                        englishName: 'CUSTOMER CLUES',
                        icon: 'iconbaiyingxiansuo',
                      },
                      {
                        name: '集客营销',
                        englishName: 'BUSINESS CARD',
                        icon: 'iconbaiyingzhinengmingpian',
                      },
                      {
                        name: '智能外呼',
                        englishName: 'AUTOMATIC CALL',
                        icon: 'iconzhinengwaihu',
                      },
                    ]}
                  />
                  <ProductCard
                    name="智能销售云"
                    englishName="INTELLIGENT SALE"
                    background={PRODUCT_BG2}
                    list={[
                      {
                        name: '云呼叫中心',
                        englishName: 'CONTACT CENTER',
                        icon: 'iconzhinenghujiaozhongxin',
                      },
                      {
                        name: '智能工作手机',
                        englishName: 'WORK PHONE',
                        icon: 'iconzhinengxiaoshouzhuli',
                      },
                      {
                        name: '智慧CRM',
                        englishName: 'ALL-IN-ONE CRM',
                        icon: 'iconzhinengCRM',
                      },
                    ]}
                  />
                  <ProductCard
                    name="智能联络云"
                    englishName="INTELLIGENT SERVICE"
                    background={PRODUCT_BG3}
                    list={[
                      {
                        name: '智能质检',
                        englishName: 'CALLS INSPECTION',
                        icon: 'iconzhinengzhijian',
                      },
                      {
                        name: '协同工单',
                        englishName: 'WORK ORDER SYSTEM',
                        icon: 'iconbaiyinggongdan',
                      },
                      {
                        name: '智能客服',
                        englishName: 'CUSTOMER SUPPORT',
                        icon: 'iconquanqudaokefu',
                      },
                    ]}
                  />
                </div>
                <div className="transform">
                  <i className="iconfont iconzhuanhuan" />
                </div>
                <Visible md lg xl xxl xxxl>
                  <div className="large-product-wrapper">
                    <LargeProductCard
                      name="企业中台"
                      englishName="BYAI INTELLIGENT MIDDLE-OFFICE"
                      background={PRODUCT_BG3}
                      list={[
                        {
                          name: '百应AI平台',
                          englishName: 'AI PLATFORM',
                          icon: 'iconbaiyingdanao',
                        },
                        {
                          name: '百应智能云通讯',
                          englishName: 'CLOUD COMMUNICATION',
                          icon: 'iconzhinengyuntongxun',
                        },
                        {
                          name: '企业数据中台',
                          englishName: 'ENTERPRISE DATA DESK',
                          icon: 'iconqiyezhongtai',
                        },
                      ]}
                    />
                  </div>
                </Visible>
                <Visible xs sm>
                  <ProductCard
                    name="企业中台"
                    englishName="BYAI INTELLIGENT MIDDLE-OFFICE"
                    background={PRODUCT_BG3}
                    list={[
                      {
                        name: '百应AI平台',
                        englishName: 'AI PLATFORM',
                        icon: 'iconbaiyingdanao',
                      },
                      {
                        name: '百应云通信',
                        englishName: 'CLOUD COMMUNICATION',
                        icon: 'iconzhinengyuntongxun',
                      },
                      {
                        name: '企业数据中台',
                        englishName: 'ENTERPRISE DATA DESK',
                        icon: 'iconqiyezhongtai',
                      },
                    ]}
                  />
                </Visible>
              </PRODUCT_WRAPPER>
            </DescWrapper>
            <VoiceFooter
              title="和42000+企业/机构一起，探索大数据+AI的新的增长方式"
              mTitle1="和42000+企业/机构一起"
              mTitle2="探索大数据+AI的新的增长方式"
              btn="免费体验"
              img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
              onBtnClick={setFormVisible}
            />
          </Visible>
          <Visible xs sm>
            <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/hold-bottom-h5.png" alt="" />
          </Visible>

          <Visible md lg xl xxl xxxl>
            <Footer />
          </Visible>
          <Visible xs sm>
            <MyFooter>
              <img src="//cdn.byai.com/static/intro/img/Products/telecommuting/footer.png" alt="" />
            </MyFooter>
          </Visible>
        </Wrapper>
      )}
    </LayoutWithoutFooter>
  );
};

export default Telecommuting;
