import config from '../../config.env';

export const DEV = process.env.NODE_ENV !== 'production';

export const GA_TRACKING_ID = '';
export const FB_TRACKING_ID = '';
export const SENTRY_TRACKING_ID = '';

export const SITE_NAME = '百应-以数智化驱动新商业文明';
export const SITE_TITLE = '';
export const SITE_DESCRIPTION =
  '百应AI，智能客户联络中心/AICC，AI（支持打断、自主话术配置、自动转接人工）由浙江百应科技有限公司研发，智能客户联络中心/AICC具有强大的逻辑理解思维、完善的语境应对能力、丰富的行业经验、拟人化的语言表达和快速反应水平，致力于帮助企业提升服务效率，解放企业创新能力，创造更大的价值。';
export const SITE_IMAGE = '';

export const INTRO_API = config.intro.API_URL;

const HOST_MAPPING = {
  test: {
    HOST: 'www.xinoa.cc',
    DS_HOST: 'ds.xinoa.cc',
  },
  prod: {
    HOST: 'www.byai.com',
    DS_HOST: 'ds.byai.com',
  },
};

export const HOST_NAME: { HOST: string; DS_HOST: string } = HOST_MAPPING[process.env.API_ENV || 'prod'];
