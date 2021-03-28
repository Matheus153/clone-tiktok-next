import styled from 'styled-components'
import Layout from '../components/Layout'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Layout>TikTok</Layout>
  );
  
}
