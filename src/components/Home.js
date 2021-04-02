import './App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa' 
import {BsCardText, BsSearch, BsBell} from 'react-icons/bs';
import {CgMoreO} from 'react-icons/cg';




function App() { 
  return (
    <div className="App">
        <div className='Main'>

            <div className='right_div'>
                <div className='twitter'>
                  <AiOutlineTwitter color='#1DA1F2' fontSize="2.3rem"/>
                </div>
              
              

                <div className='Icons'>
                    <BiHomeCircle className='BiHomeCircle' color='#1DA1F2'/>
                        Home
                    </div>
                
                    <div className='Icons'>
                    <BsSearch className='BiHomeCircle' color='#1DA1F2'/>
                        Explore
                    </div>

                    <div className='Icons'>
                    <BsBell className='BiHomeCircle' color='#1DA1F2'/>
                        Notification
                    </div>

                    <div className='Icons'>
                    <MdMailOutline className='BiHomeCircle' color='#1DA1F2'/>
                        Messages
                    </div>

                    <div className='Icons'>
                    <MdBookmarkBorder className='BiHomeCircle' color='#1DA1F2'/>
                        BookMarks
                    </div>

                    <div className='Icons'>
                    <BsCardText className='BiHomeCircle' color='#1DA1F2'/>
                        Lists
                    </div>

                    <div className='Icons'>
                    <FaUserCircle className='BiHomeCircle' color='#1DA1F2'/>
                        Profiles
                    </div>

                    <div className='Icons'>
                    <CgMoreO className='BiHomeCircle' color='#1DA1F2'/>
                     More 
                    </div>
                  

                    <div className='Icons'>
                      <button className='btn'>
                        Tweet
                      </button>
                    </div>
      </div>  



 <div className='Main_Area'>
    <div className="Home">
       <div className='home'>
                  Home
               </div>
               <div className='Star_icon'>
                 <AiTwotoneStar color='#1DA1F2' fontSize='2rem'/>
               </div>
          </div>
          <br/>
          <br/>
       <div className='Create_post'>
            <div className='Add_text'>
                  <div className='Profile'>
                      <img src='https://media-exp1.licdn.com/dms/image/C4D03AQEWM72541aVNw/profile-displayphoto-shrink_800_800/0/1605591186383?e=1622678400&v=beta&t=e_gUyc_ZwUGUyzvIdLM--gnXOBpMI1VgNd2NN09GQNM' alt='dp' style={{height: '35', width: '35px', borderRadius:'50%'}}/>
              </div>
<input type="Post" placeholder="What's New ?"/>
            </div>
          </div>
          <div className="Btns">
            <div className="Icons">
              
              <div className="Btns_icon">
      <AiOutlinePicture fontSize='1.5rem' color='1DA1F2'/>
              </div>

              <div className="Btns_icon">
      <AiOutlineFileGif fontSize='1.5rem' color='1DA1F2'/>
              </div>

              <div className="Btns_icon">
      <AiOutlineAlignLeft fontSize='1.5rem' color='1DA1F2'/>
              </div>

              <div className="Btns_icon">
      <AiOutlineSmile fontSize='1.5rem' color='1DA1F2'/>
              </div>

            </div>

        <div className="Tweets">
          <button className="btns-tweet">
    Tweet...
          </button>

        </div>

          </div>
       

<div className='posted_area'>
  <div className="profile">
    <div className='user_detail'>
<img src='https://media-exp1.licdn.com/dms/image/C4D03AQEWM72541aVNw/profile-displayphoto-shrink_800_800/0/1605591186383?e=1622678400&v=beta&t=e_gUyc_ZwUGUyzvIdLM--gnXOBpMI1VgNd2NN09GQNM' alt='dp' style={{height: '35', width: '35px', borderRadius:'50%'}}/>
  <div className="user_name">Jorge Vasquez</div>
    <div className="user_id">@Jorge_vz</div>
</div>
<div className="drop_down">
  <AiOutlineDown fontSize="1rem"/>
</div>

  </div>

  <div className='quote'>
        Takes less energy to be nice than to be rude ! Being kind is key 🤗
  </div>
<br/>
<div className="profile_images">
  <img src/> 
</div>
</div>
    </div>

              <div className='left_div'>
              <h2>Trends</h2>
              </div>  
      </div>

    </div>       
  );
}

export default App;
