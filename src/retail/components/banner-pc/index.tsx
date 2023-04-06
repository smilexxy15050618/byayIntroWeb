import React, { VFC } from 'react';
import { retailUrl } from '../../../lib/utils';

const BannerWrapper: VFC = () => {
  return (
    <div className="banner">
      <div className="title">
        <div>TOP零售品牌都在用</div>
        <div>数智化增长提效从这里开始</div>
        <button
          onClick={() => {
            window.open(retailUrl('/form?formType=1'));
          }}>
          和我们的顾问聊聊 ››
        </button>
      </div>
    </div>
  );
};

export default BannerWrapper;
