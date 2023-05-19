import React from 'react';
import Scaffold from '../widget/Scaffold';
import HomeMain from './home_main/HomeMain';
import HomeNotice from './home_notice/HomeNotice';
import NewRecruits from './new_recruits/NewRecruits';

const homeConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SIDEBAR_MIN_WIDTH: 200,
    TOPBAR_MIN_HEIGHT: 60
}

export const Home = (): JSX.Element => {
    return (
        <Scaffold>
            <HomeMain
                screen_height={homeConstant.SCREEN_HEIGHT}
                sidebar_min_width={homeConstant.SIDEBAR_MIN_WIDTH}
                topbar_min_height={homeConstant.TOPBAR_MIN_HEIGHT}
            />
            <HomeNotice
                screen_height={homeConstant.SCREEN_HEIGHT}
            />
            <NewRecruits
                screen_height={homeConstant.SCREEN_HEIGHT}
            />
        </Scaffold>
    )
}
