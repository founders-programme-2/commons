import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// eslint-disable-next-line import/prefer-default-export
export const MenuHover = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
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

  width: 100vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 0;
`;

export const LinkSty = styled(Link)`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  border-top: 1px black solid;
  padding: 2rem;
  margin: 0 5rem;
`;

export const TopLink = styled(LinkSty)`
  border: none;
`

export const P = styled.p`
  color: black;
  font-size: 2rem;
  text-decoration: none;
  padding-left: 2rem;
  &:hover {
    cursor: pointer;
    color: #e882a8;
  }
`;
