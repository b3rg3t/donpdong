import { colors, font } from "../../helpers/helpdata";

const AmpStyling = (): React.ReactElement => {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
        font-family: ${font.fontFamily};
      }
      html {
        scroll-behavior: smooth;
        overflow-x: hidden;
      }
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${colors.secondary};
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.primary};
      }

      .layout {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .site-content {
        flex: 1;
      }
      a {
        text-decoration: none;
      }

      a,
      p,
      ul,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figcaption {
        color: ${colors.third};
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 2.6rem;
      }
      h2 {
        font-size: 2.3rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: 700;
      }
      li {
        list-style: none;
      }
      button {
        height: 40px;
        width: 120px;
        margin: auto;
        font-weight: 700;
        font-size: 1rem;
        background-color: ${colors.secondary};
        color: ${colors.white};
        border-radius: 30px;
        border: 1px solid ${colors.secondary};
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
      button:hover {
        background: ${colors.primary};
        border: 1px solid ${colors.primary};
      }
      button:focus {
        outline: none;
        border: 1px solid ${colors.primary};
        border-radius: 30px;
      }
      button:disabled {
        background-color: ${colors.lightgray};
        border: 1px solid ${colors.lightgray};
      }
    `}</style>
  );
};

export default AmpStyling;
