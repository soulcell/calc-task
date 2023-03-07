import styled from 'styled-components';
import theme from '../../styled/theme';

export const Button = styled.button`
    width: 150px;
    height: 150px;
    font-size: 2em;
    border: 1px solid ${theme.border};
    border-radius: 32px;
    padding: 0;
`

export const StyledKeypad = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 45px 45px;
    padding: 30px;
`
