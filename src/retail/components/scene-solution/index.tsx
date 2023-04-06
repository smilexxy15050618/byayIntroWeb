import classNames from 'classnames';
import { FC, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-grid-system';
import { SceneItem } from './SceneItem';
import { Wrapper } from './styled';

export interface ISceneSolutionMobileProps {
  title?: string;
  dataList: any[];
  onJumpClick: () => void;
}

const SceneSolutionMobile: FC<ISceneSolutionMobileProps> = ({ title = '场景解决方案', dataList, onJumpClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleCarouselChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Wrapper>
      <div className="title">{title}</div>
      <div className="tab-wrapper">
        <Container fluid>
          <Row>
            {dataList.map(({ tabName }, index) => {
              return (
                <Col>
                  <div
                    className={classNames('tab-item', { active: index === activeIndex })}
                    onClick={() => handleTabClick(index)}>
                    {tabName}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="content-wrapper">
        <Carousel
          controls={false}
          indicators={false}
          touch={false}
          interval={null}
          activeIndex={activeIndex}
          onSelect={handleCarouselChange}>
          {dataList.map(item => (
            <Carousel.Item>
              <SceneItem data={item} tabIndex={activeIndex} onJumpClick={onJumpClick} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
};

export default SceneSolutionMobile;
