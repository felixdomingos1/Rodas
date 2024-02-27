import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem, Select as MuiSelect } from '@mui/material';
import SelectReactSelect from "react-select";
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import { saveAs } from 'file-saver';

import makeAnimated from "react-select/animated";

import Header from '../../components/Header';

const animatedComponents = makeAnimated();

const Form = () => {
  const [classe, setClasse] = useState('');
  const [valor, setValor] = useState('');
  // const [alunoData, setAlunoData] = useState({});
  const [numberOfMonths, setNumberOfMonths] = useState(0);
  const [numberOfTrips, setNumberOfTrips] = useState(0);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const options = months.map(month => ({ value: month, label: month }));


  const dadosFalsos = () => {
    // Função auxiliar para gerar IDs fictícios
    const gerarID = () => Math.floor(Math.random() * 1000);
  
    // Data atual
    const hoje = new Date();
    const diaAtual = hoje.getDate();
  
    // Função para calcular o desconto com base na data
    const calcularDesconto = (valorOriginal) => {
      if (diaAtual <= 10) {
        return valorOriginal; // Sem desconto antes do dia 10
      } else if (diaAtual <= 20) {
        return valorOriginal * 0.9; // Desconto de 10% entre os dias 11 e 20
      } else {
        return valorOriginal * 0.8; // Desconto de 20% após o dia 20
      }
    };
  
    // Array de dados fictícios
    const dadosArray = [
      { id: gerarID(), nome: 'Usuário 1' },
      { id: gerarID(), nome: 'Secretário 1' },
      { id: gerarID(), valor: 100, tipo: 'Multa' },
      { id: gerarID(), valor: 50, tipo: 'Propina' },
      { id: gerarID(), valor: calcularDesconto(200), tipo: 'Desconto' },
    ];
  
    return dadosArray;
  };
  
  // Exemplo de uso
  const dados = dadosFalsos();
  console.log(dados);
  



  useEffect(() => {
    // Remova o código relacionado à obtenção do usuário por BI
    console.log(valor)
  }, [numberOfMonths, numberOfTrips]);

  const handleChangeClasse = (event) => {
    const selectedClasse = event.target.value;
    setClasse(selectedClasse);
    setValor(calculateValue(selectedClasse, numberOfMonths, numberOfTrips));
  };

  const handleNumberOfMonthsChange = (selectedOptions) => {
    setNumberOfMonths(selectedOptions.length);
    setValor(calculateValue(classe, selectedOptions.length, numberOfTrips));
  };

  const handleNumberOfTripsChange = (event) => {
    const trips = parseInt(event.target.value, 10);
    setNumberOfTrips(trips);
    setValor(calculateValue(classe, numberOfMonths, trips));
  };

  const calculateValue = (selectedClass, months, trips) => {
    const tripCost = trips === 1 ? 25000 : trips === 2 ? 34000 : 0;
    const totalCost = selectedClass === 'Iniciação' ? 25000 : 34000;
    return tripCost * months + totalCost;
  };

  const initialValues = {
    BI: '',
    Nome: '',
    Classe: '',
    Mes: '',
    FormaDePagamento: '',
    Quantidade: '',
    AlunoId: 0,
    SecretarioId: 0,
    PropinaId: 0,
    MultaId: 0,
    DescontoId: 0,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
  };

  const validationSchema = Yup.object({
    BI: Yup.string().required('Campo obrigatório'),
    Nome: Yup.string().required('Campo obrigatório'),
    Classe: Yup.string().required('Campo obrigatório'),
    Quantidade: Yup.number().required('Campo obrigatório').positive('Deve ser um número positivo'),
    FormaDePagamento: Yup.string().required('Campo obrigatório'),
    mes: Yup.string().required('Campo obrigatório'),
  });

  const handleFormSubmit = async (values) => {
    try {
      // Adicione os valores das inputs ao objeto values
      values.Mes = months.slice(0, numberOfMonths).join(', '); // Adiciona os meses selecionados
      values.Quantidade = numberOfTrips;
      values.Classe = classe;

      // Validação do Yup
      await validationSchema.validate(values, { abortEarly: false });

      // Enviar os dados do formulário para a rota de criação de pagamento
      const response = await axios.post('http://localhost:3334/pagamentos/create', values);

      // Gerar HTML para a fatura (pode ser personalizado conforme necessário)
      const invoiceHtml = `
        <div>
          <h2>Fatura</h2>
          <p>Nome: ${values.Nome}</p>
          <p>Classe: ${values.Classe}</p>
          <p>Quantidade: ${values.Quantidade}</p>
          <p>Forma de Pagamento: ${values.FormaDePagamento}</p>
          <p>Meses: ${values.Mes}</p>
          <!-- Adicione outros detalhes da fatura conforme necessário -->
        </div>
      `;

      // Configurações para a geração do PDF
      const pdfOptions = {
        margin: 10,
        filename: 'fatura.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      // Gerar o PDF a partir do HTML
      const pdf = await html2pdf().from(invoiceHtml).outputPdf();

      // Salvar o PDF
      saveAs(new Blob([pdf], { type: 'application/pdf' }), 'fatura.pdf');

      console.log('Pagamento criado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao criar pagamento:', error);
    }
  };

  return (
    <Box m="20px">
      <Header title="Fazer o pagamento" subtitle="Criar uma nova fatura" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
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
                name="BI"
                onChange={handleChange}
                value={values.BI}
              />
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Nome"
                value={values.Nome}
                name="Nome"
                onChange={handleChange}
              />
              <Field
                as={MuiSelect}
                fullWidth
                variant="filled"
                value={classe}
                onChange={(e) => {
                  handleChange(e);
                  handleChangeClasse(e);
                }}
                label="Classe"
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
                label="Quantidade de Viagens"
                value={numberOfTrips}
                name="Quantidade"
                onChange={(e) => {
                  handleChange(e);
                  handleNumberOfTripsChange(e);
                }}
              />
              <Field
                as={MuiSelect}
                fullWidth
                variant="filled"
                label="Forma de Pagamento"
                name="FormaDePagamento"
                onChange={handleChange}
              >
                <MenuItem value="multicaixa">Multicaixa</MenuItem>
                <MenuItem value="deposito">Depósito</MenuItem>
              </Field>
              <SelectReactSelect
                defaultValue={[options[0], options[2]]}
                components={animatedComponents}
                isMulti
                options={options}
                onChange={(selectedOptions) => {
                  handleNumberOfMonthsChange(selectedOptions);
                  handleChange({
                    target: {
                      name: 'Mes',
                      value: selectedOptions.map((option) => option.value).join(', '),
                    },
                  });
                }}
                className="Selecione os Meses"
                isClearable={true}
                isSearchable={true}
                isDisabled={false}
                isLoading={false}
                isRtl={false}
                closeMenuOnSelect={false}
              />
              <Field
                as={TextField}
                fullWidth
                variant="filled"
                type="text"
                label="Mês"
                name="mes"
                onChange={handleChange}
              />
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
