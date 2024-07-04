import React, { memo } from "react";

import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Button } from "../../ui/Button/Button";
import { Text } from "../../ui/Text/Text";
import style from "./Slider.module.scss";

const Slider = ({ data, leftRef, rightRef, initialSlide }) => {
  return (
    <div className={style.container}>
      <Swiper
        className={style.swiper}
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        slideToClickedSlide={true}
        slidesPerView={5}
        spaceBetween={50}
        mousewheel={{
          invert:true
        }}
        breakpoints={{
          1440: {
            coverflowEffect: {
              rotate: 0,
              stretch: 450,
              depth: 150,
              modifier: 1.3,
              slideShadows: false,
              scale: 0.9,
            },
          },
          990: {
            coverflowEffect: {
              rotate: 0,
              stretch: 200,
              depth: 100,
              modifier: 1.9,
              slideShadows: false,
              scale: 0.9,
            },
          },

          787: {
            coverflowEffect: {
              rotate: 0,
              stretch: 150,
              depth: 50,
              modifier: 1.7,
              slideShadows: false,
              scale: 0.9,
            },
          },
          576: {
            coverflowEffect: {
              rotate: 0,
              stretch: 100,
              depth: 50,
              modifier: 1.7,
              slideShadows: false,
              scale: 0.9,
            },
          },
          460: {
            coverflowEffect: {
              rotate: 0,
              stretch: 90,
              depth: 50,
              modifier: 1.1,
              slideShadows: false,
              scale: 0.9,
            },
          },
          320: {
            coverflowEffect: {
              rotate: 0,
              stretch: 45,
              depth: 30,
              modifier: 1,
              slideShadows: false,
              scale: 0.9,
            },
          },
        }}
        onActiveIndexChange={({ activeIndex }) => {
          leftRef?.current?.swiper?.slideTo(activeIndex);
          rightRef?.current?.swiper?.slideTo(activeIndex);
        }}
        initialSlide={initialSlide}
        onSwiper={(swiper) => console.log(swiper)}
        scrollbar={{ draggable: true }}
      >
        {data.map((el, i) => (
          <SwiperSlide key={i} className={style.swiperSlide}>
            {({ isVisible, isActive }) => {
              const isActiveStyle = isActive
                ? style.visibleText
                : classNames(style.visibleText, style.unvisibleText);

              return (
                <div
                  className={
                    isVisible
                      ? style.hexagon
                      : classNames(style.hexagon, style.unvisible)
                  }
                >
                  <div className={style.hexagonInner}>
                    <Text style={isActiveStyle}>{el.place}</Text>
                    <div
                      className={
                        isActive
                          ? style.allTimeVisibleTextRow
                          : style.allTimeVisibleTextCol
                      }
                    >
                      <Text weight="bold" style={style.date}>
                        {el.date}
                      </Text>
                      <Text weight="bold" style={style.date}>
                        {el.month}
                      </Text>
                    </div>
                    <Text style={classNames(isActiveStyle, style.time)}>
                      {el.time}
                    </Text>
                    <Button style={classNames(isActiveStyle, style.buyButton)}>
                      купить билет
                    </Button>
                  </div>
                </div>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Slider);
