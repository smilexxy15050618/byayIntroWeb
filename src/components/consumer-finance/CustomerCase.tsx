import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../../components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
interface  SceneSolution{

}
const Wrapper = styled.div`
    
`
const HoveUp = styled.div`
   width: 1248px;
   margin:0 auto; 
`
const Card = styled.div`
   width: 1200px;
   margin:0 auto;
   display:flex;
   justify-content: space-between;
   .carditem{
       position: relative;
        width: 284px;
        height: 364px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
        overflow: hidden;
    img.logo{
        height: 160px;
        border-radius: 8px 8px 0 0;
        &:hover{
            transform: scale(1.02);
            transition: transform 0.4s;
        }
    }
    
    .textt_area{
        padding: 32px 24px;
        font-size: 16px;
        line-height: 26px;
        font-size: 16px;
        line-height: 26px;
        color: rgba(0, 0, 0, 1);
    }
    .demo-go{
        display: block;
        padding-left:24px;
        padding-top: 26px;
        font-size: 16px;
        color: rgba(43, 88, 249, 1);
        &:hover{
            
        }
    }
   }
`


const CustomerCaseList = [
    {
        title:'贷前、贷中、贷后全链路运营服务，助力小米信贷业务增长',
        imgUrl: '/case-01.png',
        pageUrl: '/form?formType=1'
    },{
        title:'用AI和数据赋能业务增长，授信率、放款额等关键指标提升40%',
        imgUrl: '/case-02.png',
        pageUrl: '/form?formType=1'
    },{
        title:'助力电销业务提质增效，实现效率效能双增长',
        imgUrl: '/case-03.png',
        pageUrl: '/form?formType=1'
    },{
        title:'提供智能用户运营平台，推动招联消金私域业务人效提升100%',
        imgUrl: '/case-04.png',
        pageUrl: '/form?formType=1'
    }
]
const MainWrap = styled.div`
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
`

const AISOLUTION = 'ai_jiejue_2919'
const CustomerCase: FC<SceneSolution> = ({}) => {
 
    const [wrapindex, setWrapindex] = useState(0);

    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(AISOLUTION);
        new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
    }, []);

    return (
        <Pane title="客户案例" titleStyle={{marginBottom:'56px'}} paneBgColor="white" style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
            <MainWrap id={AISOLUTION}>
                <HoveUp>
                    <Card>
                        {CustomerCaseList.map(item => 
                            <div className='carditem'>
                                <img  className="logo" src={imgurl+item.imgUrl} />
                                <div className='textt_area'>
                                    {item.title}
                                </div>
                                <a href={item.pageUrl} className="demo-go">了解详情 →</a>
                            </div>
                        )}
                    </Card>
                </HoveUp>
            </MainWrap>
        </Pane>
    );
  };
  
  
export default CustomerCase;