import React from 'react'

interface Props {
    url: string
    name: string
}

function Link({ url, name }: Props) {
    return (
        <a href={url} rel="noreferrer" target="_blank">{name}</a>
    )
}

export default Link
