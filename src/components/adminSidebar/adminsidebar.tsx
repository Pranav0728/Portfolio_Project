"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/admin" onClick={handleClose}>
            <p>Dr. Narayan Jadhav</p>
          </Link> 
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/admin" className={`${pathUrl == "/admin" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/about"
              className={`${pathUrl == "/admin/about" && "active"}`}
            >
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Research"
              className={`${pathUrl == "/admin/Research" && "active"}`}
            >
              <i className="fa fa-list" /> Research Publications
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Books"
              className={`${pathUrl == "/admin/Books" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Books
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/contact"
              className={`${pathUrl == "/admin/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
        </ul>
      <div>
        <button onClick={()=>signOut()}>Sign Out</button>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
