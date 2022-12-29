import Alert from '../components/alert'
import Meta from '../components/meta'
import Header from '../components/header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div>
        <Alert preview={preview} />
        <Header />
        {children}
      </div>
    </>
  )
}
