import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Text } from "../../ui/Text/Text";
import style from "./Main.module.scss";
import Slider from "../Slider/Slider";
import classNames from "classnames";

const listElements = [
  {
    date: "19 ",
    month: "АВГУСТА",
    place: "Стадион",
    time: "21:00",
    firstMember: "Соперник 3",
    secondMember: "Соперник 4",
  },
  {
    date: "21",
    month: "ИЮЛЯ",
    place: "Стадион",
    time: "22:00",
    firstMember: "Соперник 1",
    secondMember: "Соперник 2",
  },
  {
    date: "12",
    month: "АВГУСТА",
    place: "Стадион",
    time: "14:00",
    firstMember: "Соперник 5",
    secondMember: "Соперник 6",
  },
  {
    date: "05",
    month: "МАЯ",
    place: "Стадион",
    time: "1:00",
    firstMember: "Соперник 7",
    secondMember: "Соперник 8",
  },
  {
    date: "25",
    month: "СЕНТЯБРЯ",
    place: "Стадион",
    time: "21:30",
    firstMember: "Соперник 7",
    secondMember: "Соперник 1",
  },
];

export const Main = () => {
  const INITIAL_SLIDE = 2;

  const leftMemberSlideRef = useRef(null);
  const rightMemberSlideRef = useRef(null);

  return (
    <div className={style.container}>
      <Slider
        data={listElements}
        initialSlide={INITIAL_SLIDE}
        rightRef={rightMemberSlideRef}
        leftRef={leftMemberSlideRef}
      />

      {/* left swiper */}
      <Swiper
        ref={leftMemberSlideRef}
        className={style.leftMember}
        slidesPerView={1}
        initialSlide={INITIAL_SLIDE}
        modules={[EffectFade]}
        effect="fade"
        crossFade
        draggable={false}
        spaceBetween={40}
      >
        {listElements.map((el, i) => (
          <SwiperSlide key={i} className={style.swiperSlide}>
            {({ isActive, isVisible }) => {
              return (
                <div
                  className={
                    isVisible
                      ? style.sliderInner
                      : classNames(
                          style.sliderInner,
                          style.sliderInnerUnvisible
                        )
                  }
                >
                  <Text weight="bold" style={style.member}>
                    {el.firstMember}
                  </Text>
                </div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* right swiper */}
      <Swiper
        ref={rightMemberSlideRef}
        className={style.rightMember}
        slidesPerView={1}
        initialSlide={INITIAL_SLIDE}
        spaceBetween={20}
        modules={[EffectFade]}
        effect="fade"
        draggable={false}
      >
        {listElements.map((el, i) => (
          <SwiperSlide key={i} className={style.swiperSlide}>
            {({ isActive, isVisible }) => {
              return (
                <div
                  className={
                    isVisible
                      ? style.sliderInner
                      : classNames(
                          style.sliderInner,
                          style.sliderInnerUnvisible
                        )
                  }
                >
                  <Text weight="bold" style={style.member}>
                    {el.secondMember}
                  </Text>
                </div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
