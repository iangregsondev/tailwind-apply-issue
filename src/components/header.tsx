import React from "react"
import { FaBars } from "react-icons/fa"

const Header = ({ siteTitle, onSidebarStatusChange }) => {
  return (
    <header>
      <div className="flex items-center h-10 bg-neutral-light border-b-2 border-gray-50">
        <button onClick={onSidebarStatusChange} className="ml-2 fill-current  focus:outline-none hover:text-blue-500">
          <FaBars />
        </button>

        <h1 className="m-auto">{siteTitle}</h1>
      </div>
    </header>
  )
}

export default Header
