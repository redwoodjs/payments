import { Link, routes } from '@redwoodjs/router'

const SandboxLayout = ({ children }) => {
  return <>
    <header>
      <Link to={routes.home()}><h1>Sandbox</h1></Link></header>
    {children}</>
}

export default SandboxLayout
