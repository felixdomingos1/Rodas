import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Modal from 'react-modal';
import { useTheme } from "@mui/material";
import axios from 'axios'; // Import Axios for making HTTP requests

const Contacts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState([{ id: -1 }]);
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email:'',
    processo: '',
    classe: '',
    BI: '',
    turma: '',
    dataNascimento: '',
    // addressId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3334/aluno/create', formData);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Função assíncrona para buscar os dados dos usuários
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3334/aluno/get/null'); // Endpoint para buscar os usuários
        setUserData(response.data); // Define os dados dos usuários no estado
      } catch (error) {
        console.error('Erro ao buscar dados dos usuários:', error);
      }
    };
    fetchUserData();
  }, []);
  console.log(userData);
  // const formattedUserData = userData.map((user, index) => ({ ...user, id: index }))
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "processo", headerName: "Nº da Matricula" },
    {
      field: "nomeCompleto",
      headerName: "Nome Completo",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "turma",
      headerName: "Turma",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "classe",
      headerName: "Classe",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "dataNascimento",
      headerName: "Data",
      type: "data",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Telefone",
      flex: 1,
    },
    {
      field: "taxa",
      headerName: "Táxa",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Endereço",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Cidade",
      flex: 1,
    },
    {
      field: "BI",
      headerName: "Nº do BI",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Baixar a fatura",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >

        <DataGrid
          rows={userData} 
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.id}
        />
      </Box>
      <Box display="flex" justifyContent="end" mt="20px" paddingBottom={10}>
        <Button type="submit" color="secondary" variant="contained" onClick={() => setModalIsOpen(true)}>
          Adicionar Novo Aluno
        </Button>
      </Box>
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: 0,
          padding: '20px',
          backgroundColor: 'white',
          width: '70%',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          borderRadius: '4px',
          border: 'none',
          position: 'absolute',
          top: '30px',
          left: '25%',
          height: '50%',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }
      }}
    > 



    <h2>Formulário de Inserção</h2>
    <form onSubmit={handleSubmit}>
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Nome Completo", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="Nome Completo" // Texto da label
      name="nomeCompleto"
        type="text"
        value={formData.nomeCompleto}
      onChange={handleChange}
      required
    />
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Nº de Processo", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="Nº de Processo" // Texto da label
      name="Nº de Processo"
      value={formData.processo}
        type="text"
        onChange={handleChange}
      required
    />
    <TextField
    style={{margin:'10px'}}
      InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Email", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="Email" // Texto da label
      name="Email"
      value={formData.email}
      onChange={handleChange}
        type="email"
        required
    />
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Classe", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="Classe" // Texto da label
      name="classe"
        type="number"
        value={formData.classe}
      onChange={handleChange}
      required
    />
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Nº do BI", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="BI" // Texto da label
      name="bi"
      value={formData.BI}
      onChange={handleChange}
        type="text"
        required
    />
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Turma", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      label="Turma" // Texto da label
      name="turma"
      value={formData.turma}
        type="text"
        onChange={handleChange}
      required
    />
    <TextField
    style={{margin:'10px'}}
    InputProps={{
          style: {
              color: 'black', // Cor do texto digitado
              borderBottom: '1px solid black', // Adiciona uma borda embaixo
          },
          placeholder: "Data de Nascimento", // Define o placeholder
      }}
      InputLabelProps={{
          style: {
              color: 'black', // Cor da label
          }
      }}
      name="dataDeNascimento"
      value={formData.dataNascimento}
        type="date"
        onChange={handleChange}
      required
    />{/* <TextField
        label="ID do Endereço"
        name="addressId"
        type="number"
        value={formData.addressId}
        onChange={handleChange}
      /> */}
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
      <button onClick={() => setModalIsOpen(false)}>Fechar Modal</button>
    </Modal>
    </Box>
  );
};

export default Contacts;
