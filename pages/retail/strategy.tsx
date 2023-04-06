import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Pane from '../../src/components/homepage/version2023/Pane';

export type IStrategyProps = {};

const Strategy: FC<IStrategyProps> = ({}) => {
  return (
    <Pane title="百应策略: 被TOP品牌验证的会员运营策略" desc="提升超级会员占比 拉升会员LTV">
      <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ textAlign: 'center', maxWidth: '100%' }}
          src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E5%9B%BE1.png"></img>
      </div>
    </Pane>
  );
};

export default Strategy;
