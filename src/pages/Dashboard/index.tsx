import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/13275749?s=460&u=682cb54fbd651a6ac8548f3123418e82f6c9087c&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable Reacjs</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/13275749?s=460&u=682cb54fbd651a6ac8548f3123418e82f6c9087c&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable Reacjs</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/13275749?s=460&u=682cb54fbd651a6ac8548f3123418e82f6c9087c&v=4"
            alt="Guilherme"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable Reacjs</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
