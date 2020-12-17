import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./header"
import NavSidebar from "./nav-sidebar"

const Layout = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)
  const handleSidebarStatusChange = (e) => {
    setSidebarIsOpen(!sidebarIsOpen)
    console.log("I have been clicked!!!")
  }

  const variants = {
    open: { opacity: 1, x: 0, width: "auto" },
    closed: { opacity: 0, x: "-100vw", width: 0 },
  }

  return (
    <div className="font-sans">
      <div className="flex">
        <AnimatePresence>
          {sidebarIsOpen && (
            <motion.div
              className="max-w-80 bg-neutral  overflow-clip"
              animate="open"
              /*             initial="open"*/
              exit="closed"
              variants={variants}
              transition={{ type: "spring", bounce: 0, duration: 2 }}>
              <div className="mt-8">
                <NavSidebar />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full">
          <Header onSidebarStatusChange={handleSidebarStatusChange} siteTitle="Testing" />
          <main className="mt-10">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
