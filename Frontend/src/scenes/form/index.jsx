import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem, Select } from '@mui/material';
import { Formik, Field } from 'formik';
import Header from '../../components/Header';
import axios from 'axios';
import * as yup from 'yup'
import { Navigate, useNavigate } from 'react-router-dom';

const Form = ({ alunoData, setAlunoData, mudarUser }) => {
  const [classe, setClasse] = useState('');
  const [valor, setValor] = useState('');
  const [searchBI, setSearchBI] = useState('');


const navegate = useNavigate()
  useEffect(() => {
    if (searchBI) {
      // Realizar uma chamada à API para obter os dados do aluno com base no BI
      axios.get(`http://localhost:3334/aluno/filter/${searchBI}`)
        .then(response => {
          console.log(response.data);
          if (response.data) {
            setAlunoData(response.data);
          }
          // setAlunoData(response.data); // Atualizar o estado com os dados do aluno
          // Você pode preencher automaticamente os campos do formulário aqui
        })
        .catch(error => {
          console.error('Erro ao obter dados do aluno:', error);
          setAlunoData(null); // Limpar os dados do aluno se não forem encontrados
        });
    }
  }, [searchBI]);

  const handleChangeClasse = (event) => {
    // const selectedClasse = event.target.value;
    // setClasse(selectedClasse);
    const { name , value } = event.target
    const data = alunoData
    data[name] = value
    setAlunoData(data)
    // mudarUser()
    
    // setAlunoData(prev=> name ...prev)
    // Atualizar o valor com base na classe selecionada
    // setValor(calculateValue(selectedClasse));
  };

  const handleInputChangeByBI = (event) => {
    setSearchBI(event.target.value);
  };

  const calculateValue = (selectedClass) => {
    // Implemente a lógica para calcular o valor com base na classe selecionada
    return selectedClass === 'Iniciação' ? 25000 : 34000;
  };

  const handleFormSubmit = (values) => {
    navegate('/gerando-fatura')
    
    // axios.post('http://localhost:3334/pagamentos/create', values)
    //   .then(response => {
    //     console.log('Pagamento criado com sucesso:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Erro ao criar pagamento:', error);
    //   });
  };

  return (
    <Box m="20px">
      <Header title="Fazer o pagamento" subtitle="Criar uma nova fatura" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={createPagamentoSchema}
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
                label="Nome do aluno"
                value={alunoData.nomeCompleto}
                onChange={handleChangeClasse}
                name="Nome"
              />
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                value={alunoData.classe}
                onChange={handleChangeClasse}
                label="Classe"
                name="Classe"
              >
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
                value={alunoData.valor}
                variant="filled"
                label="Valores a Pagar"
                name="valoresDoPagamento"
                onChange={handleChangeClasse}
              >
                <MenuItem value={25000} >25.000 Kzs</MenuItem>
                <MenuItem value={34000}>34.000 Kzs</MenuItem>
              </Field>
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Nº da Matricula"
                value={alunoData.numeroDeprocesso}
                name="nMatricula"
              />
              <Field
                as={Select}
                value={alunoData.mes}
                fullWidth
                variant="filled"
                label="Meses" 
                onChange={handleChangeClasse}
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
                onChange={handleChangeClasse}
                value={alunoData.formaDePagamento}
              >
                <MenuItem value="multicaixa">Multicaixa</MenuItem>
                <MenuItem value="deposito">Depósito</MenuItem>
              </Field>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
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
  formaDePagamento: '',
  nomeCompleto: '',
  Classe: '',
  mes: '',
  valor: '',
  Quantidade: 0,
  AlunoId: 0,
  SecretarioId: null,
  PropinaId: 0,
  MultaId: 0,
  DescontoId: 0,
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
};

const createPagamentoSchema = yup.object({
  formaDePagamento: yup.string().required(),
  valor: yup.number().required(),
  mes: yup.string().required(),
})
