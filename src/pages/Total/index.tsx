import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Title } from './styles';

interface SelecaoCad {
  ano: number;
  sede: string;
  campeao: string;
  id: string;
}

const Detalhes: React.FC = () => {
  const [selecao, setSelecao] = useState<SelecaoCad[]>();
  const [brasil, setBrasil] = useState(0);
  const [italia, setItalia] = useState(0);
  const [alemanha, setAlemanha] = useState(0);
  const [franca, setFranca] = useState(0);

  async function LoadEffect() {
    await api.get(`/worldcup`).then((response) => {
      setSelecao(response.data);
    });
  }

  useEffect(() => {
    LoadEffect();
  }, []);

  function HandleList() {
    if (selecao) {
      let cont2 = 0;
      let cont1 = 0;
      let cont3 = 0;
      let cont4 = 0;

      for (let i in selecao) {
        if (selecao[i].campeao === 'Brasil') {
          cont1 += 1;
        }
        if (
          selecao[i].campeao === 'Itália' ||
          selecao[i].campeao === 'Italia'
        ) {
          cont2 += 1;
        }
        if (selecao[i].campeao === 'Alemanha') {
          cont3 += 1;
        }
        if (
          selecao[i].campeao === 'França' ||
          selecao[i].campeao === 'Franca'
        ) {
          cont4 += 1;
        }
      }
      setBrasil(cont1);
      setItalia(cont2);
      setAlemanha(cont3);
      setFranca(cont4);
    }
  }

  return (
    <Container>
      <Title>Somario de Titulos:</Title>

      <button onClick={HandleList}>Listar</button>
      <p>
        Total de Titulos do Brasil:{' '}
        {brasil > 0
          ? brasil
          : 'Não foi encontrado titulo cadastrado para esse pais'}
      </p>
      <p>
        Total de Titulos do Italia:{' '}
        {italia > 0
          ? italia
          : 'Não foi encontrado titulo cadastrado para esse pais'}
      </p>
      <p>
        Total de Titulos do Alemanha:{' '}
        {alemanha > 0
          ? alemanha
          : 'Não foi encontrado titulo cadastrado para esse pais'}
      </p>
      <p>
        Total de Titulos do França:{' '}
        {franca > 0
          ? franca
          : 'Não foi encontrado titulo cadastrado para esse pais'}
      </p>

      <Link to="/">Retornar ao Dashboard...</Link>
    </Container>
  );
};

export default Detalhes;
