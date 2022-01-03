import React from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBg from "../../assets/login/background.jpg";
import { useGlobalContext } from "../../context";

const LoginSectionStyles = styled.section`
  margin: 5rem 0;
  width: 100vw;
  .login__wrapper {
    padding: 2rem;
    display: flex;
    flex-direction: row;

    .login__paragraph {
      font-weight: 600;

      &--light {
        font-size: 0.9rem;
        font-weight: 400;
      }
    }

    .login__button {
      width: 100%;
      text-align: center;
      padding: 1rem;
    }

    &--form {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 100%;

      .login__form {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        width: 100%;
        gap: 2rem;

        label {
          width: 100%;
          font-weight: 600;
          input {
            width: 100%;
            height: 40px;
            border: 1px solid var(--grey_1);
            border-radius: 0.25rem;
            padding-left: 0.5rem;
            font-family: inherit;
            font-size: 1.1rem;
            outline: 2px solid transparent;
            transition: outline 0.25s;
            margin-top: 0.35rem;

            &:active,
            &:focus {
              outline: 2px solid var(--blue_1);
            }

            &:hover:not(:focus) {
              outline: 2px solid var(--blue_2);
            }

            &::placeholder {
              opacity: 0.4;
            }
          }
        }
      }
      .line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
        position: relative;

        .line__right,
        .line__left {
          background-color: var(--grey_1);
          height: 1px;
          width: 100%;
        }
      }

      .form__addAction {
        margin-top: 2rem;
        a {
          text-decoration: underline;
        }
      }
    }
    &--image {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .login__wrapper--image {
      display: flex;
      width: 70%;
      margin-top: -20vh;
      position: relative;

      img {
        width: 120%;
      }
    }
    .login__wrapper--form {
      padding-right: 2rem;
      width: 30%;
    }

    .signup__info {
      position: absolute;
      top: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      width: 100%;

      h1 {
        max-width: 500px;
        margin: 0 auto;
        font-size: 2rem;
      }
    }
  }
`;

function LoginSection({ type = "login" }) {
  const { checkingName } = useGlobalContext();

  return (
    <LoginSectionStyles>
      <div className='login__wrapper'>
        <div className='login__wrapper--form'>
          <Title className='login__title'>Hi there!</Title>
          {type === "login" ? (
            <Paragraph className='login__paragraph'>
              Have we met before
            </Paragraph>
          ) : (
            <>
              <Paragraph className='login__paragraph'>
                Get started with your free account today.
              </Paragraph>
              <Paragraph className='login__paragraph--light'>
                No credit card required.
              </Paragraph>
            </>
          )}
          <form className='login__form'>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                name='email'
                id='email'
                placeholder='name@email.com'
              />
            </label>
            <label htmlFor='passwd'>
              Password
              <input
                type='password'
                name='passwd'
                id='passwd'
                placeholder='********'
              />
            </label>
            <Button
              secondary
              text={`${type === "login" ? "Log In" : "Create my free account"}`}
              className='login__button'
            />
            <div className='line'>
              <div className='line__left'></div>
              <div className='line__text'>Or</div>
              <div className='line__right'></div>
            </div>
            <Button
              outline
              text={`${
                type === "login"
                  ? "Login in with Google"
                  : "Sign up with Google"
              }`}
              className='login__button'
            />
          </form>
          <div className='form__addAction'>
            {type === "login" ? (
              <>
                <Link to='/'>Forgot my password</Link>
                <Paragraph>
                  Don't have an account?{" "}
                  <Link to='/signup' role='button' onClick={checkingName}>
                    Sign up
                  </Link>
                </Paragraph>
                <Link to='/'>Login with SSO</Link>
              </>
            ) : (
              <>
                <Paragraph>
                  Already have an account?
                  <Link to='/login' role='button' onClick={checkingName}>
                    Login In
                  </Link>
                </Paragraph>
                <Paragraph>
                  By signing up, I agree to Maze’s
                  <Link to='/'> terms & conditions</Link>
                </Paragraph>
              </>
            )}
          </div>
        </div>
        <div className='login__wrapper--image'>
          <img src={LoginBg} alt='login-bg' />
          <div className='signup__info'>
            <Title>You’ll be in good company.</Title>
          </div>
        </div>
      </div>
    </LoginSectionStyles>
  );
}

export default LoginSection;
