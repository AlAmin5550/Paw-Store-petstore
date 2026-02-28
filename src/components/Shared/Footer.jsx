import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-muted text-base-content p-10">
      <aside>
        <Image
          src="/icon.svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current" alt='icon'>
          
        </Image>
        <p>
          Paw Store
          <br />
          Providing reliable pet care since 2021
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Shipping</a>
        <a className="link link-hover">Returns</a>
        <a className="link link-hover">Order Tracking</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Gift Cards</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}
