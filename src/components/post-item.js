import React from 'react'

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
            {props.match.params.id} - {props.match.params.user}
        </div>
    )
}

export default PostItem
