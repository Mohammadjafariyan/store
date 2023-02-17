import { GlobalConstants } from '@/components/abstract/global'
import { Group } from '@mantine/core'
import { Button } from 'primereact/button'
import React, { Component } from 'react'

export default class RateToComment extends Component {
  render() {
    return (
      <div data-testid='RateToComment' style={{color:GlobalConstants.SECENDARY_CSS}}>

        <Group>
            <div> آیا این دیدگاه مفید بود؟</div>
            <div><Button text  icon="pi pi-thumbs-up" iconPos="right" severity="secondary"  />
</div>
            <div><Button text  icon="pi pi-thumbs-down" iconPos="right" severity="secondary" />
</div>

        </Group> 
      </div>
    ) 
  }
}
