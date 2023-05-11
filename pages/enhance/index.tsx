import React from 'react';
import { Visible } from 'react-grid-system';
import { Layout } from '../../src/components/Layout';
import { NextFunctionComponent } from 'next';
import { IndustryCarousel } from './components/IndustryCarousel-2023';
import { ProductCapability } from './components/ProductCapability';
import { ProductValue } from './components/ProductValue';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js'
import styled from 'styled-components';
import { FormType } from '../../src/components/TryForm';

const FOOTER_BG = `${imgurl}/kqaizl.png`;
const Wrapper = styled.div``

const Intelligence: NextFunctionComponent = () => {
    return (
        <Layout headPlaceholder={[false, false]} headFontStyle={['light', 'light']} initialOpacity={true}>  
            {
                (visible, setFormVisible) => (
                    <Wrapper>
                            <IndustryCarousel></IndustryCarousel>
                            <ProductCapability></ProductCapability>
                            <ProductValue></ProductValue>
                            <ByVoiceFooter
                                title="就现在，开启AI电话增长之旅"
                                desc="留下联系方式，将有AI行业专家为您提供专属服务"
                                btnText="与我联系"
                                background={`url(${FOOTER_BG})`}
                                onClick={() => {
                                    setFormVisible(true, FormType.CUSTOMER);
                                }}
                            />
                    </Wrapper>
                )
            }
        </Layout>
    )
}

export default Intelligence;