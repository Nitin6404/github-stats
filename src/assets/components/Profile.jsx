import React, { useEffect, useState } from 'react'
import "../../index.css"
import SearchUser from './SearchUser';
import GithubDetails from './GithubDetails';

function Profile() {
  const [profileUrl, setprofileUrl] = useState('');
  const [name, setname] = useState('');
  const [user, setUser] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState(0);
  const [username, setUsername] = useState("Nitin6404");
  const [blogLink, setBlogLink] = useState("https://portfolio-delta-eight-29.vercel.app/");


  useEffect(() => {
      const fetchGitHubUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        // Now you can use the data in your application
        setprofileUrl(data.avatar_url);
        setUser(data.login);
        setname(data.name)
        setFollowers(data.followers);
        setFollowing(data.following);
        setRepos(data.public_repos);
        setBlogLink(data.blog);
        console.log(profileUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchGitHubUser();
  }, [username]);

  return (
    <div className='bg-gray h-screen w-full flex items-center justify-center'>
      <div className=' bg-light-cream rounded-xl container shadow-lg shadow-black-500/50 flex-col justify-center align-middle lg:w-3/12 lg:h-2/3 md:w-2/5 md:h-2/3 sm:h-2/3 sm:w-6/12'>
        <SearchUser 
        setUsername={setUsername}/>
        <GithubDetails 
        name={name}
        user={user}
        followers={followers}
        following={following}
        repos={repos}
        profileUrl={profileUrl}
        blogLink={blogLink}/>
      </div>
    </div>
  )
}

export default Profile