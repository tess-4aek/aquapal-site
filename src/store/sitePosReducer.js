const defaultState = {
    about: null,
    knows: null,
    track: null,
    progress: null,
    addWater: null,
    guide: null,
    features: null,
    memories: null,
    team: null,
    reviews: null,
    wave: null,
    footer: null
}

export const SET_MAIN_POS = 'SET_WAVE_POS'
export const SET_ABOUT_POS = 'SET_ABOUT_POS'
export const SET_KNOWS_POS = 'SET_KNOWS_POS'
export const SET_TRACK_POS = 'SET_TRACK_POS'
export const SET_PROGRESS_POS = 'SET_PROGRESS_POS'
export const SET_ADDWATER_POS = 'SET_ADDWATER_POS'
export const SET_GUIDE_POS = 'SET_GUIDE_POS'
export const SET_FEATURES_POS = 'SET_FEATURES_POS'
export const SET_MEMORIES_POS = 'SET_MEMORIES_POS'
export const SET_TEAM_POS = 'SET_TEAM_POS'
export const SET_REVIEWS_POS = 'SET_REVIEWS_POS'
export const SET_WAVE_POS = 'SET_WAVE_POS'
export const SET_FOOTER_POS = 'SET_FOOTER_POS'

export const sitePosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_MAIN_POS':
            return { ...state, mainScreen: action.payload }
        case 'SET_ABOUT_POS':
            return { ...state, about: action.payload }
        case 'SET_KNOWS_POS':
            return { ...state, knows: action.payload }
        case 'SET_TRACK_POS':
            return { ...state, track: action.payload }
        case 'SET_PROGRESS_POS':
            return { ...state, progress: action.payload }
        case 'SET_ADDWATER_POS':
            return { ...state, addWater: action.payload }
        case 'SET_GUIDE_POS':
            return { ...state, guide: action.payload }
        case 'SET_FEATURES_POS':
            return { ...state, features: action.payload }
        case 'SET_MEMORIES_POS':
            return { ...state, memories: action.payload }
        case 'SET_TEAM_POS':
            return { ...state, team: action.payload }
        case 'SET_REVIEWS_POS':
            return { ...state, reviews: action.payload }
        case 'SET_WAVE_POS':
            return { ...state, wave: action.payload }
        case 'SET_FOOTER_POS':
            return { ...state, footer: action.payload }

        default:
            return state
    }
}

export const setMainPosAction = payload => ({ type: SET_MAIN_POS, payload })
export const setAboutPosAction = payload => ({ type: SET_ABOUT_POS, payload })
export const setKnowsPosAction = payload => ({ type: SET_KNOWS_POS, payload })
export const setTrackPosAction = payload => ({ type: SET_TRACK_POS, payload })
export const setProgressPosAction = payload => ({ type: SET_PROGRESS_POS, payload })
export const setAddWaterPosAction = payload => ({ type: SET_ADDWATER_POS, payload })
export const setGuidePosAction = payload => ({ type: SET_GUIDE_POS, payload })
export const setFeaturesPosAction = payload => ({ type: SET_FEATURES_POS, payload })
export const setMemoriesPosAction = payload => ({ type: SET_MEMORIES_POS, payload })
export const setTeamPosAction = payload => ({ type: SET_TEAM_POS, payload })
export const setReviewsPosAction = payload => ({ type: SET_REVIEWS_POS, payload })
export const setWavePosAction = payload => ({ type: SET_WAVE_POS, payload })
export const setFooterPosAction = payload => ({ type: SET_FOOTER_POS, payload })