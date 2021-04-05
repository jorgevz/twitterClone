import {BiTrash} from 'react-icons/bi';

function Post(props){
    const posts = props.posts;
    const listPosts = posts.map(post =>
   {
       return <div  key={post.key}>
     <p className="list">

           <img src='https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640' alt='dp' style={{height: '35', width: '35px', borderRadius:'50%'}}/>
  <p className="user_name">Random22</p>
    <span className="user_id">@Random_user</span>  
   


       

    <textarea className='result' type="text" id={post.key} value={post.text} onChange={(e)=>{
             props.setUpdate(e.target.value,post.key)}}/>
      
      <BiTrash id='delete'  className='BiHomeCircle' color='#1DA1F2' fontSize="1.5rem" onClick={() => {
           props.deletePost(post.key)
        }}/>
      
      </p>  
     
    </div>})
    return <div>
        
        {listPosts}
    
    </div>;
  }

  export default Post;