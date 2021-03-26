import React, { Component } from "react"
import Menu from "../../../components/common/nav"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      <div className="container">{children}</div>
    </React.Fragment>
  )
}
export default Layout
