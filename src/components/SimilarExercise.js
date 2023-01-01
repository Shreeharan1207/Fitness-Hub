import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>

      {/* For same muscle group */}

      <Typography variant="h3" mb='6px'>Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} /> 
          : <Loader />}
      </Stack>

      {/* For same equipment*/}

      <Typography variant="h3" mb='6px'>Exercises that use the same equipment</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} /> 
          : <Loader />}
      </Stack>

    </Box>
  )
}

export default SimilarExercise