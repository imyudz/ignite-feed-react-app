import "./global.css"
import { Header } from "./components/Header"

import styles from './App.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

// author: {avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    //Nesse caso será tratado como um array que será "recebido do back-end"
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2023-11-10 21:35:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQGfN5-VH-YCFg/profile-displayphoto-shrink_800_800/0/1697344284179?e=1704931200&v=beta&t=eBXRxQNmWr-NuXlg5KMBKicx6mmb09KAPkI_tfYOYy0",
      name: "Victor Henri Vargas",
      role: "Developer @Paranoa"
    },
    //Nesse caso será tratado como um array que será "recebido do back-end"
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2023-12-10 21:35:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
