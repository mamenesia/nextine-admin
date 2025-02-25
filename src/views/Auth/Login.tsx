import { ColorSchemeToggle } from '@core/components/ColorSchemeToggle/ColorSchemeToggle'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons'
import Link from 'next/link'

function LoginPage() {
  return (
    <Container size={420} my={100}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {`Do not have an account yet? `}
        <Anchor<'a'>
          href="#"
          size="sm"
          onClick={(event) => event.preventDefault()}
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />

          <Link href="/forgot-password" passHref>
            <Anchor<'a'> size="sm">Forgot password?</Anchor>
          </Link>
        </Group>

        <Link href="/admin/dashboard" passHref>
          <Button
            fullWidth
            mt="xl"
            onClick={() =>
              showNotification({
                title: 'Welcome back, John Doe',
                message: 'Login successfully',
                icon: <IconCheck size={16} />,
              })
            }
          >
            Sign in
          </Button>
        </Link>
      </Paper>

      <ColorSchemeToggle />
    </Container>
  )
}

export default LoginPage
