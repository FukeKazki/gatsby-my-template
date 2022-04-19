import { css } from "@emotion/react";
import { Button } from "~/components/shared/Button";

const text = css`
  color: red;
`;

const IndexPage = () => {
  return (
    <div css={text}>
      <p>hello</p>
      <Button>あは</Button>
    </div>
  );
};

export default IndexPage;
