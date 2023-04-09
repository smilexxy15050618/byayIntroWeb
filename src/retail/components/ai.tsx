import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Pane from '../../../src/components/homepage/version2023/Pane';
import styled from 'styled-components';

const titleList = [
    {
        title: '用户管理',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产'
    },
    {
        title: '精准营销',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产'
    },
    {
        title: '智能触达',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产'
    },
    {
        title: '数据化运营',
        subTitle: '智能化打标，打造多维度标签体系智能分析意向，构建用户画像360用户精细化分层，精准营销触达赋能运营人员，有效管理用户资产'
    },
]
export type IStrategyProps = {};
const ListWrapper = styled.div`
width: 296px;
`
const ListItem = styled.div`
 width: 296px;
 height: 224px;
 background: rgba(43, 88, 249, 1);
`

const Strategy: FC<IStrategyProps> = ({}) => {
  return (
    <Pane title="AI赋能零售品牌全域增长，打造核心用户价值" desc="助力品牌高效引流获客、营销增长、精细化运营，提升会员体验和业绩增量">
      <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <ListWrapper>
      {titleList.map(({title,subTitle},index)=> {
        return (
            <ListItem>
                <div>{title}</div>
                <div>{subTitle}</div>
            </ListItem>
        )
      })}
      </ListWrapper>
      </div>
    </Pane>
  );
};

export default Strategy;
