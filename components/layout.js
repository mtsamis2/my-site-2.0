import Alert from '../components/alert'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ preview, title, description, children }) {
  return (
    <>
      <Meta title={title} description={description}/>
      <div>
        <Alert preview={preview} />
        <Header />
        {children}
      </div>
    </>
  )
}
