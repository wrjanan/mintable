import { Col } from "antd";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";


type FooterColsProps = {
  title: string,
  path?: string,
}

export const FooterCols: React.FC<FooterColsProps> = (props): ReactElement => {
  const {title, path} = props;
  const navigate = useNavigate();
  const handleClick = (path: string | undefined) => {
    if (path) navigate(path);
  }
  return (
    <Col onClick={()=> handleClick(path)}>{title}</Col>
  );
};
