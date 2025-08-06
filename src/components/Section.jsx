import React from 'react'
import './Section.css'
const Article = () => {
    const user = {
        name: 'Alice',
        isLogin: true
    }

    return (
        <div>
            {user.isLogin ?
                (<div className='login'>로그인</div>) :
                (<div className='logout'>로그아웃</div>)
            }
        </div>
    )
}

export default Article