import { ChannelList,useChatContext } from "stream-chat-react"
import Cookies from 'universal-cookie'
//import { ChannelSearch , TeamChannelList, TeamChannelPreview } from './'
import HospitalIcon from '../assets/hospital.png'
//import HospitalIcon from '../assets/hospital.png'

const Sidebar = () =>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width={30}/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width={30}/>
            </div>
        </div>
    </div>
)

const CompnayHeader = () =>{
    <div>
        
    </div>
}

const ChannelListContainer = () => {
  return (
    <>
    <Sidebar/>
    </>
  )
}

export default ChannelListContainer