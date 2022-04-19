import { css } from "@emotion/react";

const text = css`
  color: red;
`;

const IndexPage = () => {
  return (
    <div css={text}>
      <p>hello</p>
    </div>
  );
};

export default IndexPage;
