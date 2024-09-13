import React, { useState, useEffect } from "react";
import { TbSettingsFilled } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoHammerSharp } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiAwardFill,
} from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { TiUserAdd } from "react-icons/ti";
import { PiCopySimple } from "react-icons/pi";
import { BiDollar } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import dailyReward from "../assets/dailyReward.png";
import mainSkin from "../assets/mainSkin.png";
import boost from "../assets/rocketBoost.png";
import logo from "../assets/logo.png";
import bingx from "../assets/bingxLogo.jfif";
import binance from "../assets/binanceLogo.png";
import bybit from "../assets/bybitLogo.jpg";
import okx from "../assets/okxLogo.webp";
import kucoin from "../assets/kucoinLogo.png";
import bitget from "../assets/bitgetLogo.png";
import unKnown from "../assets/unknown.jfif";
import giftFriend from "../assets/giftFriend.png";
import premiumFriend from "../assets/premiumFriendGift.png";
import hamsIcon from "../assets/hamsIcon.png";
import hamCoin from "../assets/hamCoin.png";
import youtube from "../assets/youtubeLogo.png";
import dailyTask from "../assets/dailyTask.png";
import facebook from "../assets/facebookLogo.png";
import instagram from "../assets/instagramLogo.webp";
import x from "../assets/xLogo.webp";
import telegram from "../assets/telegramLogo.png";
import addFriends from "../assets/addFriends.webp";
import earnTask from "../assets/earnTask.png";
import toncoin from "../assets/ton.webp"
import tap from "../assets/tap.png";
import booster from "../assets/booster.png";
import char1 from "../assets/hamChar3.png";
import char2 from "../assets/hamChar6.png";
import char3 from "../assets/hamChar8.png";
import char4 from "../assets/hamChar9.png";
import char5 from "../assets/hamChar7.png";
import char6 from "../assets/hamChar2.png";
import char7 from "../assets/hamChar4.png";
import char8 from "../assets/hamChar5.png";
import char9 from "../assets/hamChar1.png";
import profitBoost from "../assets/profitBoost.png";

