import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Waves from "../components/waves"
import Description from "../components/description"
import Tracks from "../components/tracks"
import CallToAction from "../components/call-to-action"

const IndexPage = () => (
  <Layout>
    <Hero
      title="WaffleHacks"
      subtitle="We're hackers with hearts"
      action={{ text: "Register now!", link: "https://apply.wafflehacks.tech" }}
      image={true}
    />
    <Waves.GradientToWhite />

    <Description />
    <Tracks />

    <Waves.WhiteToGradient />

    <CallToAction />
  </Layout>
)

export default IndexPage
