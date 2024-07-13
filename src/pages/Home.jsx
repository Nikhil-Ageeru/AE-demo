import React from "react";


import MainHeader from "../components/HomePageComponents/MainHeader";
import HomeBanner from "../components/HomePageComponents/HomeBanner";
import TrendingGameplay from "../components/HomePageComponents/TrendingGameplay";
import LiveStreamingArea from "../components/HomePageComponents/LiveStreamingArea";
import LatestGameVideoArea from "../components/HomePageComponents/LatestGameVideoArea";
import GameEpisodesArea from "../components/HomePageComponents/GameEpisodesArea";
import VideoBlogArea from "../components/HomePageComponents/VideoBlogArea";
import Footer from "../components/Shared/Footer";

function Home() {
    return (
        <>
            <MainHeader />
            <main>
                <HomeBanner />
                <TrendingGameplay />
                <LiveStreamingArea></LiveStreamingArea>
                <LatestGameVideoArea />
                <GameEpisodesArea />
                <VideoBlogArea />

            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;
