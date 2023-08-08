import React, { useEffect, useState } from 'react'

export default function Page404(props) {
    const [timeRedirect, setTimeRedirect] = useState(3);

    useEffect(() => {

        setTimeout(() => {
            setTimeRedirect(timeRedirect - 1)
        }, 1000)

        if (timeRedirect <= 0) {
            if (!props.profile) {
              window.location.href = "/login"
            }else {
              window.location.href = "/profile"
            }
        }
        
    }, [timeRedirect])
  return (
    <div>{props.message} sau {timeRedirect} chuyển hướng!</div>
  )
}
