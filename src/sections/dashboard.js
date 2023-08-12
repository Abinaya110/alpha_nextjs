/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import Cog from 'components/icons/cog';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';
import Kitchen from 'assets/images/Kitchen.png';
import furniture from 'assets/images/Furniture.png';
import personal from 'assets/images/personal.png';
import bb from 'assets/images/research.png';
import fur from 'assets/images/fur.png';



const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: 'Personal care appliances',
      },
    ],
    tabContent: [
      {
        image: personal,
        title: `Twinmo.ai's Streamlined Testing for Grooming Appliances`,
        description: `Twinmo.ai excels in prioritizing paramount hygiene. It streamlines testing for grooming appliances, ensuring efficiency and quality in product launches. Manage procedures and data seamlessly for reliable results..`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: 'Kitchen appliances',
      },
    ],
    tabContent: [
      {
        image: Kitchen,
        title: `Revolutionizing Kitchen Appliance Engineering: Enhance Safety, Performance, and Culinary Joy with Twinmo.ai`,
        description: `Elevate kitchen appliance engineering with streamlined safety testing and performance optimization. Our platform offers real-time data tracking, experiment documentation, and analytics, expediting product development for a superior cooking experience.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: 'Research & Education',
      },
    ],
    tabContent: [
      {
        image: fur,
        title: `Bridging Disciplines: Testrunz Facilitates Collaborative Research and Education`,
        description: `Testrunz enables cross-institutional collaboration among researchers and students, fostering interdisciplinary interactions and innovative ideas, thereby enhancing scientific research and education accessibility. It has the potential to bridge disciplinary gaps and nurture upcoming scientists.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: 'Home furnitures',
      },
    ],
    tabContent: [
      {
        image: furniture,
        title: `Elevating Your Confidence: Our Commitment to Uncompromised Safety and Quality in Furniture Testing`,
        description: `We follow the highest safety and quality testing standards to give all your customers peace of mind, knowing that your furniture is safe and will last for years to come.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'Research & Education',
      },
    ],
    tabContent: [
      {
        image: bb,
        title: `Fostering Interdisciplinary Innovation: Testrunz Empowers Collaborative Research and Education`,
        description: `Testrunz facilitates cross-institutional collaboration for researchers and students, promoting interdisciplinarity and idea generation. Beneficial for research and education, it enhances accessibility to scientific endeavors and nurtures future scientists.`,
        readMore: '#introduce-quality',
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [4, null, null, 6, 5, , null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ['none !important'],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: 'white',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
      'svg g, svg path': {
        fill: 'primary',
        opacity: 1,
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: 'primary',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
};
