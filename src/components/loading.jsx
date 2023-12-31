import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <div class="container-middle">
        <span class="tiktok-loader"></span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .container-middle {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tiktok-loader {
    width: 80px;
    height: 40px;
    position: relative;
  }

  .tiktok-loader::before,
  .tiktok-loader::after {
    position: absolute;
    content: "";
    top: 6px;
    background-color: #ff3e9e;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: tiktok-loader-anim 1s linear infinite;
  }

  .tiktok-loader::after {
    background-color: #4de8f4;
    animation-delay: 0.5s;
  }

  @keyframes tiktok-loader-anim {
    0%,
    100% {
      top: 6px;
      left: 0px;
      width: 28px;
      height: 28px;
      z-index: 0;
    }

    25% {
      top: 0px;
      height: 40px;
      width: 40px;
      z-index: 1;
      left: 20px;
    }

    50% {
      top: 6px;
      width: 28px;
      height: 28px;
      left: 48px;
    }

    75% {
      top: 8px;
      width: 28px;
      height: 28px;
      left: 26px;
    }
  }
`;

export default Loading;
