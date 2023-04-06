import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Pane from '../../src/components/homepage/version2023/Pane';

const Play: FC = ({}) => {
  return (
    <Pane paneBgColor="grey" title="百应玩法: 行业领先的“单次AI电话”运营方法论" desc="一式 × 三率 × 七变量">
      <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ textAlign: 'center', maxWidth: '100%' }}
          src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E5%9B%BE2.png"></img>
      </div>
    </Pane>
  );
};

export default Play;
