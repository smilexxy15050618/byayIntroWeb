import React, { FC } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Visible, Hidden } from 'react-grid-system';
import { DataInfo, IDataInfoProps } from './DataInfo';

interface IProps {
  isMobileCarousel?: boolean;
  dataSource: IDataInfoProps[];
}

export const DataInfoGroup: FC<IProps> = props => {
  const { isMobileCarousel = false, dataSource } = props;
  if (isMobileCarousel) {
    return (
      <>
        <Visible xs sm>
          <Carousel>
            {dataSource.map((item, index) => (
              <CarouselItem key={index}>
                <DataInfo isOdd={index % 2 === 1} {...item} />
              </CarouselItem>
            ))}
          </Carousel>
        </Visible>
        <Hidden xs sm>
          {dataSource.map((item, index) => (
            <DataInfo key={index} isOdd={index % 2 === 1} {...item} />
          ))}
        </Hidden>
      </>
    );
  }
  return (
    <div>
      {dataSource.map((item, index) => (
        <DataInfo key={index} isOdd={index % 2 === 1} {...item} />
      ))}
    </div>
  );
};
