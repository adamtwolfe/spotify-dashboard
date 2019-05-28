import React from 'react'
import Panel from '../common/FixedPanel'
import Input from '../common/Input'
import Button from '../common/Button'
import './styles.css'

export default (props) => (
  <Panel content={
    <form className='artist-playlist-form'>
      <div>
        <input type='radio' name='type' value='genre' onClick={() => props.setPlaylistType('genre')} />Genre
        <input type='radio' name='type' value='artist' onClick={() => props.setPlaylistType('artist')} />Artist
      </div>
      <Input type='number' placeholder='track count' id='limit' />
      <Input type='text' placeholder='playlist name' id='playlist-name' />
      <div>
        <Input type='checkbox' id='save-toggle' /> Save Playlist?
      </div>
      <Button text='Submit' />
    </form>
  } />
)
