// Chakra imports
import {
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Custom components
  import Card from "..//components/Card/Card";
  import CardBody from "..//components/Card/CardBody";
  import CardHeader from "..//components/Card/CardHeader";
  import TablesTableRow from "..//components/Tables/TablesTableRow";
  import React from "react";
  
  const AdminPage = ({ title, captions}) => {
    const textColor = useColorModeValue("gray.700", "white");
    const data = [
        {
          logo: "avatar1",
          name: "Esthera Jackson",
          email: "alexa@simmmple.com",
          subdomain: "Manager",
          domain: "Organization",
          status: "Online",
          date: "14/06/21",
        },
        {
          logo: "avatar2",
          name: "Alexa Liras",
          email: "laurent@simmmple.com",
          subdomain: "Programmer",
          domain: "Developer",
          status: "Offline",
          date: "12/05/21",
        },
        {
          logo: "avatar3",
          name: "Laurent Michael",
          email: "laurent@simmmple.com",
          subdomain: "Executive",
          domain: "Projects",
          status: "Online",
          date: "07/06/21",
        },
        {
          logo: "avatar4",
          name: "Freduardo Hill",
          email: "freduardo@simmmple.com",
          subdomain: "Manager",
          domain: "Organization",
          status: "Online",
          date: "14/11/21",
        },
        {
          logo: "avatar5",
          name: "Daniel Thomas",
          email: "daniel@simmmple.com",
          subdomain: "Programmer",
          domain: "Developer",
          status: "Offline",
          date: "21/01/21",
        },
        {
          logo: "avatar7",
          name: "Mark Wilson",
          email: "mark@simmmple.com",
          subdomain: "Designer",
          domain: "UI/UX Design",
          status: "Offline",
          date: "04/09/20",
        },
      ];
    return (
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p='6px 0px 22px 0px'>
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
            <Tbody>
              {data.map((row) => {
                return (
                  <TablesTableRow
                    key={`${row.email}-${row.name}`}
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    );
  };
  
  export default AdminPage;
  