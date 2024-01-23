import React, { useState } from 'react'

const ImageSection = () => {
    const [image, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <div className='imageSection'>
            {image.map(() => {
                return (<div className="image">
                    <img src="https://picsum.photos/200/200" alt="" />
                </div>)
            }
            )
            }
        </div>
    )
}

export default ImageSection
