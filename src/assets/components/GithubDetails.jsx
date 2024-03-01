import React from 'react'

function GithubDetails({name, user, followers, following, repos, profileUrl}) {
  return (
    <div>
        <div className="inner-container flex-col lg:mt-6 md:mt-6">
            <div className="flex justify-center align-middle">
              <img className='rounded-full w-60 h-60' id="img-tag" src={profileUrl}  />
            </div>
            <div className="flex justify-center lg:mt-4 md:mt-4">
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
  )
}

export default GithubDetails