import React from 'react';
import Grid from '@material-ui/core/Grid';
import { view } from 'react-easy-state';
import { AppState } from '../Store';
import Device from './Device';

class Devices extends React.Component {

  componentDidMount() {
    this.load();
  }

  async load() {
    const res = await fetch('/api/devices');
    const data = await res.json();
    AppState.devices = data.items;
  }

  render() {
    return (
      <Grid container spacing={3}>
        {AppState.devices.map((device, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Device device={device} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default view(Devices);
