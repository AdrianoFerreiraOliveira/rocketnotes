import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 6px;

    

    color: ${({ theme}) => theme.COLORS.BLACK};
    background-color: ${({ theme}) => theme.COLORS.BLUE};

`;