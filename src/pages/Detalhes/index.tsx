import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { Container, Title } from './styles';

interface Params {
  campeao: string;
}

interface SelecaoDet {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

const Detalhes: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [selecao, setSelecao] = useState<SelecaoDet[]>();

  let selecaoFiltro;

  useEffect(() => {
    api.get(`/worldcup`).then((response) => {
      setSelecao(response.data);
    });
  }, []);

  if (selecao) {
    selecaoFiltro = [];
    selecaoFiltro = selecao.filter(
      (selecaofiltro) => selecaofiltro.campeao === params.campeao,
    );
  }

  return (
    <Container>
      <Title>Seleção: {params.campeao}</Title>
      <p>Foi campeã em: {selecaoFiltro ? (
            selecaoFiltro.map((pais) => (
                <span key={pais.campeao}>
                  <strong>{pais.ano},</strong>
                </span>
            ))
          ) : ''}</p>
    <Link to="/">Retornar ao Dashboard...</Link>
    </Container>
  );
};

export default Detalhes;
