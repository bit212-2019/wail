import React, { Component } from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import RaisedButton from 'material-ui/RaisedButton'
import ViewArchiveIcon from 'material-ui/svg-icons/image/remove-red-eye'
import UrlDispatcher from '../../dispatchers/url-dispatcher'
import wailConstants from '../../constants/wail-constants'
import CrawlDispatcher from '../../dispatchers/crawl-dispatcher'
import ArchiveNowButton from 'material-ui/svg-icons/content/archive'

const EventTypes = wailConstants.EventTypes
const From = wailConstants.From

export default class ArchivalButtons extends Component {

  render () {
    return (
      <Toolbar style={{ backgroundColor: 'transparent' }}>
        <ToolbarGroup firstChild={true}>
          <RaisedButton
            icon={<ViewArchiveIcon />}
            label='View In Wayback'
            labelPosition='before'
            onMouseDown={() => {
              UrlDispatcher.dispatch({
                type: EventTypes.VIEW_ARCHIVED_URI
              })
            }}
          />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <RaisedButton
            icon={<ArchiveNowButton />}
            label="Archive Via Heritrix!"
            labelPosition='before'
            onMouseDown={() => {
              CrawlDispatcher.dispatch({
                type: EventTypes.BUILD_CRAWL_JOB,
                from: From.BASIC_ARCHIVE_NOW
              })
            }}
          />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
