import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Calendar from '../../components/Calendar';
import api from '../../services/api';

import getHour from '../../utils/getHour';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDates() {
      const response = await api.get('/events/user/registered');

      const events = response.data.map((item) => ({
        title: `${item.event.description} as ${getHour(
          item.event.start_date,
        )} hrs`,
        startDate: item.event.start_date,
        endDate: item.event.end_date,
      }));

      setData(events);
    }

    getDates();
  }, []);

  return (
    <>
      <Typography variant="h2">Calendario de Eventos</Typography>
      <Calendar data={data} />
    </>
  );
}
