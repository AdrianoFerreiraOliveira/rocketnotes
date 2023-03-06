import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;


    border-bottom-width: 0.1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme })=> theme.COLORS.BLUE};

    display: flex;
    justify-content: space-between;


    padding: 0 80px;   

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width:56px;
        height: 56px;
        border-radius: 50%;

    }
> div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
        font-size: 18px;
        color: ${({ theme })=> theme.COLORS.BLUE};
    }

    strong {
        font-size: 18px;
        color: ${({ theme })=> theme.COLORS.WHITE};
    }
}
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({ theme })=> theme.COLORS.BLUE};
        font-size:24px;
    }
`;