import { HOST_ENUM } from '../../src/lib/utils';
import OriginComponent from '../news';
const Component = (props: any) => {
  return <OriginComponent {...props} hostType={HOST_ENUM.PF_HOST}></OriginComponent>;
};
export default Component;
