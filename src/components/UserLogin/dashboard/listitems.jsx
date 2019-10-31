import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'

export const mainListItems = (
   <div>
      <ListItem button>
         <ListItemIcon>
            <DashboardIcon />
         </ListItemIcon>
         <ListItemText primary='Profile' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <ShoppingCartIcon />
         </ListItemIcon>
         <ListItemText primary='My Videos' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary='My Playlist' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <BarChartIcon />
         </ListItemIcon>
         <ListItemText primary='Stats' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <LayersIcon />
         </ListItemIcon>
         <ListItemText primary='Integrations' />
      </ListItem>
   </div>
)
