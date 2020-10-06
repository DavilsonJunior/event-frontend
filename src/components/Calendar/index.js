import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Box } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function Calendar({ data }) {
  return (
    <Box mt={2}>
      <Paper>
        <Scheduler locale="pt-BR" data={data}>
          <ViewState defaultCurrentDate={new Date()} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
    </Box>
  );
}

Calendar.propTypes = {
  data: PropTypes.array,
};
