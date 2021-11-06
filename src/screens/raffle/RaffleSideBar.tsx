import { Button, Card, Col, Layout, Row } from 'antd';
import React, { ReactElement } from 'react';
import { ContentStyle, ShadowStyle } from '../../styles/commons';

const title = () => {
  return (<>
    <h3>Get More Tickets</h3>
    <Button type="primary">Buy</Button>
  </>)
}

type RaffleSideBarProps = {
  draggables: ReactElement[]
}

const RaffleSideBar: React.FC<RaffleSideBarProps> = ({draggables}): ReactElement => {
  return (
    <Card title={title()} style={{...ShadowStyle, zIndex:10}}>
      <Row gutter={[16, 16]}>
        <Col xs={{span:24, order:2}} md={{order:0}}>
        </Col>
        <Col xs={{span:24, order:1}}  md={{order:0}}>
          {draggables}
        </Col>
      </Row>
    </Card>
  );
}

export default RaffleSideBar;
