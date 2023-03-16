// TODO: answer here
import { useState, useEffect } from "react";
import { SimpleGrid, Container, Select, Center, Heading } from "@chakra-ui/react";
import Card from "./Cards";

function Home() {
  // TODO: answer here
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Center m={"48"}><Heading fontSize={"3xl"}>Loading...</Heading></Center> 

  if (error) return <Center m={"48"}><Heading fontSize={"3xl"}>Error!</Heading></Center>

  function sortData(type) {
    // TODO: answer here
    if (type === "name") {
      return setData([...data].sort((a, b) => a.name > b.name? 1 : -1))
    }else if (type === "attack") {
      return setData([...data].sort((a,b) => a.atk - b.atk))
    } else if (type === "defence") {
      return setData([...data].sort((a, b) => a.def - b.def))
    }
  }

  const handleChange = (e) => {
    sortData(e.target.value)
    // setData((e) => e.target.value)
  }
  // console.table(data)
  return (
    <>
      <Container mt={"10"} mb={"10"}>
      <Select name="sort" onChange={handleChange} variant='outline' placeholder="Sort by">
        <option value="name">Name</option>
        <option value="attack">Attack</option>
        <option value="defence">Defence</option>\
      </Select>
      </Container>
      <SimpleGrid columns={4} spacing={"-52"} maxW="container.lg" mx={"auto"}>
        <Card card={data} />
      </SimpleGrid>
    </>
  ); // TODO: replace this
}

export default Home;
