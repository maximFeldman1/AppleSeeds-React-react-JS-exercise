import React, { Component } from 'react'

export default class VideoList extends Component {

    VideoList =(props)=>{

    }
    render() {
        return (
            <div>
                {this.props.video.length}
            </div>
        )
    }
}
