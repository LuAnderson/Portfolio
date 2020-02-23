import styled from 'styled-components';

export const Header = styled.section`
    align-items: center;
    background-color: #282c34;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    min-height: 100vh;
    text-align: center;
`;

export const Image = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
`;

export const Text = styled.p`
`;

export const Anchor = styled.a`
    color: #61dafb;

    @keyframes App-logo-spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
`;
