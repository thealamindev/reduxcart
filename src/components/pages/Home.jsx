import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import BestSelling from "../layouts/BestSelling"
import Information from "../layouts/Information"
import NewArrival from "../layouts/NewArrival"


const Home = () => {
  return (
    <>
        <Banner/>
        <Information/>
        <Ads/>
        <NewArrival/>
        <BestSelling/>
    </>
  )
}

export default Home