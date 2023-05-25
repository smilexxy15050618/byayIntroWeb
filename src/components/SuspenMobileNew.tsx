import { Conversation, Fork } from '@indata/icon-byai';
import { FC, ReactNode, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { CALL_NUMBER_400 } from '../constants';
import './styles/mobile-suspan-modal.css';
import { FormType } from './TryForm';
// const IMG_CODE = 'https://cdn.byai.com/static/intro/img/footer/one-to-one.png';
const IMG_CODE =
  'https://cdn.byai.com/static/intro/img/footer/%E4%B8%BB%E5%AE%98%E7%BD%91-%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%B4%BB%E7%A0%81.png';
interface IProps {
  className?: string;
  children?: ReactNode;
  setForm: (visible: boolean, type?: FormType) => void;
}

const HoverIcon = styled(Conversation)`
  font-size: 32px;
  color: white;
  background: #2b58f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  right: 16px;
  bottom: 68px;
  box-shadow: 0px 14px 22px 0px rgba(3, 43, 183, 0.32);
  :hover {
    background: #1742de;
  }
`;

const Close = styled(Fork)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

const ModalBody = styled(Modal.Body)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 38px 0px 24px;
  position: relative;
  .descc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 20px;
  }
  img {
    width: 140px;
    margin-bottom: 16px;
  }
  a {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #2b58f9 !important;
    line-height: 22px;
  }
  .call {
  }
`;

const RawSuspenMobileNew: FC<IProps> = ({ className, setForm }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={className}>
      <div onClick={() => setShow(true)}>一对一咨询</div>
      <div onClick={() => setForm(true, 1)}>立即体验</div>
      <div onClick={() => setForm(true, 1)}>渠道合作</div>
      <HoverIcon onClick={() => setForm(true, 1)} />
      <Modal show={show} centered>
        <ModalBody>
          <div className="descc">微信扫码，1对1沟通</div>
          <img src={IMG_CODE} />
          <div className="descc call">咨询热线</div>
          <a href={`tel:${CALL_NUMBER_400}`}>{CALL_NUMBER_400}</a>
          <Close onClick={() => setShow(false)} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export type ISuspenMobileNewProps = IProps;
const SuspenMobileNew = styled(RawSuspenMobileNew) < ISuspenMobileNewProps > `
  position: fixed;
  z-index: 50;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 13px 0px rgb(3 43 183 / 21%);
  left: 0;
  bottom: 0;
  width: 100%;
  height: 52px;
  background: #ffffff;
  > div {
    font-size: 16px;
    font-weight: 500;
    color: #2b58f9;
    line-height: 24px;
    text-align: center;
  }
  > div:nth-child(1) {
    // border-right: 1px solid rgb(230, 230, 230);
    flex: 1;
  }
  > div:nth-child(2) {
    flex: 1;
    // border-left: 1px solid rgb(230, 230, 230);
    // border-right: 1px solid rgb(230, 230, 230);
    background: rgba(43,88,249,1);
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
    margin-top: -8px;
    color: #fff;
  }
  > div:nth-child(3) {
    flex: 1;
  }
`;
export default SuspenMobileNew;
