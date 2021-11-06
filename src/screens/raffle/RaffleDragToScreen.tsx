import React, { CSSProperties, ReactElement } from 'react';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useDroppable } from '@dnd-kit/core';


const DraggableStyle: CSSProperties = {
  minHeight: "60vh",
}

type DraggableProps = {
  id: string
}

const RaffleDragToScreen: React.FC<DraggableProps> = (props): ReactElement => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={{...DraggableStyle, ...style}}>
      {props.children}
    </div>
  );
}

export default RaffleDragToScreen;
