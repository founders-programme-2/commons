import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

// eslint-disable-next-line import/prefer-default-export

export const BurgerMenu = styled(Menu)`
  background: rgba(241, 231, 103, 1);
  background: -moz-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(241, 231, 103, 1)),
    color-stop(100%, rgba(255, 199, 41, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#ffc729', GradientType=1 );
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;

export const XIcon = styled.div`
  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
  margin-top: 1rem;
`;

export const BurgerIcon = styled.div`
  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
  margin: 2rem;
`;


export const MenuChild = styled(Link)`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  border-top: 1px black solid;
  width: 80vw;
  padding: 2rem 5rem;
  &:hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

export const TopLink = styled(MenuChild)`
  border: none;
`;

export const MenuText = styled.p`
  display: inline;
  color: var(--paragraph-color);
  font-size: 2rem;
  text-decoration: none;
  margin-left: 2rem;
  &:hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;
