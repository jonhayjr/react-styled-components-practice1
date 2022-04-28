import styled from 'styled-components';

export const ParagraphElement = styled.p`
    color: ${({color}) => color ? color: 'black'};
    line-height: 1.5;
`