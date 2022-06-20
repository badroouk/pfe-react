// Chakra imports
import {
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "../components/Card/Card";
  import CardBody from "../components/Card/CardBody";
  import CardHeader from "../components/Card/CardHeader";
  import TablesTableRow from "../components/Tables/TablesTableRow";
  import React, { useState } from "react";    
  import axios from "axios";
  
  const AdminPage = ({ title, captions}) => {
    const [data , setusers] = useState([])
    const [loading , setloading] = useState(true)
    const submit = async () => {

        const response = await axios.get('http://localhost:8000/api/users');
       if (response.status ==200) {
        setusers(response.data.users);
        setloading(false)
       }
        
    }
    submit()
    const delet = async (e,id) => {
        const response = await axios.delete(`http://localhost:8000/api/delete/${id}`);
    }
    const confirm = async (e,id) => {
        const response = await axios.put(`http://localhost:8000/api/confirm/${id}`);
    }
    var myTable;
    if (loading === true) {
        myTable = <Tr><Td><Text> Loading ... </Text> </Td></Tr>
    }else {
        myTable = data.map((row) => {
            return (
              <TablesTableRow
                key={row.id}
                name={row.email}
                id={row.id}
                role={row.role}
                status={row.pending}
                date={row.created_at}
                delet={(e)=>delet(e , row.id)}
                confirm={(e)=>confirm(e, row.id)}
              />
            );
          })
    }
    const textColor = useColorModeValue("gray.700", "white");
    return (
      <Card   boxShadow={"2xl"} margin={20} overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader align="center" p='6px 20px 40px 0px'>
          <Text fontSize='xl' color={textColor} fontWeight='bold'>
            {title}
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color={textColor}>
            <Thead>
              <Tr my='.8rem' pl='0px' color='gray.400'>
                {captions.map((caption, idx) => {
                  return (
                    <Th color='gray.400' key={idx} >
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody >
                {myTable}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    );
  };
  
  export default AdminPage;
  