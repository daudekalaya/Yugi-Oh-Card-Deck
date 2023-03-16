// TODO: answer here
import { Box, Image, Heading, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <>
    {card.map((dat) => (
      
      <Container centerContent padding={"5"}>
      <Link key={dat.id} to={`/card/${dat.id}`}>
      <Box className="yugioh-card">
        <Image src={dat.card_images[0].image_url} maxW={"full"}></Image>
      <Heading as="h2" size={"xs"} mt={"2"} textAlign={"center"}>
        {dat.name}
      </Heading>
      </Box>
      </Link>
    </Container>
  ))}
  </>
  )
  // TODO: replace this
}

export default Card;
