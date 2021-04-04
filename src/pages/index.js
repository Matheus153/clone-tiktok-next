import Layout from '../components/Layout'
import Feed from '../components/Feed'
import Sugestion from '../components/Sugestion'
import { openDB } from '../lib/openDB'

export default function Home({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Sugestion></Sugestion>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  /*
  * Implementar as buscas dos dados no MongoDB
  */
  const db = await openDB()
  const data = await db.collection('feed').find().toArray()
  /* const data = [
     {
       id: 1,
       author: {
         id: 1,
         avatar:
           '/images/perfil.jpg',
         name: 'Matheus Santos',
         username: 'mathnovato',
       },
       description: '',
       tags: [{ title: 'Pump Finction cover' }, { title: '//#javascript' }],
       songName: 'Pump It - Black Eyed Peas',
       videoUrl:
         '/images/Pump.mp4',
       likes: 650,
       comments: 10,
       replies: 50,
     },
     {
       id: 2,
       author: {
         id: 1,
         avatar:
           '/images/perfil.jpg',
         name: 'Matheus Santos',
         username: 'mathnovato',
       },
       description: 'Vídeo teste para clone de interface',
       tags: [{ title: '#tiktok' }, { title: '#clone' }],
       songName: 'Tampa Curhat Beat - TampaCurhat',
       videoUrl:
         '/images/keyboard.mp4',
       likes: 650,
       comments: 10,
       replies: 50,
     },
   ]; */
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  }
}
