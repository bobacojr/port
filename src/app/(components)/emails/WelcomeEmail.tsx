// emails/WelcomeEmail.tsx
import {
    Html,
    Head,
    Body,
    Container,
    Text,
    Heading,
    Button,
  } from "@react-email/components";
  
  export default function WelcomeEmail({ name }: { name: string }) {
    return (
      <Html>
        <Head />
        <Body
          style={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f3f3f3",
            padding: "20px",
          }}
        >
          <Container
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Heading style={{ color: "#333" }}>Welcome, {name}!</Heading>
            <Text>
              We're excited to have you onboard. Click below to get started.
            </Text>
            <Button
              href="https://yourwebsite.com"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Get Started
            </Button>
          </Container>
        </Body>
      </Html>
    );
  }
  