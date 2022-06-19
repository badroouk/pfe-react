import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow(props) {
  const { name, id, role, status, date, delet, confirm, edit } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr >
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".7rem" minWidth="90%" flexWrap="nowrap">
          <Flex justify="center" align="center" direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {id}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {role == '0' ? 'User' : 'Admin'}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={status == "0" ? "green.400" : bgStatus}
          color={status == "0" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status == '0' ? 'confirmed' : 'pending'}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date}
        </Text>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={edit} >
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>  </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={delet} >
          <Text
            fontSize="md"
            color="red.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Deete
          </Text>
        </Button>
      </Td>
      <Td>
        <Button p="0px" bg="  " variant="no-hover" onClick={confirm}>
          <Text
            fontSize="md"
            color="yellow.400"
            fontWeight="bold"
            cursor="pointer"
          >
            confirm
          </Text>
        </Button>

      </Td>


    </Tr>
  );
}

export default TablesTableRow;
