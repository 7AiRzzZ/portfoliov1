import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MyApp = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Sub Text One',
    image: 'http://localhost:3000/_next/image?url=%2FImages%2FImaginationtattoo.png&w=256&q=75',
  },
  {
    headerText: 'Header Text Two',
    subText: null,
    image: 'http://localhost:3000/_next/image?url=%2FImages%2FImaginationtattoo.png&w=256&q=75',
  },
  {
    headerText: null,
    subText: null,
    image: 'http://localhost:3000/_next/image?url=%2FImages%2FImaginationtattoo.png&w=256&q=75',
  },
  {
    headerText: 'Header Text Four',
    subText: 'Sub Text Four',
    image: 'http://localhost:3000/_next/image?url=%2FImages%2FImaginationtattoo.png&w=256&q=75',
  },
  {
    headerText: 'Header Text Five',
    subText: 'Sub Text Five',
    image: 'http://localhost:3000/_next/image?url=%2FImages%2FImaginationtattoo.png&w=256&q=75',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default MyApp;