import React from 'react'
import Hero from '@/components/Landing/Hero'
import ObjectivesSection from '@/components/Landing/Objectives'
import RightsSection from '@/components/Landing/Sectionthree'
import ThematicAreas from '@/components/Landing/Thematic'
import AchievementNewsletter from '@/components/Landing/Acheivements'

const Homepage = () => {
  return (
    <main>
      <Hero />
      <ObjectivesSection />
      <RightsSection />
      <ThematicAreas />
      <AchievementNewsletter />
    </main>
  )
}

export default Homepage