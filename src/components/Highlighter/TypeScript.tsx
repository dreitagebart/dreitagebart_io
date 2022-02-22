import { Prism as Syntax } from 'react-syntax-highlighter'
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'

interface Props {}

export const TypeScript: React.FC<Props> = ({ children }) => {
  return (
    <Syntax language='typescript' style={vscDarkPlus} showLineNumbers>
      {children}
    </Syntax>
  )
}
