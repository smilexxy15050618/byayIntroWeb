import React from 'react';
import OriginComponent from '../../product/voice-robot';
import { HOST_ENUM } from '../../../src/lib/utils';
const Component = (props: any) => {
  return <OriginComponent {...props} hostType={HOST_ENUM.PF_HOST}></OriginComponent>;
};
export default Component;
