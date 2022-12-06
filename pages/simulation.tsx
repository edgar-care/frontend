import { VStack, Image, Text, Stack } from '@chakra-ui/react'


const Simulation = (): JSX.Element => (
    <VStack spacing='32px' paddingTop='32px'>
      <Image src='/assets/edgar.care-logo.svg' alt='test' w={450} h={152} />
      <Stack spacing='96px' >
        <Stack spacing='8px'>
          <Text fontWeight={700} fontSize='32px' marginTop={100} >Bienvenue sur edgar.care</Text>
          <Text fontWeight={700} as='b' fontSize='20px' marginTop={0} >Votre assistant medical</Text>
        </Stack>
        <Stack spacing='48px'>
          <Text fontWeight={700} fontSize='28px'>Vous allez commencer votre analyse</Text>
          <Stack spacing='16px' borderRadius='16px' bg='#E8DAF2' padding='24px'>
            <Text fontWeight={600} fontSize='16px'>
              Cette session, n’a pas pour but de diagnostiquer une maladie.
            </Text>
            <Text fontWeight={600} fontSize='16px'>
              À l’issue de la session, votre pré-diagnostic sera transmis à un médecin pour être examiné.
            </Text>
            <Text fontWeight={600} fontSize='16px'>
              Une réponse vous sera fournie dans un délai maximum de 48h.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </VStack>
  )

export default Simulation