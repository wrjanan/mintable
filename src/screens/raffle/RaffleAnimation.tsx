import { Card, Col, Row } from 'antd';
import React, { ReactElement, useState } from 'react';
import { ShadowStyle } from '../../styles/commons';
import RaffleDragToScreen from './RaffleDragToScreen';

type RaffleAnimation = {
  draggables: ReactElement[]
}

const RaffleAnimation: React.FC<RaffleAnimation> = ({draggables}): ReactElement => {

  const [parent, setParent] = useState(null);

  function handleDragEnd(over: any) {
    // call animation
    setParent(over ? over.id : null);
  }

  return (
    <Card style={ShadowStyle}>
      <Row gutter={[16, 16]}>
        <Col xs={{span:24, order:3}} md={{order:1}}>
          <RaffleDragToScreen id="raffledrag">
            {parent === "raffledrag" ? draggables : 'Drop here'}
          </RaffleDragToScreen>
        </Col>
        <Col xs={{span:24, order:2}}  md={{order:1}}>
          <Row>

          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default RaffleAnimation;
