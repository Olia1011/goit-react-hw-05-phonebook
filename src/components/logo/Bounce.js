import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

export const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`}`;