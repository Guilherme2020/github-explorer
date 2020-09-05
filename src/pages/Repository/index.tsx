import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IssueFilter, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();
  const [filters] = useState([
    { state: 'all', label: 'Todas', active: true },
    { state: 'open', label: 'Abertas', active: false },
    { state: 'closed', label: 'Fechadas', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api
      .get(`repos/${params.repository}/issues`, {
        params: {
          state: filters[0].state,
          per_page: 5,
        },
      })
      .then(response => {
        setIssues(response.data);
      });
    // async function loadData(): Promise<void> {
    //   // const repository = await api.get(`repos/${params.repository}`);
    //   // const issues = await api.get(`repos/${params.repository}/issues`);

    //   const response = await Promise.all([
    //     api.get(`repos/${params.repository}`),
    //     api.get(`repos/${params.repository}/issues`),
    //   ]);
    // }
    // loadData();
  }, [params.repository]);
  const loadIssues = async (filter: any) => {
    const response = await api.get(`/repos/${params.repository}/issues`, {
      params: {
        state: filters[filter].state,
        per_page: 5,
        page,
      },
    });
    console.log(response.data);
    setIssues(response.data);
  };

  const handleFilterClick = async (filter: any) => {
    setFilterIndex(filter);

    loadIssues(filter);
  };

  return (
    <>
      {/* <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header> */}

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <IssueFilter active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            type="button"
            key={filter.label}
            onClick={() => handleFilterClick(index)}
          >
            {filter.label}
          </button>
        ))}
      </IssueFilter>

      <Issues>
        {issues.map(issue => (
          <a key={issue.html_url} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
