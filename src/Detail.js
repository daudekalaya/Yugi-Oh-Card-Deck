// TODO: answer here
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  SimpleGrid,
  Box,
  Image,
  Heading,
  Button,
  Text,
  Center,
  Grid,
} from "@chakra-ui/react";

function Detail() {
  const [detail, setDetail] = useState(null);
  // state untuk menyimpan status loading
  const [loading, setLoading] = useState(true);
  // state untuk menyimpan error
  const [error] = useState(null);
  // state untuk menyimpan id
  const { id } = useParams(); //useState();
  const navigate = useNavigate();

  // useEffect akan dijalankan ketika komponen pertama kali di-mount
  // dan juga ketika terjadi perubahan pada state id

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true);
      try {
        const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`; // TODO: replace this
        const response = await fetch(url);
        const data = await response.json();
        //
        setDetail(data);
        // TODO: answer here
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    //
    loadDetail();
    // TODO: answer here
  }, [id]);

  if (loading) return <Center m={"48"}><Heading fontSize={"3xl"}>Loading...</Heading></Center> 

  if (error) return <Center m={"48"}><Heading fontSize={"3xl"}>Error!</Heading></Center>

  return (
    <>
      <Box pr={{"lg" : "56", "sm" : "10"}} pl={{"lg" : "56", "sm" : "10"}} pt={"3"} pb={"10"} fontSize={"sm"}>
        <Box pb={"5"} pt={"5"}>
          <Button onClick={() => navigate("/")}>Back</Button>
        </Box>
        {detail.data.map((dat) => (
          <>
            <SimpleGrid pb={"5"} columns={2}>
              <Box pl={{"lg" : "28"}}>
                <Image w={"60"} src={dat.card_images[0].image_url} />
              </Box>
              <Box maxW={"full"}>
                <Heading as="h2">{dat.name}</Heading>

                <Text>Level: {dat.level}</Text>
                <Text>{dat.attribute}</Text>
                <Text>
                  ATK/{dat.atk} DEF/{dat.def}
                </Text>
                <Text>
                  [ {dat.type} / {dat.race} ]
                </Text>
                <Text>{dat.desc}</Text>
              </Box>
            </SimpleGrid>
            <Box textAlign={"center"} p={"3"}>
              <Heading as="h2" size={"sm"}>Card Set</Heading>
            </Box>
            <Grid templateColumns={{"lg" : "repeat(4, 1fr)", "sm" : "repeat(1, 1fr)"}} gap={6}>
              {dat.card_sets.map((card_set) => (
                <>
                  <Box w={"full"} p={"5"} borderWidth="1px" borderRadius="sm" boxShadow={'sm'}>
                    <Text>Name: {card_set.set_name}</Text>
                    <Text>Code: {card_set.set_code}</Text>
                    <Text>Rarity: {card_set.set_rarity}</Text>
                    <Text>Price: {card_set.set_price}</Text>
                  </Box>
                </>
              ))}
            </Grid>
          </>
        ))}
      </Box>
    </>
  ); // TODO: replace this
}

export default Detail;
