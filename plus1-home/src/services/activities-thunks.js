import { createAsyncThunk } from "@reduxjs/toolkit"     // import createAsyncTrunk
import * as service from "./activities-service"           // import all exported functions as service


export const createActivityThunk = createAsyncThunk(
    'activities/createActivity',
    async (activity) => {
        const newActivity = await service.createActivity(activity)
        return newActivity
    }
)

export const findActivityThunk = createAsyncThunk(
    'activities/findActivites',
    async () =>
        await service.findActivities()
)

export const deleteActivityThunk = createAsyncThunk(
    'activities/deleteActivity',
    async (activityId) => {
        await service.deleteActivity(activityId)
        return activityId
    }
)

export const updateActivityThunk = createAsyncThunk(
    'activities/updateActivity',
    async (activity) =>
        await service.updateActivity(activity)
)
