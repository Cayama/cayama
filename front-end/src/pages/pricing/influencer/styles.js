import styled from 'styled-components';

const ToolbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        .button {
            position: absolute;
            top: 0;
            right: 0px;
        }

        nav {
            margin: 10px 0 10px 0;
        }
    }
`;

export { ToolbarContainer };
