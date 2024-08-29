"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickedsignout = () => {
    signOut();
    router.replace('/')
  }
  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/admin" onClick={handleClose}>
            <p>Admin</p>
          </Link> 
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/admin" className={`${pathUrl == "/admin" && "active"}`}>
              <i className="fa fa-home" /> Personal
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/education"
              className={`${pathUrl == "/admin/education" && "active"}`}
            >
              <i className="fa fa-user" /> Education
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/experience"
              className={`${pathUrl == "/admin/experience" && "active"}`}
            >
              <i className="fa fa-user" /> Experience
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/About"
              className={`${pathUrl == "/admin/About" && "active"}`}
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
              href="/admin/Article"
              className={`${pathUrl == "/admin/Article" && "active"}`}
            >
              <i className="fa fa-list" /> Article
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Award"
              className={`${pathUrl == "/admin/Award" && "active"}`}
            >
              <i className="fa fa-list" /> Award
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Committe"
              className={`${pathUrl == "/admin/Committe" && "active"}`}
            >
              <i className="fa fa-list" /> Committe
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Conferences"
              className={`${pathUrl == "/admin/Conferences" && "active"}`}
            >
              <i className="fa fa-list" /> Conferences
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/Extention-Activity"
              className={`${pathUrl == "/admin/Extention-Activity" && "active"}`}
            >
              <i className="fa fa-list" /> Extention Activity
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/admin/extraCurricular"
              className={`${pathUrl == "/admin/extraCurricular" && "active"}`}
            >
              <i className="fa fa-list" /> Extra Curricular
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
          <div>
        <button className="m-5 font-bold bg-red-600 p-2 rounded-sm" onClick={onClickedsignout}>Sign Out</button>
      </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
