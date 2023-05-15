import { FC, useEffect} from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
interface  SceneSolution{

}
const Pane = styled.div`
    padding-top: 66px;
    background: rgba(246, 252, 255, 1);
    .title {
        font-size: 40px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 48px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
        @media (max-width: 768px) {
            padding-top: 40px;
            font-size: 24px;
            font-weight: 500;
            line-height: 40px;
        }
    }
    .desc {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
        margin: 16px auto 40px;
        @media (max-width: 768px) {
            padding-top: 14px;
            padding-bottom: 24px;
            margin: 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    }
`

const MainWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    transform: translateY(50%);
    transition: all 0.2s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    @media (max-width: 768px) {
        animation: none;
    }
    .carditem{
        position: relative;
        width: 588px;
        height: 208px;
        margin-bottom: 24px;
        margin-right: 24px;
        &:nth-child(2n){
            margin-right: 0;
        }
        img{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 588px;
            height: 208px;
            opacity: 0.22;
        }
        .title{
            position: absolute;
            left: 36px;
            top: 36px;
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            color: rgba(0, 0, 0, 1);
        }
        .subtitle{
            position: absolute;
            left: 36px;
            top: 103px;
            padding-right: 44px;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            color: rgba(0, 0, 0, 1);
        }
    }
`

const carouselDataList = [
    {
        bgImg:'/gongan-scene-1.svg',
        title: '底数摸排场景',
        subtitle:'AI社工以多轮对话的形式对业主的实际居住情况、房屋内人员的实际居住情况进行调研，完成用户信息的采集及更新'
    },
    {
        bgImg:'/gongan-scene-2.svg',
        title: '宣传宣防场景',
        subtitle:'利用居民画像，实现平安三率、精神文明、垃圾分类、反诈反邪教等全方位点对点的精准宣防，一键触达'
    },
    {
        bgImg:'/gongan-scene-3.svg',
        title: '政务服务场景',
        subtitle:'政务服务向乡镇街道延伸，以AI支撑业务咨询引导办理，提升网办率，打通服务群众“最后一百米”'
    },
    {
        bgImg:'/gongan-scene-4.svg',
        title: '巡查及自查上报场景',
        subtitle:'建议与辖区群防群治力量/居民、规范、紧密、有效、结构化的服务、指挥、互动、管理渠道，形成群防群治完整闭环'
    }
]


const SceneSolution: FC<SceneSolution> = ({}) => {
   
const HANGYE = 'hangye_2023_2009d'
useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(HANGYE);
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: -60, //从开始点滚动多少px触发（施法前摇）
        duration: 200, //效果持续的距离（法术持续时间/距离）
      })
        .addTo(controller)
        .on('enter', () => {
            videoContent.classList.add('appear')
            // console.log('进入');
            controller.destroy();
        });
  }, []);
    return (
        <Pane>
        <div class="title">应用场景</div>
        <div class="desc">基层日常工作</div>
        <MainWrap id={HANGYE}>
            {carouselDataList.map(item => 
                <div className='carditem'>
                    <img src={imgurl+item.bgImg} width={117}/>
                    <div className='title'>{item.title}</div>
                    <div className='subtitle'>{item.subtitle}</div>
                </div>
            )}
        </MainWrap>
        </Pane>
    );
  };
  
  
export default SceneSolution;
