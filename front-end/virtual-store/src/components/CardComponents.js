import styled from 'styled-components';
import { Paper, Typography } from '@material-ui/core';
import { Colors, Metrics } from './../theme';

export const CardContainer = styled(Paper)`
  border-radius: 30px;
  min-height: 127px;
  width: 100%;
  min-width: 250px;
  height: 50px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const CardTitle = styled(Typography)`
  font-family: ${Metrics.fontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #bd1622;
  margin-bottom: -20px;
  margin-left: -30px;
  cursor: pointer
`;

const CardValue = styled.h3`
  font-family: ${Metrics.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  color: ${Colors.text};
  margin-bottom: 100px;
  width: 100%;
  text-align: center;
  margin-right: 30px;
  cursor: pointer
  
`;

export default CardValue;