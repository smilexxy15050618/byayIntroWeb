import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { assign, clone } from 'lodash';
interface INodePropsMap {
  label: string | string[];
  id: any;
  children: string | string[];
}

// 判断是否是string数组
const isStringArr = (param: any): param is string[] => {
  return param instanceof Array && param.every(item => typeof item === 'string');
};
// 修改原数组中每一项对象key名改为 nodePropsMap的key名(label,id,children等)
const mapKey = (data: any[], nodePropsMap: INodePropsMap, level: number) =>
  data.map(item => {
    const shallow = clone(item);
    for (const key in nodePropsMap) {
      const value = nodePropsMap[key];
      // 对象原先没有指定的label，children等key时，进行转换
      if (shallow[key] === undefined) {
        if (isStringArr(value)) {
          value.forEach(oldKey => {
            shallow[key] = shallow[oldKey] || shallow[key];
          });
        } else {
          shallow[key] = shallow[value];
        }
      }
    }
    shallow.level = level; // 添加level
    return shallow;
  });

type IChildren = (nodeInfo: any, toggleExpand: () => void, nodeTrain: any[]) => React.ReactNode;
interface IProps {
  className?: string;
  children: IChildren;
  nodePropsMap: INodePropsMap;
  data: any[]; // 表示子节点数组
  repelExpandLevel?: number[];
  selfExpand?: boolean;
  level?: number;
  nodeTrain?: any[];
}
const RawByTree: FC<IProps> = ({
  className,
  data,
  nodePropsMap,
  children,
  selfExpand = true,
  level = 1,
  repelExpandLevel = [],
  nodeTrain = [],
}) => {
  const handledData = mapKey(data, nodePropsMap, level);
  let [subExpands, setSubExpands] = useState(handledData.map(() => false));
  useEffect(() => {
    // 祖先节点闭合时子节点也闭合
    if (!selfExpand) setSubExpands(subExpands.map(() => false));
    // 具有followExpand 的子节点在父节点展开时也同时展开
    if (selfExpand) {
      const temp = data.map(item => Boolean(item.followExpand) || false);
      setSubExpands(temp);
    }
  }, [selfExpand]);
  // 处理暴露给children的nodeInfo
  const handleNodeInfo = (item: any, isExpand: boolean, array: any[], index: number) => {
    return assign(item, {
      isExpand,
      levelFirst: index === 0,
      levelLast: index === array.length - 1,
      levelIndex: index,
      levelTotal: array.length,
    });
  };
  // 改变展开状态的函数
  const toggleExpand = (item: any, i: number) => {
    if (item.followExpand) return; // 如果是跟随展开就不支持手动展开了
    subExpands[i] = !subExpands[i]; // 点击项取反
    if (repelExpandLevel.includes(level)) {
      subExpands = subExpands.map((bool, j) => bool && j === i); // 维持 只有 当前点击项是true的情况
    }
    setSubExpands([...subExpands]);
  };
  // 获取新nodeTrain(由根节点到当前节点对象构成的数组)
  const getNewNodeTrain = item => {
    const copy = clone(nodeTrain);
    copy.push(item);
    return copy;
  };
  return (
    <div className={`${className} tree-list`}>
      {selfExpand &&
        handledData.map((item: any, i: number, array: any[]) => {
          return (
            <div key={i}>
              {/* 每一项label的HTML在这里，在children中调用第三个参数即可触发展开 */}
              {children(
                handleNodeInfo(item, subExpands[i], array, i),
                () => toggleExpand(item, i),
                getNewNodeTrain(item),
              )}
              {/* 根据item.children是否存在来渲染子项  */}
              {item.children && item.children.length && (
                <ByTree
                  data={item.children}
                  nodePropsMap={nodePropsMap}
                  selfExpand={subExpands[i]}
                  level={level + 1}
                  repelExpandLevel={repelExpandLevel}
                  nodeTrain={getNewNodeTrain(item)}>
                  {children}
                </ByTree>
              )}
            </div>
          );
        })}
    </div>
  );
};

export interface IByTreeProps extends IProps {
  width?: string;
}

/**
 * @param nodePropsMap 用于替换指定key名 -> label,id,children等
 * @param data 数据结构必须是[{},{[]}]这样数组对象循环嵌套的结构
 * @param children 每个子节点的jsx (nodeInfo, toggleExpand, nodeTrain) => React.ReactNode
 * @param repelExpandLevel 展开互斥层级 number[]
 * @param width 树整体的宽度(节点wrapper宽度也相同) 100%
 * @param selfExpand 树是否展开，默认第一层树是展开的 true
 * @param level 树的开始层级，默认是1
 */
const ByTree = styled(RawByTree)<IByTreeProps>`
  width: ${props => props.width || '100%'};
  height: auto;
  transition: 0.6s;
  overflow: ${props => (props.level > 1 ? 'hidden' : 'visible')};
  max-height: ${props => (props.level > 1 ? (props.selfExpand ? '1200px' : '0px') : 'none')};
`;
export default ByTree;
