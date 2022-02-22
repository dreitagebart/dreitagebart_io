import 'react-typist/dist/Typist.css'

import { Layout } from '../components'
import { DreitageApp } from '../types'

const Dreitagebart = ({ Component, pageProps }: DreitageApp) => {
  return (
    <Layout title={Component.title}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Dreitagebart
