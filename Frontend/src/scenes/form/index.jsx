import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem, Select } from '@mui/material';
import { Formik, Field } from 'formik';
import Header from '../../components/Header';
import axios from 'axios';

const Form = () => {
  const [classe, setClasse] = useState('');
  const [valor, setValor] = useState('');
  const [searchBI, setSearchBI] = useState('');
  const [alunoData, setAlunoData] = useState(null);

  useEffect(() => {
    if (searchBI) {
      // Realizar uma chamada à API para obter os dados do aluno com base no BI
      axios.get(`http://localhost:3334/aluno/get/${searchBI}`)
        .then(response => {
          setAlunoData(response.data); // Atualizar o estado com os dados do aluno
          // Você pode preencher automaticamente os campos do formulário aqui
        })
        .catch(error => {
          console.error('Erro ao obter dados do aluno:', error);
          setAlunoData(null); // Limpar os dados do aluno se não forem encontrados
        });
    }
  }, [searchBI]);

  const handleChangeClasse = (event) => {
    const selectedClasse = event.target.value;
    setClasse(selectedClasse);
    // Atualizar o valor com base na classe selecionada
    setValor(calculateValue(selectedClasse));
  };

  const handleInputChangeByBI = (event) => {
    setSearchBI(event.target.value);
  };

  const calculateValue = (selectedClass) => {
    // Implemente a lógica para calcular o valor com base na classe selecionada
    return selectedClass === 'Iniciação' ? 25000 : 34000;
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    // Enviar os dados do formulário para a rota de criação de pagamento
    axios.post('http://localhost:3334/pagamentos/create', values)
      .then(response => {
        console.log('Pagamento criado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao criar pagamento:', error);
      });
  };

  return (
    <Box m="20px">
      <Header title="Fazer o pagamento" subtitle="Criar uma nova fatura" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={true}
      >
        {({
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Bilhete de Identidade"
                onChange={handleInputChangeByBI}
                value={searchBI}
                name="BI"
              />
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                value={alunoData ? alunoData.nome : ''}
                name="Nome"
                disabled
              />
              <Field
                as={Select}
                fullWidth
                variant="filled"
                value={classe}
                onChange={handleChangeClasse}
                label="Classe"
                disabled
                name="Classe"
              >
                {classes.map((classOption) => (
                  <MenuItem key={classOption} value={classOption}>
                    {classOption}
                  </MenuItem>
                ))}
              </Field>
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="number"
                label="Quantidade de Meses"
                name="Quantidade"
              />
              <Field
                as={Select}
                fullWidth
                variant="filled"
                label="Valores a Pagar"
                disabled
                name="valoresDoPagamento"
              >
                <MenuItem value={25000}>25.000 Kzs</MenuItem>
                <MenuItem value={34000}>34.000 Kzs</MenuItem>
              </Field>
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Nº da Matricula"
                disabled
                name="nMatricula"
              />
              <Field
                as={Select}
                fullWidth
                variant="filled"
                label="Meses"
                name="meses"
              >
              <MenuItem value="Janeiro">Janeiro</MenuItem>
              <MenuItem value="Fevereiro">Fevereiro</MenuItem>
                <MenuItem value="Janeiro">Janeiro</MenuItem>
                <MenuItem value="Março">Março</MenuItem>
                <MenuItem value="Abril">Abril</MenuItem>
                <MenuItem value="Maio">Maio</MenuItem>
                <MenuItem value="Junho">Junho</MenuItem>
                <MenuItem value="Julho">Julho</MenuItem>
                <MenuItem value="Agosto">Agosto</MenuItem>
                <MenuItem value="Setembro">Setembro</MenuItem>
                <MenuItem value="Outubro">Outubro</MenuItem>
                <MenuItem value="Novembro">Novembro</MenuItem>
                <MenuItem value="Dezembro">Dezembro</MenuItem>
              </Field>
              <Field
                as={Select}
                fullWidth
                variant="filled"
                label="Forma de Pagamento"
                name="FormaDePagamento"
              >
                <MenuItem value="multicaixa">Multicaixa</MenuItem>
                <MenuItem value="deposito">Depósito</MenuItem>
              </Field>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Criar Fatura
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default Form;
const classes = [
  'Iniciação',
  '1ª Classe',
  '2ª Classe',
  '3ª Classe',
  '4ª Classe',
  '5ª Classe',
  '6ª Classe',
  '7ª Classe',
  '8ª Classe',
  '9ª Classe',
  '10ª Classe',
  '11ª Classe',
  '12ª Classe',
];

const initialValues = {
  BI: '',
  Nome: '',
  Classe: '',
  Mes: '',
  FormaDePagamento: '',
  Quantidade: 0,
  AlunoId: 0,
  SecretarioId: null,
  PropinaId: 0,
  MultaId: 0,
  DescontoId: 0,
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
};
