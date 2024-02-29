import React, { useEffect, useState } from 'react'
import "boxicons"
import "../src/index.css"

function Profile() {
  const [profileUrl, setprofileUrl] = useState('');
  const [name, setname] = useState('');
  const [user, setUser] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [repos, setRepos] = useState(0);
  
  const [username, setUsername] = useState("Nitin6404");

  const inputBoxHandler = (e) => {
    setUsername(e.target.value)
  }

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
        console.log(profileUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchGitHubUser();
  }, [username])

  return (
    <div className='h-screen w-full flex items-center justify-center '>
      <div className='rounded-md container shadow-lg shadow-black-500/50 flex-col justify-center align-middle'>
        <div className='flex justify-center content-center'>
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10">
            <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAtZJREFUSEvlltmrjlEUxn+HUlyIzGQMZQiZyR8gynjhQsYc51whxYWiRClEUjJkigspQynl2sUxZqaUeSpDUmR27Odrv6d9lr2/732/m3Nh1Vvf+37rWc/ea6/1rF1DC1lNC/FSlLgVMB4YAPSAEv4N8BS4BPzOu5G8xH2BdcBcoFMi+EfgFLAFeFxpAZWI27hdrAfWAvqdx34BW102NrrF/kgByhErlefcMyYPW8TnKjALeB3Dp4j7AQ1A9ypJM5hIJwPPbJwYcUfgMjDIOz/yRaSCymMi+Q4M9s4PgEnApxAcIz4CLAqcpjrgBWA0sA0YBiiYHp2n3ocAWuBqQCmeAlwMYhxwKV9ejniCb4vQp79vlzy7zXx0RGqzzBqB4cD97IPd8XFgvmEYBdwqwgoMBe4ZzEFgWYy4NfAe6BAA3vqVvitI3N4fRc8Ap0LrFSMe688n5FjhBGN3QdLMXWe6z2CVCdVGM8lUz50xjqrkJ1USa7evDHaG14ZmxMq/qi80gcMiKbKGdsAXA2jKYFhctcB+4zgSuF2ELfDtDTw32DXAdpvqOV7kQ9+lwOEqiWcCZw12MXDUEksEmvrMA867gpteJfFp14azDXYccM0S613tZMfeQuBYQXJhSjsL7LNv1dLMtgKy1xVTHfDTi4ZaTHYI2BCpUrseDReNQxFbkxQvyT5a4lBxVgI3fIspC3+A68AO4ISJKj3f7PU8NfFGuIvEnRSxvu8EVnkHTZVuTgJPBheBmIR2AaRyKdsVxCz5xFbX1g8KrTArLgVeAHwD9iSiSyxCiczcbvqZ/DXEpdLSB7jid1vv+1sTppxJ4XTGoUmfJwIvLLDc1UdBtGO1mSryISBR6Jpgl1jo/8zuusVPi5GmUh3GleypSjXgdbX9AHROEEtaNYfVEbowbPJHE3WvdMvMQNqJUj7QTZd5CWL17UtfA3Y4/APJS1zheIv//f8R/wWu0n4fd8acIQAAAABJRU5ErkJggg=="/>
            </div>
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
              placeholder=" " 
              onChange={inputBoxHandler}/>
              <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Entet Github Username
            </label>
          </div>
        </div> 
        </div>
        <div className="inner-container flex-col">
            <div className="flex justify-center align-middle">
              <img className='rounded-full w-60 h-60' id="img-tag" src={profileUrl}  />
            </div>
            <div className="flex justify-center">
              <div>
                <div>
                  <h3>{name}</h3>
                  <h3>Username: {user}</h3>
                </div>
                <div >
                  <h5>Followers: {followers}</h5>
                  <h5>Following: {following}</h5>
                  <h5>No. of Repos: {repos}</h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile