import { Prism as Syntax } from 'react-syntax-highlighter'
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'

interface Props {}

export const ABAP: React.FC<Props> = ({ children }) => {
  return (
    <Syntax
      language='abap'
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{ borderRadius: 8 }}
    >
      {children}
    </Syntax>
  )
}
