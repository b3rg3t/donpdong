export const colors = {
    color1: "rgb(126, 38, 38)",
    color2: "rgb(61, 61, 61)",
    color3: "rgb(218, 155, 155)",
    color4: "lightgray",
    color5: "white"
}

const AmpStyling = (): React.ReactElement => {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
        font-family: "Dosis", sans-serif;
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
        background: ${colors.color3};
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.color1};
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
        color: ${colors.color2};
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
        margin: auto;
        font-weight: 400;
        font-size: 1rem;
        background-color: ${colors.color3};
        color: ${colors.color5};
        border-radius: 30px;
        border: 1px solid ${colors.color3};
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
      button:hover{
          background: ${colors.color1};
      }
      button:focus {
        outline: none;
        border: 1px solid ${colors.color1};
        border-radius: 30px;
      }
      button:disabled {
        background-color: ${colors.color4};
        border: 1px solid ${colors.color4};
      }
     
    `}</style>
  );
};

export default AmpStyling;
