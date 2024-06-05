import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Column,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Hr,
  Font,
} from "@react-email/components";

export const CodepenChallengersEmail = ({
  Nombre,
  Correo,
  Telefono,
  Servicio,
  Comentario = `Solicito el servicio de ${Servicio}, comuniquense con mi persona por medio de los datos enviados porfavor`,
}) => (
  <Html>
    <Head>
      <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Pedido de cita para el area de {Servicio}</Preview>
    <Body>
      <Container>
        <Section className="font-bold text-center">
          <Heading as="h2">
            Servicio pedido:
            <Text className="text-[#003449] inline uppercase font-black">
              {Servicio}
            </Text>
          </Heading>
        </Section>
        <Hr className="border-none text-transparent bg-[#003449] h-1 rounded-3xl" />
        <Section>
          <Row className="p-2">
            <Column>
              <Section>
                <Text>Nombre</Text>
              </Section>
              <Section>
                <Text>Correo</Text>
              </Section>
              <Section>
                <Text>Telefono</Text>
              </Section>
            </Column>
            <Column className="w-[250px]">
              <Section>
                <Text>{Nombre}</Text>
              </Section>
              <Section>
                <Text>{Correo}</Text>
              </Section>
              <Section>
                <Text>{Telefono}</Text>
              </Section>
            </Column>
          </Row>
        </Section>
        <Hr className="border-none text-transparent bg-[#003449] h-1 rounded-3xl" />
        <Section>
          <Text className="bg-black/20 px-10 py-5 text-pretty mx-auto">
            {Comentario}
          </Text>
        </Section>
        <Section className="text-center">
          <Button style={button} href="/">
            Policlinio La Trinidad
          </Button>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CodepenChallengersEmail;

const button = {
  fontSize: "14px",
  backgroundColor: "#003449",
  color: "#acf1bd",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
  marginLeft: "auto",
  marginRight: "auto"
};
