import React, { useEffect, useState } from 'react'

export default function NotFound() {
    const [timeRedirect, setTimeRedirect] = useState(1);

    useEffect(() => {

        setTimeout(() => {
            setTimeRedirect(timeRedirect - 1)
        }, 500)

        if (timeRedirect <= 0) {
              window.location.href = "/"
        }
        
    }, [timeRedirect])
return (
    <div>Trang web không tồn tại sau {timeRedirect} chuyển hướng!</div>
  )
}
