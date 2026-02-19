import React, { useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";


let data = [
    {
        title:"LDRS",
        desc:"Free, open-source loading animations"
    },
    {
        title:"Behold",
        desc:"Easy,elegant Instagram feeds. Freemium"
    },
    {
        title:"???",
        desc:"In the works..."
    },
]

const Home = () => {
    let [state,setState] = useState(false)
    let [email,setEmail] = useState("")
    let handleChange = (e)=>{
      
        setEmail(e.target.value)
    }
  return (
        <div className={`${state ? "bg-[#092537] text-white" : "bg-[#f1f1f1] text-black"} min-h-screen font-mono pb-30 border border-red-500  box-border p-0` }>
        <div className='flex justify-end p-6'>
            <button  className={`${state?"bg-black":"bg-amber-100"} border w-20 h-10 rounded-2xl p-5 fixed top-6 right-6 z-50 flex justify-center items-center`} onClick={()=>{setState(!state)}}>{state?<MdLightMode />:<CiDark />} </button>
        </div>
       <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTQ0IDM2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDQgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiPiA8dGl0bGU+VUkgQmFsbDwvdGl0bGU+IDxnIGNsYXNzPSJsb2dvLWxpZ2h0Ij4gPHBhdGggY2xhc3M9ImlyaXMiIGQ9Ik01MC43LDAuNUM0MSwwLjUsMzMuMiw4LjQsMzMuMiwxOFM0MSwzNS41LDUwLjcsMzUuNVM2OC4yLDI3LjcsNjguMiwxOFM2MC4zLDAuNSw1MC43LDAuNXogTTU5LjksMjguNwogICAgICBsLTIuNi0zLjhjMC4zLTAuMywwLjUtMC42LDAuOC0wLjlsNCwyLjNDNjEuNSwyNy4yLDYwLjcsMjgsNTkuOSwyOC43eiBNMzYuNiwxNi4zYzAuMi0xLjUsMC42LTIuOSwxLjItNC4ybDMuOSwyLjUKICAgICAgYy0wLjIsMC42LTAuNCwxLjItMC41LDEuOEgzNi42eiBNNDEuMiwxOS43YzAsMC4yLDAuMSwwLjUsMC4yLDAuN2wtNC4zLDEuN2MtMC4yLTAuOC0wLjQtMS42LTAuNS0yLjRINDEuMnogTTQzLjUsMTEuN2wtMy45LTIuNQogICAgICBjMC41LTAuNywxLjEtMS4zLDEuOC0xLjlsMi43LDMuN0M0My45LDExLjIsNDMuNywxMS41LDQzLjUsMTEuN3ogTTUwLjcsMTEuOGMzLjQsMCw2LjIsMi44LDYuMiw2LjJzLTIuOCw2LjItNi4yLDYuMgogICAgICBjLTMuNCwwLTYuMi0yLjgtNi4yLTYuMlM0Ny4yLDExLjgsNTAuNywxMS44eiBNNjAuMSwxNi4zYy0wLjEtMC4zLTAuMi0wLjctMC4zLTFsNC4zLTEuN2MwLjMsMC45LDAuNSwxLjcsMC42LDIuN0w2MC4xLDE2LjN6CiAgICAgICBNNDksMjcuNFYzMmMtMC45LTAuMS0xLjgtMC4zLTIuNi0wLjZsMS45LTQuMkM0OC41LDI3LjMsNDguNywyNy40LDQ5LDI3LjR6IE01Mi4zLDI3LjRjMC43LTAuMSwxLjUtMC4zLDIuMS0wLjZsMi42LDMuOAogICAgICBjLTEuNSwwLjgtMy4xLDEuMy00LjgsMS41VjI3LjR6IE01OS43LDIxLjFjMC4yLTAuNSwwLjMtMC45LDAuNC0xLjRsNC42LTAuMWMtMC4xLDEuMy0wLjUsMi42LTEsMy44TDU5LjcsMjEuMXogTTYyLjYsMTAuNQogICAgICBsLTQuMywxLjhjLTAuNi0wLjgtMS40LTEuNi0yLjItMi4ybDEuOC00LjJDNTkuOCw3LDYxLjQsOC42LDYyLjYsMTAuNXogTTU0LjgsNC41TDUzLDguN2MtMC44LTAuMi0xLjUtMC4zLTIuMy0wLjMKICAgICAgYy0xLjMsMC0yLjYsMC4zLTMuOCwwLjhsLTIuNy0zLjdjMS45LTEsNC4xLTEuNiw2LjUtMS42QzUyLjEsMy45LDUzLjUsNC4xLDU0LjgsNC41eiBNMzguNSwyNS4xbDQuMy0xLjdjMC42LDAuOSwxLjQsMS43LDIuMywyLjMKICAgICAgTDQzLjMsMzBDNDEuMywyOC44LDM5LjcsMjcuMSwzOC41LDI1LjF6Ij48L3BhdGg+IDxwYXRoIGZpbGw9IiMwNzFBMjciIGQ9Ik03LjksMjYuOGMtNi44LDAtNy45LTMuNS03LjktOS42VjkuMmg0LjF2Ny44YzAsNC42LDAuOCw2LjMsMy44LDYuM2MzLDAsMy44LTEuNywzLjgtNi4zVjkuMmg0LjF2OC4xCiAgICAgIEMxNS44LDIzLjMsMTQuNywyNi44LDcuOSwyNi44eiI+PC9wYXRoPiA8cGF0aCBmaWxsPSIjMDcxQTI3IiBkPSJNMjEuMyw5LjRjMCwwLDIuNiwwLDQuMSwwYy0yLjUsMTAuMSwwLDE3LjIsMCwxNy4yaC00LjFWOS40eiI+PC9wYXRoPiA8cGF0aCBmaWxsPSIjMDcxQTI3IiBkPSJNODMsOS40YzYuNCwwLDguMSwxLjQsOC4xLDQuNmMwLDEuNy0wLjYsMy4xLTIuNiwzLjhjMi40LDAuNywzLjEsMi4zLDMuMSw0YzAsMy41LTEuMyw0LjgtOC42LDQuOGgtNy4xCiAgICAgIGMwLDAsMi03LjUsMC0xNy4yQzc5LjIsOS40LDgzLDkuNCw4Myw5LjR6IE04MCwxNi40aDMuN2MyLjYsMCwzLjQtMC42LDMuNC0xLjljMC0xLjYtMS0yLjEtNC4yLTIuMWgtM1YxNi40eiBNODAsMjMuN2gzCiAgICAgIGMzLjYsMCw0LjYtMC41LDQuNi0yLjJjMC0xLjctMS4xLTIuMy0zLjktMi4zSDgwVjIzLjd6Ij48L3BhdGg+IDxwYXRoIGZpbGw9IiMwNzFBMjciIGQ9Ik0xMDEuMiw5LjRoNC45bDcuMSwxNy4yaC00LjVsLTEuMS0zaC04bC0xLjEsM2gtNC40TDEwMS4yLDkuNHogTTEwNi40LDIwLjVsLTIuOS03LjlsLTIuOSw3LjlIMTA2LjR6Ij48L3BhdGg+IDxwYXRoIGZpbGw9IiMwNzFBMjciIGQ9Ik0xMTYuNCw5LjRoNC4xVjIzaDguMXYzLjZoLTEyLjJWOS40eiI+PC9wYXRoPiA8cG9seWxpbmUgZmlsbD0iIzA3MUEyNyIgcG9pbnRzPSIxNDQsMjYuNiAxMzEuOCwyNi42IDEzMS44LDkuNCAxMzUuOSw5LjQgMTM1LjksMjMgMTQ0LDIzIAkiPjwvcG9seWxpbmU+IDwvZz4gPGcgY2xhc3M9ImxvZ28tZGFyayI+IDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03LjksMjYuOWMtNi44LDAtNy45LTMuNS03LjktOS42VjkuMmg0LjFWMTdjMCw0LjYsMC44LDYuMywzLjgsNi4zYzMsMCwzLjgtMS43LDMuOC02LjNWOS4yaDQuMXY4LjEKCQkJQzE1LjgsMjMuNCwxNC43LDI2LjksNy45LDI2Ljl6Ij48L3BhdGg+IDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMS4zLDkuNWMwLDAsMi42LDAsNC4xLDBjLTIuNSwxMC4xLDAsMTcuMiwwLDE3LjJoLTQuMVY5LjV6Ij48L3BhdGg+IDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04Myw5LjRjNi40LDAsOC4xLDEuNCw4LjEsNC42YzAsMS43LTAuNiwzLjEtMi42LDMuOGMyLjQsMC43LDMuMSwyLjMsMy4xLDRjMCwzLjUtMS4zLDQuOC04LjYsNC44aC03LjEKCQkJYzAsMCwyLTcuNSwwLTE3LjJDNzkuMiw5LjQsODMsOS40LDgzLDkuNHogTTgwLDE2LjVoMy43YzIuNiwwLDMuNC0wLjYsMy40LTEuOWMwLTEuNi0xLTIuMS00LjItMi4xaC0zVjE2LjV6IE04MCwyMy43aDMKCQkJYzMuNiwwLDQuNi0wLjUsNC42LTIuMmMwLTEuNy0xLjEtMi4zLTMuOS0yLjNIODBWMjMuN3oiPjwvcGF0aD4gPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEwMS4yLDkuNWg0LjlsNy4xLDE3LjJoLTQuNWwtMS4xLTNoLThsLTEuMSwzaC00LjRMMTAxLjIsOS41eiBNMTA2LjQsMjAuNmwtMi45LTcuOWwtMi45LDcuOUgxMDYuNHoiPjwvcGF0aD4gPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTExNi40LDkuNWg0LjFWMjNoOC4xdjMuNmgtMTIuMlY5LjV6Ij48L3BhdGg+IDxwb2x5bGluZSBmaWxsPSIjZmZmZmZmIiBwb2ludHM9IjE0NCwyNi42IDEzMS44LDI2LjYgMTMxLjgsOS41IDEzNS45LDkuNSAxMzUuOSwyMyAxNDQsMjMiPjwvcG9seWxpbmU+IDxwYXRoIGNsYXNzPSJpcmlzIiBkPSJNNTAuNywwLjNDNDAuNiwwLjMsMzIuNSw4LjcsMzMsMTguOWMwLjUsOC45LDcuOCwxNi4zLDE2LjcsMTYuN0M2MCwzNi4yLDY4LjQsMjguMSw2OC40LDE4CiAgICAgIEM2OC40LDguMiw2MC40LDAuMyw1MC43LDAuM3ogTTU5LjgsMjEuOEw1OS44LDIxLjhsLTAuMi0wLjFsMC4xLTAuM2MwLjItMC42LDAuNC0xLjIsMC41LTEuOXYtMC4zaDAuM2g0LjloMC40djAuNAogICAgICBjLTAuMiwxLjUtMC42LDMtMS4yLDQuNWwtMC4yLDAuM0w1OS44LDIxLjh6IE00NS45LDMybDItNC41bDAuMS0wLjJsMC4zLDAuMWMwLjMsMC4xLDAuNiwwLjEsMC45LDAuMmgwLjN2MC4ydjQuOXYwLjRoLTAuNAogICAgICBjLTEtMC4xLTItMC4zLTMtMC42bC0wLjQtMC4xTDQ1LjksMzJ6IE00NS45LDI2LjFMNDUuOSwyNi4xTDQ1LjksMjYuMUw0NS45LDI2LjF6IE00My43LDMxbDAsMC4ybC0wLjEsMC4zbC0wLjQtMC4zCiAgICAgIGMtMC4yLTAuMS0wLjUtMC4zLTAuNy0wLjRjLTAuMS0wLjEtMC4zLTAuMi0wLjQtMC4zYy0wLjItMC4xLTAuNC0wLjMtMC42LTAuNGMtMS41LTEuMi0yLjgtMi42LTMuNy00LjNsLTAuNC0wLjVsMC40LTAuMmw0LjUtMgogICAgICBsMC4zLTAuMWwwLjIsMC4zYzAuNywxLjEsMS43LDIuMSwyLjgsMi44bDAuMywwLjJsMCwwLjFMNDMuNywzMXogTTU4LDQuN2wwLjMsMC4yYzIuMywxLjMsNC4xLDMuMiw1LjUsNS41bDAuMiwwLjNsLTAuNCwwLjIKICAgICAgbC00LjUsMkw1OC44LDEzbC0wLjItMC4zYy0wLjctMS4xLTEuNi0yLTIuNy0yLjdsLTAuMi0wLjFsMC4xLTAuM2wyLTQuNkw1OCw0Ljd6IE01OS43LDE1LjNMNTkuNywxNS4zTDU5LjcsMTUuM0w1OS43LDE1LjN6CiAgICAgICBNNTcuOCwzMS41Yy0xLjcsMC45LTMuNSwxLjUtNS40LDEuN0g1MnYtMC40VjI4di0wLjRoMC4zYzAuOS0wLjEsMS43LTAuNCwyLjUtMC44bDAuMy0wLjFsMC4yLDAuM2wyLjcsNGwwLjIsMC4zTDU3LjgsMzEuNXoKICAgICAgIE00OS4zLDExLjFjNS0xLDkuMywzLjQsOC40LDguNGMtMC41LDIuOC0yLjgsNS01LjYsNS42Yy01LDEtOS4zLTMuNC04LjQtOC40QzQ0LjMsMTMuOSw0Ni41LDExLjcsNDkuMywxMS4xeiBNNjAuMiwyOS45TDYwLDI5LjYKICAgICAgbC0yLjctNGwtMC4yLTAuM2wwLjItMC4yYzAuMy0wLjMsMC42LTAuNiwwLjktMWwwLjItMC4ybDAuMywwLjJsNC4yLDIuNGwwLjMsMC4yTDYzLDI2LjljLTAuNywxLTEuNiwxLjktMi41LDIuN0w2MC4yLDI5Ljl6CiAgICAgICBNNTUuNiw0bC0yLjEsNC42bC0wLjEsMC4zbC0wLjMtMC4xYy0wLjgtMC4yLTEuNi0wLjMtMi40LTAuM2MtMS4zLDAtMi43LDAuMy0zLjksMC44bC0wLjMsMC4xbC0wLjItMC4zTDQzLjUsNWwtMC4yLTAuM2wwLjQtMC4yCiAgICAgIGMyLjItMS4xLDQuNS0xLjcsNy0xLjdjMS42LDAsMy4yLDAuMyw0LjcsMC44bDAuNCwwLjFMNTUuNiw0eiBNNDAuOSw2LjNsMC4yLTAuMmwwLjEsMGwwLjIsMC4zbDIuOCw0LjNsMC4yLDAuM2wtMC4yLDAuMgogICAgICBjLTAuMywwLjMtMC42LDAuNi0wLjksMC45bC0wLjIsMC4yTDQyLjgsMTJsLTQuNC0yLjVsLTAuMi0wLjJMMzguNCw5QzM5LjIsOCw0MCw3LjEsNDAuOSw2LjN6IE0zNi43LDExLjlsMC4yLTAuNGwwLjMsMC4ybDQuNCwyLjUKICAgICAgbDAuMywwLjJsLTAuMSwwLjNjLTAuMiwwLjYtMC40LDEuMi0wLjUsMS44bC0wLjEsMC4zSDQxaC01LjFoLTAuNHYtMC40QzM1LjcsMTQuOCwzNi4xLDEzLjMsMzYuNywxMS45eiBNNjUuNywxNi44aC0wLjRoLTQuOWgtMC4yCiAgICAgIGwtMC4xLTAuM2MtMC4xLTAuMy0wLjEtMC42LTAuMi0wLjlsLTAuMS0wLjFsMC4xLTAuMmwwLjMtMC4xbDQuNS0yTDY1LDEzbDAuMSwwLjRjMC4zLDEsMC41LDIsMC42LDNWMTYuOHogTTM1LjUsMTkuMmgwLjRoNC45aDAuMQogICAgICBoMC4zdjAuM2MwLDAuMywwLjEsMC42LDAuMiwwLjlsMC4xLDAuM2wtMC4zLDAuMWwtNC42LDJMMzYuMiwyM2wtMC4xLTAuNGMtMC4zLTEtMC41LTItMC43LTNsLTAuMS0wLjRoMEgzNS41eiI+PC9wYXRoPiA8L2c+IDwvc3ZnPg==" alt=""  className='h-[200px] w-[200px] m-auto' />
       <h1 className='text-center text-3xl text-[#20435B]'>Useful things for devs</h1>

       <div className='border  max-w-4xl w-full mt-7 m-auto rounded-xl overflow-hidden'>
        {
            data.map(({title,desc})=>{
                return(
                    <div className='border flex justify-between items-center p-8 font-mono pl-20 pr-20 '>
                        <h1 className='text-2xl'>{title}</h1>
                        <h4 className='text-lg'>{desc}</h4>
                    </div>
                )

            })
        }
       </div>
       <h1 className='text-[#20435B] text-center mt-25 text-xl'>Be the first to know when new  stuff drops</h1>
       <form action="" className='flex justify-center items-center'>
        <input type="email"name="email" value={email} placeholder='your.email@geocities.com | SUBSCRIBE ' className='border p-5 w-[450px] rounded-xl mt-10' onChange={handleChange}/>
        
       </form>
       {
            email && <div className='border w-[430px] p-1 m-auto rounded-lg'><p>Good start</p></div>
        }
       <div className=' w-[250px] text-center m-auto mt-24 leading-7'>
        Made with 👀 in Brooklyn, NY
by @griffinjohnston.bsky
     </div>
    </div>
  )
}

export default Home



