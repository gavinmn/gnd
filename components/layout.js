import PropTypes from "prop-types"
import { device } from "./device"
import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="footer-container">
        <style jsx>{`
          .wrapper-large {
            max-width: 816px;
            padding: 0 5% 0 5%;
            margin: 0 auto;
          }

          .footer-container {
            margin-top: 4rem;
            padding-top: 2rem;
            background-color: var(--bg-secondary);
          }

          .layout-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .top-flex {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
          }

          .bottom-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 36px;
          }

          .left-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .right-flex {
           display: flex;
           flex-direction: column;
           align-items: flex-end; 
          }
          
          .col-one, .col-two {
           display: flex;
           flex-direction: column;
           align-items: flex-start;  
          }
          
          .link {
           background-image: none;
           text-shadow: none;
           font-size: var(--font-xs);
           color: var(--text-secondary);
           margin-bottom: 0.75rem;
            
          }
          
          .link:hover {
              color: var(--text-primary);
             
          }
        
          
            @media ${device.desktop} {
              .footer-container {
                padding-top: 1rem;
                margin-top: 2rem;
              }

              .left-flex {
                flex-direction: row;
              }
              
              .col-one {
               margin-right: 64px; 
              }
            }
          }
        `}</style>
        <div className="wrapper-large">
          <div className="layout-flex">
            <div className="top-flex">
              <div className="left-flex">
                <div className="col-one">
                  <Link href="/" passhref>
                    <a className="link">About</a>
                  </Link>

                  <Link href="/#work" passhref>
                    <a className="link">Work</a>
                  </Link>
                </div>
                <div className="col-two">
                  <a
                    className="link"
                    href="mailto:gavin@nelson.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email
                  </a>
                  <a
                    className="link"
                    href="https://twitter.com/Gavmn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>
              <div className="right-flex">
                {/* <Link href="" passhref>
                  <a className="link">Music Thread</a>
                </Link>
                <Link href="" passhref>
                  <a className="link">Photos</a>
                </Link> */}
              </div>
            </div>
            <div className="bottom-flex">
              <Link href="/colophon" passhref>
                <a className="link">Colophon</a>
              </Link>
              <footer>© {new Date().getFullYear()} Gavin Nelson</footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
