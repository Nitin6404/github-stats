import React, { useEffect, useState } from 'react'
import './Profile.css'

function Profile() {
  const [profileUrl, setprofileUrl] = useState('');
  const [name, setname] = useState('');
  const [user, setUser] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState(0);

  useEffect(() => {
      const fetchGitHubUser = async () => {
      const username = "aritra8438";
    
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
        console.log(profileUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchGitHubUser();
  }, [])

  return (
    <div className='container'>
      <div className="inner-container">
        <img id="img-tag" src={profileUrl}  />
        <h3>{name}</h3>
        <h3>Username: {user}</h3>
        <div className="details">
          <div className="stats">
            <span>Followers: {followers}</span>
            <br />
            <span>Following: {following}</span>
            <br />
            <span>No. of Repos: {repos}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile