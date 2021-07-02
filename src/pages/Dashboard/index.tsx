import React, { useEffect, useState } from 'react';
import { Container, Form, ListSelecao, Title } from './style';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface SelecaoCad {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [selecao, setSelecao] = useState<SelecaoCad[]>();

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setSelecao(response.data);
    });
  }, [selecao]);

  async function handleAddEvent(event: any) {
    event.preventDefault();

    const { target: form } = event;

    const copa_mundo = {
      ano: form.ano.value,
      sede: form.sede.value,
      campeao: form.campeao.value,
    };

    await api.post('worldcup', copa_mundo);
  }

  function deleteCadastro(id: string) {
    api.delete(`/worldcup/${id}`);
    history.push('/');
  }

  return (
    <Container>
      <Title>
        Fifa World Cup<span> !</span>
      </Title>
      <Form onSubmit={handleAddEvent}>
        <input type="text" name="ano" placeholder="Digite o ano da copa" />
        <input
          type="text"
          name="sede"
          placeholder="Digite o local sede do torneio"
        />
        <input
          type="text"
          name="campeao"
          placeholder="Digite o nome do campeão da edição"
        />
        <button type="submit">Cadastrar</button>
      </Form>
      <Link to="/total">Total</Link>

      <ListSelecao>
        <ul>
          {selecao
            ? selecao.map((selecaList) => (
                <li key={selecaList.id}>
                  <span>Ano da Copa Mundo: {selecaList.ano}</span>
                  <span>Sede da Copa do Mundo: {selecaList.sede}</span>
                  <span>Campeão Mundial: {selecaList.campeao}</span>

                  <div>
                    <Link to={`/detalhes/${selecaList.campeao}`}>Detalhes</Link>
                    <button
                      onClick={() => {
                        deleteCadastro(selecaList.id);
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              ))
            : ''}
        </ul>
      </ListSelecao>
    </Container>
  );
};

export default Dashboard;
