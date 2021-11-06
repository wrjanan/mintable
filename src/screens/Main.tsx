import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import React, { ReactElement } from 'react';
import { MainFooter } from '../components/mainfooter/MainFooter';
import { MainHeader } from '../components/mainheader/MainHeader';
import { ContentStyle } from '../styles/commons';

export const Raffle: React.FC = (): ReactElement => {

  return (
    <Layout>
      <MainHeader />

      <Content style={ContentStyle}>
        <Row>
          <Col>
            <Title>Main Landing Page</Title>
          </Col>
        </Row>
      </Content>
      <MainFooter />
    </Layout>
  );
}

export default Raffle;