const Mainpage = () => {
  const [visible, setVisible] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [activeSection, setActiveSection] = useState("mainPage");
  const [airdropActiveSection, setAirdropActiveSection] = useState("pointPage");
  const [leagueActiveSection, setLeagueActiveSection] = useState("lordPage");
  const [cardsActiveSection, setCardsActiveSection] = useState("prTeamPage");
  const [myCardsActiveSection, setMyCardsActiveSection] = useState("");

  const handleMainSectionClick = () => {
    setActiveSection("tradeWalletPage");
    setCardsActiveSection("prTeamPage");
    setMyCardsActiveSection("myCardsPage");
    setAirdropActiveSection("pointPage");
  };

  const handleAirdropSectionClick = () => {
    setActiveSection("airDropPage");
    setAirdropActiveSection("pointPage");
  };

  const handleLeagueSectionClick = () => {
    setActiveSection("leaguePage");
    setLeagueActiveSection("lordPage");
    setCardsActiveSection("prTeamPage");
    setMyCardsActiveSection("myCardsPage");
  };

  const handleMiningSectionClick = () => {
    setActiveSection("miningPage");
    setCardsActiveSection("prTeamPage");
    setMyCardsActiveSection("myCardsPage");
  };
  const handleSpecialCardsSectionClick = () => {
    setCardsActiveSection("specialsPage");
    setMyCardsActiveSection("myCardsPage");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (visible, activePopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible, activePopup, activeSection, cardsActiveSection, airdropActiveSection, leagueActiveSection, myCardsActiveSection]);
  const [progress, setProgress] = useState(10);

  const updateProgressBar = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const toggleSettings = () => {
    setVisible(!visible);
  };
  const toggleSetting = (popupId) => {
    if (activePopup === popupId) {
      setActivePopup(null);
    } else {
      setActivePopup(popupId);
    }
  };
  return (
    <div>
      {visible && <div className="overlay" onClick={toggleSettings}></div>}
      {activePopup && (
        <div className="overlay" onClick={() => setActivePopup(null)}></div>
      )}
      {/*Main Tapping Page */}
      {activeSection === "mainPage" && (
        <div>
          <div className="flex">
            <div className="profile-container"></div>
            <div className="greet">Welcome to my Hamster Replication</div>
          </div>

          <div className="gap-2 level-info">
            <div
              onClick={() => handleLeagueSectionClick("leaguePage")}
              className={`cursor-pointer league ${
                activeSection === "leaguePage" ? "league" : ""
              }`}
            >
              <div className="level">
                <div className="level-title">
                  <div>Lord</div>
                  <div>
                    <RiArrowRightSLine className="arrow-icon" />
                  </div>
                </div>
                <div className="level1">
                  <span className="fw-bolder text-white">10</span>
                  <span>/11</span>
                </div>
              </div>

              <div className="level-progress">
                <div
                  style={{
                    width: `${progress}%`,
                    height: "8px",
                    background:
                      "linear-gradient(to right, lime, gainsboro, palevioletred, purple)",
                    borderRadius: "20px",
                    transition: "width 0.3s",
                  }}
                ></div>
              </div>
            </div>
            <div className="profit-per-hour">
              <div
                onClick={() => setActiveSection("tradeWalletPage")}
                className={`cursor-pointer trade-wallet ${
                  activeSection === "tradeWalletPage" ? "" : ""
                }`}
              >
                <img className="trade-wallet" src={bingx} alt="Bing X Logo" />
              </div>
              <div className="pph">
                <div className="pph-text">Profit per hour</div>
                <div className="pph-value d-flex">
                  <div>
                    <img className="pph-coin" src={hamCoin} alt="" />
                  </div>
                  <span>+6.54M</span>
                  <span className="info">
                    <button className="bbb" onClick={toggleSettings}>
                      {visible ? (
                        <BsInfoCircleFill className="ifon" />
                      ) : (
                        <BsInfoCircleFill className="if" />
                      )}
                    </button>
                  </span>
                </div>
              </div>
              <div
                onClick={() => setActiveSection("settingsPage")}
                className={`cursor-pointer settings ${
                  activeSection === "settingsPage" ? "settings" : ""
                }`}
              >
                <TbSettingsFilled />
              </div>
            </div>
          </div>
          <div className={`start-mining ${visible ? "visible" : ""}`}>
            <div className="cancel" onClick={toggleSettings}>
              {visible ? <MdCancel /> : <MdCancel />}
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img">
                  <div>
                    <img
                      src={profitBoost}
                      alt="profit-boost"
                      className="profit-boost"
                    />
                  </div>
                </div>
                <div>
                  <h1>Boost your profit</h1>
                  <h6>Tap the Mining menu to buy upgrades for your exchange</h6>
                  <h5>Earn even when offline up to 3 hours</h5>
                  <button
                    onClick={() => {
                      setActiveSection("miningPage");
                      setVisible(false);
                    }}
                    className={`cursor-pointer col-12 start-mine ${
                      activeSection === "miningPage" ? "start-mine" : ""
                    }`}
                  >
                    <div>Start Mining</div>
                    <div>
                      <img className="hamcoin" src={hamCoin} alt="coin.." />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-auto d-flex justify-content-center align-items-center">
            <div className="col-12 main-game">
              <div className="row gap-1 mx-2 cards-display">
                <div
                  onClick={() => setActiveSection("earnCoinPage")}
                  className={`cursor-pointer col-5 daily-reward-card ${
                    activeSection === "earnCoinPage" ? "daily-reward-card" : ""
                  }`}
                >
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={dailyReward}
                        alt="daily-reward"
                        className="daily-reward-pic"
                      />
                    </div>
                    <div className="dailyReward">Daily reward</div>
                    <div className="daily-reward-timing">10:38</div>
                  </div>
                </div>
                <div
                  onClick={() => setActiveSection("miningPage")}
                  className={`cursor-pointer col-5 daily-reward-card ${
                    activeSection === "miningPage" ? "daily-reward-card" : ""
                  }`}
                >
                  <div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={dailyReward}
                        alt="daily-reward"
                        className="daily-reward-pic"
                      />
                    </div>
                    <div className="dailyReward">Daily combo</div>
                    <div className="daily-reward-timing">10:38</div>
                  </div>
                </div>
              </div>

              <div className="balance">
                <span>
                  <div>
                    <img className="coin-img" src={hamCoin} alt="" />
                  </div>
                </span>
                <span>1,703,205,150</span>
              </div>

              <div className="tap-level">
                <div>
                  <div className="tap-coin">
                    <img src={mainSkin} className="main-skin" alt="Your Skin" />
                  </div>
                </div>
              </div>
              <div className="tap-progress">
                <div className="tap-energy">
                  <span className="energy-icon">
                    <HiLightningBolt />
                  </span>{" "}
                  9500/9500
                </div>
                <div
                  onClick={() => setActiveSection("boostPage")}
                  className={`cursor-pointer boost d-flex gap-2 ${
                    activeSection === "boostPage" ? "" : ""
                  }`}
                >
                  <div>
                    <img src={boost} className="boost-img" alt="boost" />
                  </div>
                  <div>Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* League section */}
      {activeSection === "leaguePage" && (
        <div className="py-4 px-3">
          {leagueActiveSection === "bronzePage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("bronzePage")}
                  className={`cursor-pointer arr-disabled ${
                    leagueActiveSection === "bronzePage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars1" src={char1} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("silverPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "silverPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Bronze</div>
                  <div className="league-amount">from 0</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="bronze-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="bronze-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "silverPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("bronzePage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "bronzePage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars2" src={char2} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("goldPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "goldPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Silver</div>
                  <div className="league-amount">from 5K</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="silver-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="silver-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "goldPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("silverPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "silverPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars3" src={char3} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("platinumPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "platinumPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Gold</div>
                  <div className="league-amount">from 25k</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="gold-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="gold-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "platinumPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("goldPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "goldPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars4" src={char4} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("diamondPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "diamondPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Platinum</div>
                  <div className="league-amount">from 100K</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="platinum-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="platinum-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "diamondPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("platinumPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "platinumPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars5" src={char5} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("epicPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "epicPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Diamond</div>
                  <div className="league-amount">from 1M</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="diamond-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="diamond-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "epicPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("diamondPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "diamondPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars6" src={char6} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("legendaryPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "legendaryPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Epic</div>
                  <div className="league-amount">from 2M</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="epic-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="epic-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "legendaryPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("epicPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "epicPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars7" src={char7} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("masterPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "masterPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Legendary</div>
                  <div className="league-amount">from 10M</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="legendary-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="legendary-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "masterPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("legendaryPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "legendaryPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars8" src={char8} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("grandmasterPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "grandmasterPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Master</div>
                  <div className="league-amount">from 50M</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="master-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="master-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "grandmasterPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("masterPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "masterPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars9" src={char9} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("lordPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "lordPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Grandmaster</div>
                  <div className="league-amount">from 100M</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="grandmaster-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="grandmaster-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {leagueActiveSection === "lordPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("grandmasterPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "grandmasterPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars10" src={mainSkin} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("creatorPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "creatorPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Lord</div>
                  <div className="league-amount">1.7B/18B</div>
                </div>
              </div>
              <div className="mx-auto">
                <div className="progress-container">
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "9px",
                      background:
                        "linear-gradient(to right, lime, gainsboro, palevioletred, purple)",
                      borderRadius: "20px",
                      transition: "width 0.3s",
                    }}
                  ></div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="lord-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="lord-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="lord-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="lord-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-players-card mx-auto">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="lord-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Promise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">6,544,200</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">10000+</div>
                  </div>
                </div>
                {/* <button onClick={updateProgressBar}>Increase Progress</button> */}
              </div>
            </div>
          )}
          {leagueActiveSection === "creatorPage" && (
            <div>
              <div className="d-flex gap-4 justify-content-center align-items-center">
                <RiArrowLeftSLine
                  onClick={() => setLeagueActiveSection("lordPage")}
                  className={`cursor-pointer arr ${
                    leagueActiveSection === "lordPage" ? "" : ""
                  }`}
                />
                <div>
                  <img className="chars1" src={char1} alt="" />
                </div>
                <RiArrowRightSLine
                  onClick={() => setLeagueActiveSection("creatorPage")}
                  className={`cursor-pointer arr-disabled ${
                    leagueActiveSection === "creatorPage" ? "" : ""
                  }`}
                />
              </div>
              <div className="league-info">
                <div>
                  <div className="league-title">Creator</div>
                  <div className="league-amount">from 18B+</div>
                </div>
              </div>
              <div className="row mx-auto league-chars">
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="creator-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
                <div className="league-player-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img
                        src={hamsIcon}
                        alt="icon"
                        className="creator-league-profile-icon"
                      />
                    </div>
                    <div className="invited-name">
                      <div className="d-flex mt-1 gap-2 align-items-center">
                        <div>
                          <img className="league-exchange" src={bingx} alt="" />
                        </div>
                        <div className="league-player-name">Aina Praise</div>
                      </div>
                      <div className="d-flex align-items-center player-league">
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="player-pph-amount">33,984</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div className="player-position">1</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Trade wallets and exchanges page */}
      {activeSection === "tradeWalletPage" && (
        <div className="trade-wallet-page">
          <h1 className="choose-exchange">Choose exchange</h1>
          <div className="row">
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={binance} className="wallet-logo" alt="" />
                </div>
                <div>Binance</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={okx} className="wallet-logo" alt="" />
                </div>
                <div>OKX</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={bybit} className="wallet-logo" alt="" />
                </div>
                <div>Bybit</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={bingx} className="wallet-logo" alt="" />
                </div>
                <div>BingX</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={kucoin} className="wallet-logo" alt="" />
                </div>
                <div>Kucoin</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
            <div className="wallet-cards col-12">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <img src={bitget} className="wallet-logo" alt="" />
                </div>
                <div>Bitget</div>
              </div>
              <div className="wallet-picked-icon">
                <FaCheck />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Page */}
      {activeSection === "settingsPage" && (
        <div className="py-5 px-4">
          <div
            className={`start-minings ${
              activePopup === "popup3" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup3")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div>
                  <h3>Are you sure you want to delete your account?</h3>
                  <p>All your data, including game progress, achievements, and purchases, will be permanently deleted. This action cannot be undone</p>
                  <button className="del-acc">
                    <div>Delete account</div>
                  </button>
                  <button className="cancel-button" onClick={() => toggleSetting("popup3")}>
                    <div>Cancel</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="setting">Settings</div>
          <div className="row mx-auto mt-2">
            <div  onClick={() => setActiveSection("tradeWalletPage")}
               className={`cursor-pointer chooseExchanges col-12 my-2 ${
                 activeSection === "tradeWalletPage" ? "" : ""
               }`}>
              <div>
                <div className="choose">Choose exchange</div>
                <div className="trade-app">BingX</div>
              </div>
              <RiArrowRightSLine className="arrow-right" />
            </div>
            <div 
            className={activePopup === "popup3" ? "deleteAccount col-12" : "deleteAccount col-12"}
            onClick={() => toggleSetting("popup3")}>
              <div>Delete account</div>
              <RiArrowRightSLine className="arrow-right" />
            </div>
          </div>
        </div>
      )}

      {/* Boost Mining page */}
      {activeSection === "boostPage" && (
        <div className="py-4 mt-2 px-4">
           <div
            className={`start-mining ${
              activePopup === "popup4" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup4")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img"><HiLightningBolt className="bolt" /></div>
                <div>
                  <h1>Full energy</h1>
                  <p className="recharge">Recharge your energy to the maximum and do another round of mining</p>
                <div className="d-flex justify-content-center align-items-center gap-2 fs-3 fw-bold mb-4">
                <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                  <div>Free</div>
                </div>
                  <button className="start-mine">
                    <div>Go ahead</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`start-mining ${
              activePopup === "popup5" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup5")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img">
                  <div>
                    <img className="tap" src={tap} alt="tap.." />
                  </div>
                  </div>
                <div>
                  <h1>Multitap</h1>
                  <h6>Increase the amount of coins you can earn per tap</h6>
                  <h6>+1 coin for tap for level 10</h6>
                <div className="d-flex justify-content-center align-items-center gap-2 fs-3 fw-bold mb-4">
                <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                  <div>512,000</div>
                  <div className="dot-lvl"></div>
                  <div className="boost-lvl">10 lvl</div>
                </div>
                  <button className="start-mine">
                    <div>Go ahead</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`start-mining ${
              activePopup === "popup6" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup6")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img">
                  <div>
                    <img className="tap" src={booster} alt="energy.." />
                  </div>
                  </div>
                <div>
                  <h1>Energy limit</h1>
                  <h6>Increase the amount of energy</h6>
                  <h6>+500 coin for tap for level 10</h6>
                <div className="d-flex justify-content-center align-items-center gap-2 fs-3 fw-bold mb-4">
                <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                  <div>512,000</div>
                  <div className="dot-lvl"></div>
                  <div className="boost-lvl">10 lvl</div>
                </div>
                  <button className="start-mine">
                    <div>Go ahead</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="ur-balance">Your balance</div>
            <div className="bal gap-1">
              <span>
                <div>
                  <img className="coin-img" src={hamCoin} alt="" />
                </div>
              </span>
              <span>1,703,205,150</span>
            </div>
            <div className="bal-works">How a boost works</div>
          </div>
          <div className="booster-text">Free daily boosters</div>
          <div className="daily-booster row mx-auto">
            <div className={activePopup === "popup4" ? "col-12 daily-boost d-flex gap-1 align-items-center" : "col-12 daily-boost d-flex gap-1 align-items-center"}
            onClick={() => toggleSetting("popup4")}>
              <HiLightningBolt className="energy-boost mx-1" />
              <div className="ms-2">
                <div>Full energy</div>
                <div className="avail-boost">6/6 available</div>
              </div>
            </div>
          </div>

          <div className="booster-text">Boosters</div>
          <div className="boosters row mx-auto">
            <div className={activePopup === "popup5" ? "daily-div col-12 d-flex justify-content-between align-items-center" : "daily-div col-12 d-flex justify-content-between align-items-center"}
            onClick={() => toggleSetting("popup5")}>
              <div className="d-flex gap-1 align-items-center">
                <div>
                  <img className="tap-icon" src={tap} alt="" />
                </div>
                <div>
                  <div>Multitap</div>
                  <div className="daily-content d-flex justify-content-between gap-2 align-items-center">
                    <img className="boost-coin" src={hamCoin} alt="" />
                    <div className="fw-bold">512k</div>
                    <div className="dot-lvl"></div>
                    <div className="boost-lvl">10lvl</div>
                  </div>
                </div>
              </div>

              <RiArrowRightSLine className="more" />
            </div>
            <div className={activePopup === "popup6" ? "daily-div col-12 d-flex justify-content-between align-items-center" : "daily-div col-12 d-flex justify-content-between align-items-center"}
            onClick={() => toggleSetting("popup6")}>
              <div className="d-flex gap-1 align-items-center">
                <div>
                  <img className="tap-iconed" src={booster} alt="" />
                </div>
                <div>
                  <div>Energy limit</div>
                  <div className="daily-content d-flex justify-content-between gap-2 align-items-center">
                    <img className="boost-coin" src={hamCoin} alt="" />
                    <div className="fw-bold">512k</div>
                    <div className="dot-lvl"></div>
                    <div className="boost-lvl">10lvl</div>
                  </div>
                </div>
              </div>

              <RiArrowRightSLine className="more" />
            </div>
          </div>
        </div>
      )}

      {/* Mining page */}
      {activeSection === "miningPage" && (
        <div>
          <div className="gap-2 level-info">
            <div
              onClick={() => handleMainSectionClick("leaguePage")}
              className={`cursor-pointer league ${
                activeSection === "leaguePage" ? "league" : ""
              }`}
            >
              <div className="level">
                <div className="level-title">
                  <div>Lord</div>
                  <div>
                    <RiArrowRightSLine className="arrow-icon" />
                  </div>
                </div>
                <div className="level1">
                  <span className="fw-bolder text-white">10</span>
                  <span>/11</span>
                </div>
              </div>

              <div className="level-progress">
                <div
                  style={{
                    width: `${progress}%`,
                    height: "8px",
                    background:
                      "linear-gradient(to right, lime, gainsboro, palevioletred, purple)",
                    borderRadius: "20px",
                    transition: "width 0.3s",
                  }}
                ></div>
              </div>
            </div>
            <div className="profit-per-hour">
              <div
                onClick={() => handleMainSectionClick("tradeWalletPage")}
                className={`cursor-pointer trade-wallet ${
                  activeSection === "tradeWalletPage" ? "" : ""
                }`}
              >
                <img className="trade-wallet" src={bingx} alt="Bing X Logo" />
              </div>
              <div className="pph">
                <div className="pph-text">Profit per hour</div>
                <div className="pph-value d-flex">
                  <div>
                    <img className="pph-coin" src={hamCoin} alt="" />
                  </div>
                  <span>+6.54M</span>
                  <span className="info">
                    <button
                      className="bbb"
                      onClick={() => toggleSetting("popup1")}
                    >
                      <BsInfoCircleFill
                        className={activePopup === "popup1" ? "ifon" : "if"}
                      />
                    </button>
                  </span>
                </div>
              </div>
              <div
                onClick={() => handleMainSectionClick("settingsPage")}
                className={`cursor-pointer settings ${
                  activeSection === "settingsPage" ? "settings" : ""
                }`}
              >
                <TbSettingsFilled />
              </div>
            </div>
          </div>
          <div
            className={`start-mining ${
              activePopup === "popup1" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup1")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img">
                  <div>
                    <img
                      src={profitBoost}
                      alt="profit-boost"
                      className="profit-boost"
                    />
                  </div>
                </div>
                <div>
                  <h1>Boost your profit</h1>
                  <h6>Tap the Mining menu to buy upgrades for your exchange</h6>
                  <h5>Earn even when offline up to 3 hours</h5>
                  <button
                    onClick={() => {
                      setActiveSection("miningPage");
                      setActivePopup(null);
                    }}
                    className={`cursor-pointer col-12 start-mine ${
                      activeSection === "miningPage" ? "start-mine" : ""
                    }`}
                  >
                    <div>Start Mining</div>
                    <div>
                      <img className="hamcoin" src={hamCoin} alt="coin.." />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`start-timer ${
              activePopup === "popup2" ? "visible" : ""
            }`}
          >
            <div className="cancel" onClick={() => toggleSetting("popup2")}>
              <MdCancel />
            </div>
            <div className="upgrade-pph-nfo">
              <div>
                <div className="center-img">
                  <div>
                    <img
                      src={profitBoost}
                      alt="profit-boost"
                      className="profit-boost"
                    />
                  </div>
                </div>
                <div>
                  <h5>Find 3 combo cards and upgrade them up to get a prize</h5>
                  <button
                    onClick={() => {
                      setActiveSection("miningPage");
                      setActivePopup(null);
                    }}
                    className={`cursor-pointer mt-5 col-12 start-mine ${
                      activeSection === "miningPage" ? "start-mine" : ""
                    }`}
                  >
                    <div>I hope I'm lucky 🤍</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-auto d-flex justify-content-center align-items-center">
            <div className="col-12 main-game px-4">
              <div className="combo-timer">
                <div className="mt-1">03:05:00</div>
                {/* <BsInfoCircleFill className="timer-info" /> */}
                <button className="bbb" onClick={() => toggleSetting("popup2")}>
                  <BsInfoCircleFill
                    className={activePopup === "popup2" ? "timer-info" : "if"}
                  />
                </button>
              </div>

              <div className="combo-card-price">
                <div>Daily combo</div>
                <div className="dot-win">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="combo-price d-flex justify-content-center align-items-center gap-1">
                  <div><img className="hamCoin" src={hamCoin} alt="" /></div>
                  <div>+5,000,000</div>
                  <div></div>
                </div>
              </div>

              <div className="chosen-combo-cards gap-2 mt-3 mx-auto row">
                <div className="chosen-card col-3">
                  <div>
                  <img className="unknown-card" src={unKnown} alt="..." />
                  </div>
                </div>
                <div className="chosen-card col-3">
                <div>
                  <img className="unknown-card" src={unKnown} alt="..." />
                  </div>
                </div>
                <div className="chosen-card col-3">
                <div>
                  <img className="unknown-card" src={unKnown} alt="..." />
                  </div>
                </div>
              </div>

              <div className="balance">
                <span>
                  <div>
                    <img className="coin-img" src={hamCoin} alt="" />
                  </div>
                </span>
                <span>1,703,205,150</span>
              </div>

              <div className="combo-card-section">
                <div className="combo-card-positon">
                  <div
                    onClick={() => setCardsActiveSection("prTeamPage")}
                    className={`cursor-pointer prTeam ${
                      cardsActiveSection === "prTeamPage" ? "prTeamed" : ""
                    }`}
                  >
                    PR&Team
                  </div>
                  <div
                    onClick={() => setCardsActiveSection("marketPage")}
                    className={`cursor-pointer prTeam ${
                      cardsActiveSection === "marketPage" ? "prTeamed" : ""
                    }`}
                  >
                    Markets
                  </div>
                  <div
                    onClick={() => setCardsActiveSection("legalPage")}
                    className={`cursor-pointer prTeam ${
                      cardsActiveSection === "legalPage" ? "prTeamed" : ""
                    }`}
                  >
                    Legal
                  </div>
                  <div
                    onClick={() => setCardsActiveSection("web3Page")}
                    className={`cursor-pointer prTeam ${
                      cardsActiveSection === "web3Page" ? "prTeamed" : ""
                    }`}
                  >
                    Web3
                  </div>
                  <div
                    onClick={() =>
                      handleSpecialCardsSectionClick("specialsPage")
                    }
                    className={`cursor-pointer prTeam ${
                      cardsActiveSection === "specialsPage" ? "prTeamed" : ""
                    }`}
                  >
                    Specials
                  </div>
                </div>
                <div>
                  {cardsActiveSection === "prTeamPage" && (
                    <div>
                      <div className="mine-cards-section mt-4 row mx-auto">
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">CEO</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char2} alt="" /></div>
                              <div>
                                <div className="card-title">Marketing</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>1.95k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 16</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>1.66M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char5} alt="" /></div>
                              <div>
                                <div className="card-title">IT team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>7.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 17</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>8M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char3} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>1.76k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 15</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>544.02K</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char1} alt="" /></div>
                              <div>
                                <div className="card-title">HamsterBook</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>1.76k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 15</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>362.68K</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards last-two col-5"></div>
                        <div className="last-two row mx-auto">
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="mining-tap">
                          <div className="tap-level">
                            <div>
                              <div className="tap-coin">
                                <img
                                  src={mainSkin}
                                  className="main-skin"
                                  alt="Your Skin"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tap-progress mt-3">
                            <div className="tap-energy">
                              <span className="energy-icon">
                                <HiLightningBolt />
                              </span>{" "}
                              9500/9500
                            </div>
                            <div
                              onClick={() => setActiveSection("boostPage")}
                              className={`cursor-pointer boost d-flex gap-2 ${
                                activeSection === "boostPage" ? "" : ""
                              }`}
                            >
                              <div>
                                <img
                                  src={boost}
                                  className="boost-img"
                                  alt="boost"
                                />
                              </div>
                              <div>Boost</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardsActiveSection === "marketPage" && (
                    <div>
                      <div className="mine-cards-section mt-4 row mx-auto">
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="last-two row mx-auto">
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="mining-tap">
                          <div className="tap-level">
                            <div>
                              <div className="tap-coin">
                                <img
                                  src={mainSkin}
                                  className="main-skin"
                                  alt="Your Skin"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tap-progress mt-3">
                            <div className="tap-energy">
                              <span className="energy-icon">
                                <HiLightningBolt />
                              </span>{" "}
                              9500/9500
                            </div>
                            <div
                              onClick={() => setActiveSection("boostPage")}
                              className={`cursor-pointer boost d-flex gap-2 ${
                                activeSection === "boostPage" ? "" : ""
                              }`}
                            >
                              <div>
                                <img
                                  src={boost}
                                  className="boost-img"
                                  alt="boost"
                                />
                              </div>
                              <div>Boost</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardsActiveSection === "legalPage" && (
                    <div>
                      <div className="mine-cards-section mt-4 row mx-auto">
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="last-two row mx-auto">
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="mining-tap">
                          <div className="tap-level">
                            <div>
                              <div className="tap-coin">
                                <img
                                  src={mainSkin}
                                  className="main-skin"
                                  alt="Your Skin"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tap-progress mt-3">
                            <div className="tap-energy">
                              <span className="energy-icon">
                                <HiLightningBolt />
                              </span>{" "}
                              9500/9500
                            </div>
                            <div
                              onClick={() => setActiveSection("boostPage")}
                              className={`cursor-pointer boost d-flex gap-2 ${
                                activeSection === "boostPage" ? "" : ""
                              }`}
                            >
                              <div>
                                <img
                                  src={boost}
                                  className="boost-img"
                                  alt="boost"
                                />
                              </div>
                              <div>Boost</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardsActiveSection === "web3Page" && (
                    <div>
                      <div className="mine-cards-section mt-4 row mx-auto">
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        <div className="last-two row mx-auto">
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                          <div className="mine-cards col-5">
                          <div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div><img className="mine-card-pic" src={char9} alt="" /></div>
                              <div>
                                <div className="card-title">Support team</div>
                                <div className="card-pph">profit per hour</div>
                                <div className="card-price">
                                  <div><img className="pph-coin" src={hamCoin} alt="" /></div>
                                  <div>3.4k</div>
                                </div>
                              </div>
                              </div>
                              <hr />
                              <div className="lvl-balance">
                                <div className="lvl">Lvl 18</div>
                                <div className="d-flex justify-content-center align-items-center gap-1">
                                  <div><img className="hamcoin" src={hamCoin} alt="" /></div>
                                  <div>10.11M</div>
                                </div>
                              </div>
                          </div>
                        </div>
                        </div>
                        <div className="mining-tap">
                          <div className="tap-level">
                            <div>
                              <div className="tap-coin">
                                <img
                                  src={mainSkin}
                                  className="main-skin"
                                  alt="Your Skin"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tap-progress mt-3">
                            <div className="tap-energy">
                              <span className="energy-icon">
                                <HiLightningBolt />
                              </span>{" "}
                              9500/9500
                            </div>
                            <div
                              onClick={() => setActiveSection("boostPage")}
                              className={`cursor-pointer boost d-flex gap-2 ${
                                activeSection === "boostPage" ? "" : ""
                              }`}
                            >
                              <div>
                                <img
                                  src={boost}
                                  className="boost-img"
                                  alt="boost"
                                />
                              </div>
                              <div>Boost</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {cardsActiveSection === "specialsPage" && (
                    <div>
                      <div className="specials-nav-cards">
                        <div
                          onClick={() => setMyCardsActiveSection("myCardsPage")}
                          className={`cursor-pointer linked-card ${
                            myCardsActiveSection === "myCardsPage"
                              ? "linked-card-active"
                              : ""
                          }`}
                        >
                          My cards
                        </div>
                        <div
                          onClick={() =>
                            setMyCardsActiveSection("newCardsPage")
                          }
                          className={`cursor-pointer linked-card ${
                            myCardsActiveSection === "newCardsPage"
                              ? "linked-card-active"
                              : ""
                          }`}
                        >
                          New cards
                        </div>
                        <div
                          onClick={() => setMyCardsActiveSection("missedPage")}
                          className={`cursor-pointer linked-card ${
                            myCardsActiveSection === "missedPage"
                              ? "linked-card-active"
                              : ""
                          }`}
                        >
                          Missed opportunities
                        </div>
                      </div>
                      {myCardsActiveSection === "myCardsPage" && (
                        <div>My Cards</div>
                      )}
                      {myCardsActiveSection === "newCardsPage" && (
                        <div>new cards</div>
                      )}
                      {myCardsActiveSection === "missedPage" && (
                        <div>Missed oppurtunities</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Friends inviting/invited page */}
      {activeSection === "friendInvitePage" && (
        <div>
          <div className="friend-invited-page">
            <h1 className="invite-text">Invite friends!</h1>
            <h4 className="invite-info">
              You and your friend will recieve bonuses
            </h4>
            <div className="row">
              <div className="invite-card col-12">
                <div>
                  <img
                    className="invite-package"
                    src={giftFriend}
                    alt="gift.."
                  />
                </div>
                <div className="gifting-info">
                  <h4 className="gifting-info1">Invite a friend</h4>
                  <br />
                  <h6 className="gifting-info2 d-inline-flex align-items-center gap-2">
                    <div className="dot"></div>
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div>
                      <span className="price-coin-text">+5,000</span> for you
                      and your friend
                    </div>
                  </h6>
                </div>
              </div>
              <div className="invite-card col-12">
                <div>
                  <img
                    className="invite-package"
                    src={premiumFriend}
                    alt="Premium gift.."
                  />
                </div>

                <div className="gifting-info">
                  <h4 className="gifting-info1">
                    Invite a friend with Telegram Premium
                  </h4>

                  <h6 className="gifting-info2">
                    <div className="d-flex coins gap-2">
                      <div className="dot"></div>
                      <div>
                        <img className="invite-coin" src={hamCoin} alt="" />
                      </div>
                    </div>
                    <div className="price-coin-text">+25,000</div>
                    <div> for you and your friend</div>
                  </h6>
                </div>
              </div>
            </div>
            <h3 className="text-center text-primary fw-bold my-2">
              More bonuses
            </h3>
            <div className="my-4">
              <div className="d-flex justify-content-between fw-bold fs-6 mb-3">
                <div>List of your friends(10)</div>
                <div>
                  <LuRefreshCw className="fs-5" />
                </div>
              </div>
              <div className="invited-friend-list row">
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
                <div className="invited-friend-card col-12">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <img src={hamsIcon} alt="icon" className="hams-icon" />
                    </div>
                    <div className="invited-name">
                      <div className="fw-bold invited-user">Aina Praise</div>
                      <div className="d-flex invited-league">
                        <div>Grandmaster</div>
                        <div className="dot mx-1"></div>
                        <div>
                          <img
                            className="invite-coin me-1"
                            src={hamCoin}
                            alt=""
                          />
                        </div>
                        <div className="fw-bold">353.29M</div>{" "}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-1 align-items-center mt-2">
                    <div>
                      <img className="invite-coin" src={hamCoin} alt="" />
                    </div>
                    <div className="fw-bold">+1.06M</div>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <div className="d-flex gap-2 row ms-2">
                  <button className="invite-btn d-flex justify-content-center align-items-center col-9">
                    <div>Invite a Friend</div> <TiUserAdd />
                  </button>
                  <button className="copy-btn col-2">
                    <PiCopySimple />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Earn more Coin section */}
      {activeSection === "earnCoinPage" && (
        <div className="py-5 px-3">
          <div className="d-flex justify-content-center align-items">
            <div className="bigHamCoin">
              <BiDollar className="dollar" />
            </div>
          </div>
          <div className="earn-text">Earn more coins</div>
          <div className="mb-4">
            <h5 className="mb-3 fw-bold">Hamster Youtube</h5>
            <div className="row mx-auto">
              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={youtube} alt="" />
                  </div>

                  <div>
                    <div>Are NFTs dead in 2024?</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+100,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={youtube} alt="" />
                  </div>

                  <div>
                    <div>Are NFTs dead in 2024?</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+100,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3 fw-bold">Daily tasks</h5>
            <div className="row mx-auto">
              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={dailyTask} alt="" />
                  </div>

                  <div>
                    <div>Daily reward</div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-3 fw-bold">Tasks list</h5>
            <div className="row mx-auto">
              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={facebook} alt="" />
                  </div>

                  <div>
                    <div>Follow us on Facebook</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+100,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={instagram} alt="" />
                  </div>

                  <div>
                    <div>Follow us on Instagram</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+100,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={telegram} alt="" />
                  </div>

                  <div>
                    <div>Join our TG channel</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+5,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={x} alt="" />
                  </div>

                  <div>
                    <div>Follow our X account</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+5,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={youtube} alt="" />
                  </div>

                  <div>
                    <div>Choose your exchange</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+5,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>

              <div className="col-12 py-1 youtube-task d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                  <div>
                    <img className="youtube" src={addFriends} alt="" />
                  </div>

                  <div>
                    <div>Invite 3 friends</div>
                    <div className="d-flex justify-content-start align-items-center">
                      <div>
                        <img className="hamCoin me-2" src={hamCoin} alt="" />
                      </div>
                      <div className="fw-bold">+25,000</div>
                    </div>
                  </div>
                </div>

                <div className="fs-1">
                  <RiArrowRightSLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Airdrop Allocation Page */}
      {activeSection === "airDropPage" && (
        <div className="airpage py-5 mb-4 px-3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="listing-date-border1">
              <div>
                <img className="listing-date-border2" src={logo} alt="" />
                <div className="listing-date">
                  <div>
                    <div className="listing-info">DAYS</div>
                    <div className="listing-day">20</div>
                    <div className="listing-time">14:02:28</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="airdrop">AirDrop</div>
          <div className="row mx-auto d-flex justify-content-between align-items-center">
            <div className="listing-line col-4"></div>
            <div className="listing-text col-4 text-center">Listing date</div>
            <div className="listing-line col-4"></div>
          </div>
          <div className="list-date my-2 mb-3">September 26, 2024</div>
          <div className="line-through"></div>

          <div className="tba-points">
            <div className="info-icon">
              <BsInfoCircleFill />
            </div>
            <div>
              <div>AirDrop allocation points</div>
              <div className="tba mt-2 d-flex justify-content-center align-items-center">
                <RiAwardFill className="award" />
                <div>TBA</div>
              </div>
            </div>
          </div>

          <div className="withdrawSection mt-4 row mx-auto">
            <div
              onClick={() => setAirdropActiveSection("pointPage")}
              className={`cursor-pointer airdropPoints col-6 ${
                airdropActiveSection === "pointPage" ? "airdropPoint" : ""
              }`}
            >
              Points
            </div>
            <div
              onClick={() => setAirdropActiveSection("withdrawalPage")}
              className={`cursor-pointer airdropWithdrawals col-6 ${
                airdropActiveSection === "withdrawalPage"
                  ? "airdropWithdrawal"
                  : ""
              }`}
            >
              Withdrawal
            </div>
          </div>

          {airdropActiveSection === "pointPage" && (
            <div className="row mx-auto">
              {/* Points Content */}
              <div className="pointAllocation col-12">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <img className="hamCoined" src={hamCoin} alt="" />
                  </div>
                  <div>
                    <div>Passive income</div>
                    <div className="tba d-flex align-items-center">
                      <RiAwardFill className="awarded" />
                      <div>TBA</div>
                    </div>
                  </div>
                </div>
                <div>
                  <BsInfoCircleFill className="info-iconed" />
                </div>
              </div>
              <div className="pointAllocation col-12">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <img className="hamCoined" src={earnTask} alt="" />
                  </div>
                  <div>
                    <div>Earn tasks</div>
                    <div className="tba d-flex align-items-center">
                      <RiAwardFill className="awarded" />
                      <div>TBA</div>
                    </div>
                  </div>
                </div>

                <div>
                  <BsInfoCircleFill className="info-iconed" />
                </div>
              </div>
              <div className="pointAllocation col-12">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <img className="hamCoined" src={telegram} alt="" />
                  </div>
                  <div>
                    <div>Telegram Subscription</div>
                    <div className="tba d-flex align-items-center">
                      <RiAwardFill className="awarded" />
                      <div>TBA</div>
                    </div>
                  </div>
                </div>

                <div>
                  <BsInfoCircleFill className="info-iconed" />
                </div>
              </div>
              <div className="pointAllocation col-12">
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <img className="hamCoined" src={addFriends} alt="" />
                  </div>
                  <div>
                    <div>Friends</div>
                    <div className="tba d-flex align-items-center">
                      <RiAwardFill className="awarded" />
                      <div>TBA</div>
                    </div>
                  </div>
                </div>

                <div>
                  <BsInfoCircleFill className="info-iconed" />
                </div>
              </div>
            </div>
          )}

          {airdropActiveSection === "withdrawalPage" && (
            <div className="row mx-auto">
              {/* Withdrawal Content */}
              <div className="ton-wallet col-12">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <img className="tonCoined" src={toncoin} alt="Ton wallet" />
                  </div>
                  <div>Connect your TON wallet</div>
                </div>
                <RiArrowRightSLine className="arrow-right" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Section */}
      <div className="footer-nav-links">
        <div
          onClick={() => setActiveSection("mainPage")}
          className={`cursor-pointer exchange ${
            activeSection === "mainPage" ? "iconic" : ""
          }`}
        >
          <div>
            <div className="icons">
              <img className="trade-wallet" src={bingx} alt="Bing X Logo" />
            </div>
            <div>Exchange</div>
          </div>
        </div>
        <div
          onClick={() => handleMiningSectionClick("miningPage")}
          className={`cursor-pointer exchange ${
            activeSection === "miningPage" ? "iconic" : ""
          }`}
        >
          <div>
            <div className="icons">
              <IoHammerSharp />
            </div>
            <div>Mine</div>
          </div>
        </div>
        <div
          onClick={() => setActiveSection("friendInvitePage")}
          className={`cursor-pointer exchange ${
            activeSection === "friendInvitePage" ? "iconic" : ""
          }`}
        >
          <div>
            <div className="icons">
              <FaUserFriends />
            </div>
            <div>Friends</div>
          </div>
        </div>
        <div
          onClick={() => setActiveSection("earnCoinPage")}
          className={`cursor-pointer exchange ${
            activeSection === "earnCoinPage" ? "iconic" : ""
          }`}
        >
          <div>
            <div className="icons">
              <GiTwoCoins />
            </div>
            <div>Earn</div>
          </div>
        </div>
        <div
          onClick={() => handleAirdropSectionClick("airDropPage")}
          className={`cursor-pointer exchange ${
            activeSection === "airDropPage" ? "iconic" : ""
          }`}
        >
          <div>
            <div className="icons">
              <img src={logo} className="logo" alt="" />
            </div>
            <div>AirDrop</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
