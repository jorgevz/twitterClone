import '../css/App.css';
import {AiOutlineAlignLeft, AiOutlineFileGif, AiOutlinePicture, AiOutlineSmile, AiOutlineTwitter} from 'react-icons/ai';
import {BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa' 
import {BsCardText, BsSearch, BsBell} from 'react-icons/bs';
import {CgMoreO} from 'react-icons/cg';
import {Link} from 'react-router-dom'
import Fire from './Fire'
import React from 'react';
import Post from './Post';


class Home extends React.Component { 
  constructor(props){
  super(props)
  
  this.state = {
    posts:[],
    currentPost:{
      text:'',
      key:''
    }
  }
  
  this.addPost = this.addPost.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.deletePost = this.deletePost.bind(this);
}
addPost(e){
  e.preventDefault();
  const newPost = this.state.currentPost;
  if(newPost.text !== ""){
    const posts = [...this.state.posts, newPost];
  this.setState({
    posts: posts,
    currentPost:{
      text:'',
      key:''
    }
  })
  }
}
handleInput(e){
  this.setState({
    currentPost:{
      text: e.target.value,
      key: Date.now()
    }
  })
}
deletePost  (key) {
  const filteredPosts= this.state.posts.filter(post =>
    post.key!==key);
  this.setState({
    posts: filteredPosts
  })

  } 

  setUpdate(text,key){
    console.log("posts:"+this.state.posts);
    const posts = this.state.posts;
    posts.map(post=>{      
      if(post.key === key){
        console.log(post.key +"    "+key)
        post.text= text;
      }
    })
    this.setState({
      posts: posts
    })
  }

  render(){
  return (
    <div className="App">
        <div className='Main'>

            <div className='right_div'>
                <div className='twitter'>
                  <AiOutlineTwitter color='#1DA1F2' fontSize="3rem"/>
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
              
                      <Link onClick={() => Fire.auth().signOut()} to='/' className='btn'>
                        Log Out
                      </Link>
                    </div>

<div id='info'>
<img src='https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640' alt='dp' style={{height: '35', width: '35px', borderRadius:'50%'}}/>                   
                    <div className="user_name">Random22</div>
    <div className="user_id">@Random_user</div>
      </div>  
    
</div>


 <div className='Main_Area'>
    <div className="Home">
       <div className='home'>
                  Home
               </div>
               
          </div>
          <br/>
          <br/>

          
       <div className='Create_post'>
       <form onSubmit={this.addPost}>
            <div className='Add_text'>
                  <div className='Profile'>
                      <img src='https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640' alt='dp' style={{height: '35', width: '35px', borderRadius:'50%'}}/>
              </div>
        <textarea id='post' type="text" placeholder="What's New ?" value={this.state.currentPost.text} onChange={this.handleInput} />
        <button className="btns-tweet" type='submit'>Tweet..</button>
            </div>
            </form>

         
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

       

          </div>
       

<div>


  <div className='posted_area'>

<Post className='result' posts={this.state.posts} deletePost={this.deletePost} setUpdate={this.setUpdate}/>
<p>{this.state.posts.text}</p>
  </div>

<br/>

</div>
    </div>




<div className='left_div'>

<div>
  <input type='text' placeholder='Search for friends..' id='search'/>
</div>

              <div id='trends'>
              <h1>Trends</h1>
              
              
          <h4>#covid19</h4>
          
          <h4>#JJ vaccine</h4>
              </div>  
      </div>
</div>
    </div>       
  );
}
}

export default Home;
