import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media(maxwidth: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`