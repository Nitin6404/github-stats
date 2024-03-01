import React from 'react';
import "../../index.css";

function GithubDetails({name, user, followers, following, repos, profileUrl, blogLink}) {
  return (
    <div>
        <div className="inner-container flex-col lg:mt-6 md:mt-6 sm:mt-5">
            <div className="flex justify-center align-middle">
              <img className='rounded-full w-52 h-52' id="img-tag" src={profileUrl}  />
            </div>
            <div className="flex justify-center lg:mt-4 md:mt-4 sm:mt-6 ">
              <div>
                <div>
                  <h3>{name}</h3>
                  <h3>Username: {user}</h3>
                </div>
                <div >
                  <h5>Followers: {followers}</h5>
                  <h5>Following: {following}</h5>
                  <h5>No. of Repos: {repos}</h5>
                  <h5>Portfolio: 
                    {blogLink == null ? 
                      "<a className='hover:bg-slate-light hover:text-slate-dark' href={blogLink}>View Here</a></h5>"
                      : " No Portfolio" 
                    }
                  </h5>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default GithubDetails