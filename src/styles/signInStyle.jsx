import styled from "styled-components";
export const SignInWrapper = styled.div`
  background-color: #fff;
  .main-content {
    min-height: 650px;
    padding-top: 100px;
    display: block;
  }

  .page-content {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .page-width {
    padding: 0 40px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .grid {
    list-style: none;
    margin: 0;
  }

  .grid__item[class*="--push"] {
    padding: 20px;
    background-color: #fff;
    position: relative;
    border-radius: 4px;
  }
  .medium-up--push-one-third {
    left: 33.33333%;
  }
  .medium-up--one-third {
    width: 33.33333%;
  }
  .section-header {
    margin-bottom: 50px;
  }
  .section-header__title {
    margin-bottom: 0;
    font-size: 1.76471em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
    transition: 0.5s;
    border-left: 15px solid #000;
    padding-left: 15px;
  }
  .note--success {
    color: #56ad6a;
    background-color: #ecfef0;
    border-color: #56ad6a;
  }
  .note {
    border-radius: 0;
    padding: 6px 12px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    text-align: left;
  }
  .hide {
    display: none !important;
  }
  .display {
    display: block !important;
  }

  .form-vertical {
    margin-bottom: 20px;
  }
  form {
    margin: 0;
    display: block;
  }
  .form-vertical input {
    display: block;
    margin-bottom: 30px;
    min-width: 250px;
  }

  input {
    background-color: transparent;
    color: inherit;
    border: 1px solid #e8e8e1;
    max-width: 100%;
    padding: 8px 10px;
    -webkit-appearance: none;
    border-radius: 0;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  label {
    cursor: pointer;
    display: block;
    margin-bottom: 10px;
    font-size: 0.76471em;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  input.input-full {
    width: 100%;
  }
  .one-half {
    width: 50%;
  }
  .text-right {
    text-align: right !important;
  }
  .label-info {
    display: block;
    margin-bottom: 10px;
  }
  small {
    font-size: 0.9em;
  }
  .grid__item {
    float: left;
    min-height: 1px;
  }
  a {
    color: #000;
    text-decoration: none;
    background: 0;
    font-weight: 500;
  }
  p {
    margin: 0 0 20px;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 17px;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  .form-vertical .btn {
    display: inline-block;
  }
  input[type="submit"] {
    cursor: pointer;
  }
  .btn--full {
    width: 100%;
    padding: 9px 20px;
    font-size: 0.94118em;
  }

  .btn {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0;
    line-height: 1.42;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    border: 1px solid transparent;
    user-select: none;
    -webkit-appearance: none;
    border-radius: 2px;
    color: #fff;
    transition: 0.5s;
    background: #000;
  }
  .btn:hover {
    opacity: 0.8;
  }
  //////forgot password reset////////
  h2 {
    font-size: 1.58824em;
    margin: 0 0 20px;
    display: block;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0;
    line-height: 1.2;
  }
  button {
    background: 0;
    border: 0;
    display: inline-block;
    cursor: pointer;
    overflow: visible;
    -webkit-appearance: none;
    font-family: Quicksand, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.6;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
  }
  /////set color//////
  .colors {
    position: absolute;
    right: 10px;
    padding: 10px;
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
  }
  .colors span {
    position: relative;
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
  .colors span.active {
    border: 2px solid #333;
    scale: 1.5;
  }
`;
