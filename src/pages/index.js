import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h5 style={{ display: `inline` }}>{props.children}</h5>
    </Link>
  </li>
)
const IndexPage = () => (
  <Layout>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About Me</ListLink>
        <ListLink to="/experience/">Experience</ListLink>
        <ListLink to="/project/">Projects</ListLink>
        <ListLink to="/services/">Professional Services</ListLink>
      </ul>
    </div>
    <div />
    <div>
      <h4>Hey !!</h4>
      <p>Welcome to my Online Resume.</p>
      <p>
        I am an current software engineer amd consultant with 5 years of
        Professional experience. I am have worked in numerous industries ranging
        from Defence, Telecommunication, Energy, Aviation and Software
        development.
      </p>
      <p>
        Please follow the above links to learn more about me , my profile and
        the consulting services I provide. Thanks :)
      </p>
    </div>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
