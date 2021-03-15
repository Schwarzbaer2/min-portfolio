<template>
  <div>
    <h2>The Portfolio</h2>

    <PortfolioCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'

export default {
  name: 'ThePortfolio',
  components: {
    PortfolioCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Manage',

          mobileImg: require('../assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg'),
          tabletImg: require('../assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg'),
          desktopImg: require('../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg'),

          mobileHero: require('../assets/images/detail/mobile/image-manage-hero@2x.jpg'),

          mobilePreview1:
            '@/assets/images/detail/mobile/image-manage-preview-1@2x.jpg',
          mobilePreview2:
            '@/assets/images/detail/mobile/image-manage-preview-2@2x.jpg',

          tabletPreview1:
            '@/assets/images/detail/tablet/image-manage-preview-1@2x.jpg',
          tabletPreview2:
            '@/assets/images/detail/tablet/image-manage-preview-2@2x.jpg',

          desktopPreview1:
            '@/assets/images/detail/desktop/image-manage-preview-1@2x.jpg',
          desktopPreview2:
            '@/assets/images/detail/desktop/image-manage-preview-2@2x.jpg',

          stack: 'HTML / CSS / JS',
          category: 'Interaction Design / Front End Development',

          description:
            'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
          background:
            'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        },
        {
          id: 2,
          title: 'Bookmark',

          img:
            '../assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg',
          prevImg1: '',
          prevImg2: '',

          stack: 'HTML / CSS / JS',
          category: 'Interaction Design / Front End Development',

          description:
            'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
          background:
            'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        },
        {
          id: 2,
          title: 'Bookmark',

          img:
            '../assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg',
          prevImg1: '',
          prevImg2: '',

          stack: 'HTML / CSS / JS',
          category: 'Interaction Design / Front End Development',

          description:
            'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
          background:
            'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.'
        }
      ]
    }
  }
}
</script>
