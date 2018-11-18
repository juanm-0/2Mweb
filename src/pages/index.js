import React from 'react'

import Layout from '../components/layout'
import HeroShot from '../components/heroshot'
import ServicesHome from '../components/services-home'
import AboutHome from '../components/about-home'
import SocialHome from '../components/social-home'
import { Divider } from 'semantic-ui-react';

const IndexPage = () => (
  <Layout>
    <HeroShot></HeroShot>
    <Divider hidden></Divider>
    <ServicesHome></ServicesHome>
    <Divider hidden></Divider>
    <AboutHome></AboutHome>
    <Divider hidden></Divider>
    <SocialHome></SocialHome>
  </Layout>
)

export default IndexPage
