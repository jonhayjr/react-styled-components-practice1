import styled from 'styled-components';

export const StyledSubtitle = styled.h2`
    margin-top: 0;
    letter-spacing: 2px;
    color: ${({color}) => color ? color : 'black'}
`