import React from 'react';
import OriginComponent from '../../partner/ecology';
import { HOST_ENUM } from '../../../src/lib/utils';
const Component = (props: any) => {
  return <OriginComponent {...props} hostType={HOST_ENUM.DS_HOST}></OriginComponent>;
};
export default Component;
