import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    &:hover {
      color: #666;
      transition: color 0.2s;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: ${props => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${props => props.theme.colors.p};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    margin-bottom: 80px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: ${props => props.theme.colors.textColor};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${props => props.theme.colors.p};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: ${props => props.theme.colors.text};
      }

      p {
        font-size: 20px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

interface IssueFilterProps {
  active: number;
}
export const IssueFilter = styled.div`
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;

    width: 210px;
    height: 53px;
    border-radius: 40px;
    border: 0;
    background: #576574;
    color: #fff;
    font-weight: bold;
    -webkit-transition: background-color 0.2ms;
    transition: background-color 0.2ms;

    &:nth-child(${(props: IssueFilterProps) => props.active + 1}) {
      background: #04d361;
      color: white;
    }
  }
`;
